import axios from "axios";
import { baseURL } from "../config";

export const addToWatched = async (movieId: string, userRating?: number): Promise<string> => {
  try {
    const response = await axios.post(
      `${baseURL}/user/watched`,
      { movieId, userRating },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return response.data.message;
  } catch (error) {
    throw new Error('Failed to add movie to watched list');
  }
};

export const addToWatchList = async (movieId: string): Promise<string> => {
  try {
    const response = await axios.post(
      `${baseURL}/user/watchlist`,
      { movieId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return response.data.message;
  } catch (error) {
    throw new Error('Failed to add movie to watchlist');
  }
};