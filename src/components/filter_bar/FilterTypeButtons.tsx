import Button from '../button/Button'
import styles from './FilterTypeButtons.module.scss'
import { useFilterStore } from '../../store/store';

export type FilterType = 'All' | 'Movies' | 'Series'

const FilterTypeButtons = () => {
  const { filterType, setFilterType } = useFilterStore();

  return (
    <div className={styles.filterTypeButtons}>
      <Button
        type='filter'
        isActive={filterType === 'All'}
        onClick={() => setFilterType('All')}
      >
        All
      </Button>
      <Button
        type='filter'
        isActive={filterType === 'Movies'}
        onClick={() => setFilterType('Movie')}
      >
        Movies
      </Button>
      <Button
        type='filter'
        isActive={filterType === 'Series'}
        onClick={() => setFilterType('Series')}
      >
        Series
      </Button>
    </div>
  );
};

export default FilterTypeButtons