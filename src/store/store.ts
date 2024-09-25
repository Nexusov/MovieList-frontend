import { create } from 'zustand';
import axios from 'axios';
import { User } from '../types/types';
import { baseURL } from '../config';
import { FilterType } from '../components/filter_bar/FilterTypeButtons';


interface FilterState {
  filterType: FilterType;
  setFilterType: (filterType: FilterType) => void;
  isReversed: boolean;
  toggleReverse: () => void;
}

interface AuthState {
  token: string | null;
  user: User | null;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
  loadUser: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  user: null,
  setToken: (token: string) => {
    localStorage.setItem('token', token);
    set({ token });
    useAuthStore.getState().loadUser();
  },
  setUser: (user: User) => set({ user }),
  loadUser: async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const userResponse = await axios.get(`${baseURL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        set({ user: userResponse.data });
      } catch (error) {
        console.error('Error loading user:', error);
        set({ token: null, user: null });
        localStorage.removeItem('token');
      }
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ token: null, user: null });
  },
}));

export const useFilterStore = create<FilterState>((set) => ({
  filterType: 'All',
  setFilterType: (filterType) => set({ filterType }),
  isReversed: false,
  toggleReverse: () => set((state) => ({ isReversed: !state.isReversed })),
}));