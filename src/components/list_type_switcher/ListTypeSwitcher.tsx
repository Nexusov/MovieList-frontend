import styles from './ListTypeSwitcher.module.scss';
import Button from '../button/Button';
import { useState } from 'react';

type ListType = 'watchedList' | 'watchLater'

const ListTypeSwitcher = () => {
  const [activeList, setActiveList] = useState<ListType>('watchedList');

  return (
    <div className={styles.listSwitcher}>
      <Button
        type='listSwitcher'
        isActive={activeList === 'watchedList'}
        onClick={() => setActiveList('watchedList')}
      >
        Watched List
      </Button>
      <Button
        type='listSwitcher'
        isActive={activeList === 'watchLater'}
        onClick={() => setActiveList('watchLater')}
      >
        Watch Later
      </Button>
    </div>
  )
}

export default ListTypeSwitcher