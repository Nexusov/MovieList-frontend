import { NavLink } from 'react-router-dom';
import SearchForm from '../search_form/SearchForm';
import Button from '../button/Button';
import Logo from '../logo/Logo';
import { useAuthStore } from '../../store/store';
import UserProfileButton from '../button/UserProfileButton';
import SignInIcon from '../icons/SignInIcon';
import styles from './Header.module.scss'

const Header = () => {
  const token = useAuthStore((state) => state.token);

  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/" className={styles.homeLink}><Logo /></NavLink>
      </nav>
      <SearchForm />
      <nav>
        <Button type='nav'>Add</Button>
        {token ? (
          <UserProfileButton />
        ) : (
          <NavLink to="/login" className={styles.loginButton}><SignInIcon />Sign in</NavLink>
        )}
      </nav>
    </header>
  )
}

export default Header

//! TODO: Add icons for navigation