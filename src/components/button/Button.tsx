import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  type: 'nav' | 'filter' | 'listSwitcher' | 'listControl' | 'controlIcon';
  children: ReactNode;
  isActive?: boolean
  title?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, children, onClick, isActive, title }) => {
  
  const getButtonByType = (type: ButtonProps['type']): JSX.Element => {
    const listSwitcher = isActive ? `${styles.listSwitcherButton} ${styles.active}` : styles.listSwitcherButton;
    const filterButton = isActive ? `${styles.filterButton} ${styles.active}` : styles.filterButton;
    const controlIcon = isActive ? `${styles.controlIcon} ${styles.active}` : styles.controlIcon;
    const listControlButton = isActive ? `${styles.listControlButton} ${styles.active}` : styles.listControlButton;
    
    switch (type) {
      case 'nav':
        return <button className={styles.navButton}>{children}</button>
      case 'filter':
        return <button className={filterButton} onClick={onClick}>{children}</button>
      case 'listSwitcher':
        return <button className={listSwitcher} onClick={onClick}>{children}</button> 
      case 'listControl':
        return <button className={listControlButton} onClick={onClick}>{children}</button> 
      case 'controlIcon':
        return <button className={controlIcon} onClick={onClick} title={title}>{children}</button> 
      default:
        return <button>{children}</button>;
    }
  };

  return getButtonByType(type);
};
export default Button;
