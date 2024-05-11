import { useState } from 'react';
import Button from '../button/Button'
import styles from './FilterTypeButtons.module.scss'

type FilterType = 'All' | 'Movies' | 'Series'

const FilterTypeButtons = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  return (
    <div className={styles.filterTypeButtons}>
      <Button
        type='filter'
        isActive={activeFilter === 'All'}
        onClick={() => setActiveFilter('All')}
      >
        All
      </Button>
      <Button
        type='filter'
        isActive={activeFilter === 'Movies'}
        onClick={() => setActiveFilter('Movies')}
      >
        Movies
      </Button>
      <Button
        type='filter'
        isActive={activeFilter === 'Series'}
        onClick={() => setActiveFilter('Series')}
      >
        Series
      </Button>
    </div>
  )
}

export default FilterTypeButtons