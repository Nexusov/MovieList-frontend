import React from 'react';
import ReactDOM from 'react-dom';
import styles from './SearchResults.module.scss';
import { FetchError, SearchItem } from '../../types/types';
import Loader from '../loader/Loader';

interface SearchResultsProps {
  data: SearchItem[];
  isLoading: boolean;
  isError: boolean;
  error?: FetchError
}

const SearchResults: React.FC<SearchResultsProps> = ({ data, isLoading, isError, error }) => {
  if (isLoading) {
    return <div className={styles.results}><Loader /></div>;
  }

  if (isError) {
    return <div className={styles.results}>{error?.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div className={styles.results}>No results found</div>;
  }

  return ReactDOM.createPortal(
    <div className={styles.container}>
      {data.map(item => (
        <div key={item.kinopoiskID} className={styles.resultItem}>
          <img src={item.posterURL} alt={item.titleEn || item.titleRu} />
          <div>
            <h3>{item.titleEn || item.titleRu}</h3>
            <p>{item.year}</p>
            <p>IMDb: {item.ratingIMDb}</p>
            <p>Kinopoisk: {item.ratingKp}</p>
            <p>Metacritic: {item.ratingMetacritic}</p>
          </div>
        </div>
      ))}
    </div>,
    document.body
  );
};

export default SearchResults;
