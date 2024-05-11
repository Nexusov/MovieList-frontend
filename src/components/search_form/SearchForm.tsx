import styles from './SearchForm.module.scss'
import SearchIcon from "../icons/SearchIcon"

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <input type="search" placeholder="Search..." />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  )
}

export default SearchForm