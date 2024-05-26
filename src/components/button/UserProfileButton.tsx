import { useAuthStore } from '../../store/store';
import DropdownProfile from '../dropdown/DropdownProfile';
import { useEffect, useRef, useState } from 'react';
import s from './UserProfileButton.module.scss'

const UserProfileButton: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const loadUser = useAuthStore((state) => state.loadUser);
  const ref = useRef<HTMLButtonElement | null>(null);

  const defaultAvatarURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
  
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])

  const toggleDropdown = () => setIsOpen(isOpen => !isOpen);
  
  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <button className={s.profileButton} onClick={toggleDropdown} ref={ref}>
      <img src={user.photo ?? defaultAvatarURL} alt={`${user.name}'s avatar`} className={s.avatar} />
      <p className={s.userName}>{user.name ?? 'Your Name'}</p>
      {isOpen && <DropdownProfile />}
    </button>
  );
};

export default UserProfileButton;

//! TODO: Fix an incorrect user after logging into another account