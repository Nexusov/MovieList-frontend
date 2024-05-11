import styles from './ListControlGroup.module.scss'
import SortByGroup from './SortByGroup'
import ViewTypeControlGroup from './ViewTypeControlGroup'

const ListControlGroup = () => {
  return (
    <div className={styles.listControlGroup}>
      <SortByGroup />
      <ViewTypeControlGroup />
    </div>
  )
}

export default ListControlGroup