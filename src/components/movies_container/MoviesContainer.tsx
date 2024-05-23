import { useState } from 'react';
import { MediaItem } from '../../types/types';
import MovieCard from '../movie_card/MovieCard';
import MovieInfo from '../movie_info/MovieInfo';
import styles from './MoviesContainer.module.scss';

const movies: MediaItem[] = [
  {
    imdbID: '1',
    titleEn: 'Dune: Part Two',
    year: '2024',
    watchedAt: '8 Mar. 2024',
    userRating: 9.9,
    ratingIMDb: 9.9,
    ratingKp: 9.9,
    posterURL: 'https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UY4096_.jpg',
  },
  {
    imdbID: '2',
    titleEn: 'Forrest Gump',
    year: '1994',
    watchedAt: '12 May 2024',
    userRating: 9.5,
    ratingIMDb: 8.8,
    ratingKp: 9.0,
    posterURL: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX558_.jpg',
  },
];

const MoviesContainer = () => {
  const [selectedMovie, setSelectedMovie] = useState<MediaItem | null>(null);

  const openPortal = (movie: MediaItem) => {
    setSelectedMovie(movie);
  };

  const closePortal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className={styles.container}>
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} openPortal={openPortal} />
      ))}
      {selectedMovie && <MovieInfo movie={selectedMovie} onClose={closePortal} />}
    </div>
  )
}

export default MoviesContainer