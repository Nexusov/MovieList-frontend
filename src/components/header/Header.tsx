import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss'

import SearchForm from '../search_form/SearchForm';
import Button from '../button/Button';
import Logo from '../logo/Logo';

const Header = () => {

  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/" className={styles.homeLink}><Logo /></NavLink>
      </nav>
      <SearchForm />
      <nav>
        <Button type='nav'>Add</Button>
        <Button type='nav'>Login</Button>
      </nav>
    </header>
  )
}

export default Header

//! TODO: Add icons for navigation