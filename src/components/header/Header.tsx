import { NavLink } from 'react-router-dom';
import SearchForm from '../search_form/SearchForm';
import Logo from '../logo/Logo';
import { useAuthStore } from '../../store/store';
import UserProfileButton from '../button/UserProfileButton';
import SignInIcon from '../icons/SignInIcon';
import { useEffect } from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const token = useAuthStore((state) => state.token);
  const loadUser = useAuthStore((state) => state.loadUser);

  useEffect(() => {
    if (token) {
      loadUser();
    }
  }, [token, loadUser]);

  console.log('Current token in Header:', token);

  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/" className={styles.homeLink}><Logo /></NavLink>
      </nav>
      <SearchForm />
      <nav>
        {token ? (
          <UserProfileButton />
        ) : (
          <NavLink to="/login" className={styles.loginButton}><SignInIcon />Sign in</NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;


//! TODO: Add icons for navigation