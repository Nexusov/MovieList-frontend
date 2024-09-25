import { useEffect, useRef, useState } from 'react';
import Button from '../button/Button'
import DropdownIcon from '../icons/DropdownIcon'
import styles from './SortByGroup.module.scss'
import Dropdown from '../dropdown/Dropdown';
import SortReverseIcon from '../icons/SortReverseIcon';
import { useFilterStore } from '../../store/store';

const SortByGroup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const { isReversed, toggleReverse } = useFilterStore();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])

  const toggleDropdown = () => setIsOpen(isOpen => !isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <div ref={ref} className={styles.sortByContainer}>
      <Button type='listControl' isActive={isOpen} onClick={toggleDropdown}>
        Sort by
        <DropdownIcon isOpen={isOpen} />
      </Button>
      {isOpen && <Dropdown />}
      <Button
        type='controlIcon'
        onClick={toggleReverse}
        isActive={isReversed}
        title='Ascending order'
      >
        <SortReverseIcon isActive={isReversed} />
      </Button>
    </div>
  );
};

export default SortByGroup

//! TODO: Make Dropdown as a React Portal. Replace handleClickOutside with PortalLayout onClick={closePortal}