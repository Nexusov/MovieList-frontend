import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './SearchResults.module.scss';
import { SearchItem } from '../../types/types';
import Loader from '../loader/Loader';
import { AxiosError } from 'axios';

interface SearchResultsProps {
  data: SearchItem[];
  isLoading: boolean;
  isError: boolean;
  error?: AxiosError | undefined | null;
  onClose: () => void
}

const SearchResults: React.FC<SearchResultsProps> = ({ data, isLoading, isError, error, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);
  
  if (isLoading) {
    return <div className={styles.results}><Loader /></div>;
  }

  if (isError) {
    return <div className={styles.results}>{error?.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div className={styles.results}>No results found</div>;
  }

  console.log(data)

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        {data.map(item => (
          <div key={item.kinopoiskID} className={styles.resultItem}>
            <img src={item.posterURL} alt={item.titleEn || item.titleRu} />
            <div>
              <h3>{item.titleEn || item.titleRu || 'N/A'}</h3>
              <h2>{item.titleEn ? item.titleRu : item.titleEn || null}</h2>
              <p>{item.year}</p>
              <p>IMDb: {item.ratingIMDb}</p>
              <p>Kinopoisk: {item.ratingKp}</p>
              <p>Metacritic: {item.ratingMetacritic}</p>
              <p>{item.type}</p>
              <p>{item.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>,
    document.body
  );
};

export default SearchResults;


//! TODO: Make this more beauty