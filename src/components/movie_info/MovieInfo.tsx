import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Movie } from '../../types/types';
import styles from './MovieInfo.module.scss';

type MovieInfoProps = {
  movie: Movie;
  onClose: () => void
}

const MovieInfo: React.FC<MovieInfoProps> = ({ movie, onClose  }) => {
  const {title, releaseYear, watchedAt, userRating, imdbRating, kinopoiskRating, imdbLink, kinopoiskLink, posterURL} = movie

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
        <h2>{title}</h2>
        <img className={styles.poster} draggable="false" src={posterURL} alt={`${title} poster`} />
        <p>Release Year: {releaseYear}</p>
        <p>Watched at: {watchedAt}</p>
        <p>Your Rating: {userRating}</p>
        <a href={imdbLink} target='_blank' title='IMDb rating'>IMDb: {imdbRating}</a>
        <a href={kinopoiskLink} target='_blank' title='Kinopoisk rating'>КП: {kinopoiskRating}</a>
        <button onClick={onClose}>✕</button>
      </div>
    </div>,
    document.body
  );
};

export default MovieInfo;