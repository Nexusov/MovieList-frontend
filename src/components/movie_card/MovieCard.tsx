import { Movie } from '../../types/types';
import styles from './MovieCard.module.scss';

type MovieCardProps = {
  movie: Movie;
  openPortal: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, openPortal }) => {
  const {title, releaseYear, watchedAt, userRating, imdbRating, kinopoiskRating, imdbLink, kinopoiskLink, posterURL} = movie

  return (
      <div className={styles.card} onClick={() => openPortal(movie)}>
        <img className={styles.poster} draggable="false" src={posterURL} alt={`${title} poster`} />
        <div className={styles.textContainer}>
          <h3 className={styles.title} title='Dune: Part Two'>{title}</h3>
          <p className={styles.subTitle}>{releaseYear}</p>
          <p className={styles.subTitle}>Watched at {watchedAt}</p>
          <div className={styles.ratingContainer}>
            <p title='Your rating'>You: {userRating}</p>
            <a href={imdbLink} target='_blank' title='IMDb rating'>IMDb: {imdbRating}</a>
            <a href={kinopoiskLink} target='_blank' title='Kinopoisk rating'>КП: {kinopoiskRating}</a>
          </div>
        </div>
      </div>
  )
}

export default MovieCard