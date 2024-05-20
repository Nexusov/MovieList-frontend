import styles from './SearchForm.module.scss'
import SearchIcon from "../icons/SearchIcon"
import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { GetMoviesBySearch } from '../../services/api';
import SearchResults from './SearchResults';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const { movieData, isLoading, isError, error } = GetMoviesBySearch(debouncedSearchTerm);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  console.log(movieData)
  return (
    <div>
      <form className={styles.searchForm} onSubmit={e => e.preventDefault()}>
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
      {debouncedSearchTerm && <SearchResults data={movieData} isLoading={isLoading} isError={isError} error={error} />}
    </div>
  );
};

export default SearchForm