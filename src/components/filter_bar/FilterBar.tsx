import styles from './FilterBar.module.scss'
import FilterTypeButtons from './FilterTypeButtons';
import ListControlGroup from './ListControlGroup';

const FilterBar = () => {

  return (
    <div className={styles.filtersContainer}>
      <FilterTypeButtons />
      <ListControlGroup />
    </div>
  )
}

export default FilterBar