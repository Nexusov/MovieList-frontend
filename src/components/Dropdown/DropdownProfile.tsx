import { Link } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google'; 
import { useAuthStore } from '../../store/store'; 
import s from './Dropdown.module.scss';
import UserIcon from '../icons/UserIcon';
import LogOutIcon from '../icons/LogOutIcon';

const DropdownProfile = () => {
  const logout = useAuthStore((state) => state.logout); 

  const handleLogout = () => {
    googleLogout();
    logout(); 
  };

  return (
    <ul className={s.dropdown} style={{ right: -8 }}>
      <li className={s.navLink}>
        <Link to="/profile"><UserIcon />Profile</Link>
      </li>
      <li className={s.logOut} onClick={handleLogout}><LogOutIcon /> Log Out</li>
    </ul>
  );
};

export default DropdownProfile;

//! TODO: Make one common dropdown