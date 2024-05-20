import { MediaItem } from '../../types/types';
import styles from './MovieCard.module.scss';

type MovieCardProps = {
  movie: MediaItem;
  openPortal: (movie: MediaItem) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, openPortal }) => {
  const {titleEn, year, /* watchedAt, userRating, */ ratingIMDb, ratingKp, kinopoiskID, imdbID, posterURL} = movie

  return (
      <div className={styles.card} onClick={() => openPortal(movie)}>
        <img className={styles.poster} draggable="false" src={posterURL} alt={`${titleEn} poster`} />
        <div className={styles.textContainer}>
          <h3 className={styles.title} title='Dune: Part Two'>{titleEn}</h3>
          <p className={styles.subTitle}>{year}</p>
          {/* <p className={styles.subTitle}>Watched at {watchedAt}</p> */}
          <div className={styles.ratingContainer}>
            {/* <p title='Your rating'>You: {userRating}</p> */}
            <a href={`https://www.imdb.com/title/${imdbID}/`} target='_blank' title='IMDb rating'>IMDb: {ratingIMDb}</a>
            <a href={`https://www.kinopoisk.ru/film/${kinopoiskID}/`} target='_blank' title='Kinopoisk rating'>КП: {ratingKp}</a>
          </div>
        </div>
      </div>
  )
}

export default MovieCard