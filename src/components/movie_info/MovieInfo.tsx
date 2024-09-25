import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { MediaItem } from '../../types/types';
import styles from './MovieInfo.module.scss';

type MovieInfoProps = {
  movie: MediaItem;
  onClose: () => void
}

const MovieInfo: React.FC<MovieInfoProps> = ({ movie, onClose }) => {
  const { titleEn, year, /* watchedAt, userRating, */ ratingIMDb, ratingKp, kinopoiskID, imdbID, posterURL, shortDescription } = movie

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

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img className={styles.poster} draggable="false" src={posterURL} alt={`${titleEn} poster`} />
        <h2>{titleEn}</h2>
        <p>Release Year: {year}</p>
        {/*         <p>Watched at: {watchedAt}</p>
        <p>Your Rating: {userRating}</p> */}
        <div className={styles.ratingContainer}>
          <a href={`https://www.imdb.com/title/${imdbID}/`} target='_blank' title='IMDb rating'>IMDb: {ratingIMDb}</a>
          <a href={`https://www.kinopoisk.ru/film/${kinopoiskID}/`} target='_blank' title='Kinopoisk rating'>КП: {ratingKp}</a>
        </div>
        <p>{shortDescription}</p>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
      </div>
    </div>,
    document.body
  );
};

export default MovieInfo;