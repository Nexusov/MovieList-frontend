import styles from './SearchForm.module.scss'
import SearchIcon from "../icons/SearchIcon"
import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { GetMoviesBySearch } from '../../services/api';
import SearchResults from './SearchResults';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm.trim(), 1000);
  const { movieData, isLoading, isError, error } = GetMoviesBySearch(debouncedSearchTerm);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
      {debouncedSearchTerm && isModalOpen && <SearchResults data={movieData} isLoading={isLoading} isError={isError} error={error} onClose={handleCloseModal} />}
    </div>
  );
};

export default SearchForm

//! TODO: fix requests occur all the time + fix requests when page is loaded