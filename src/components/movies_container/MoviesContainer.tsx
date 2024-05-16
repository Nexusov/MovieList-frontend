import { useState } from 'react';
import { Movie } from '../../types/types';
import MovieCard from '../movie_card/MovieCard';
import MovieInfo from '../movie_info/MovieInfo';
import styles from './MoviesContainer.module.scss';

const movies: Movie[] = [
  {
    id: 1,
    title: 'Dune: Part Two',
    releaseYear: 2024,
    watchedAt: '8 Mar. 2024',
    userRating: 9.9,
    imdbRating: 9.9,
    imdbLink: 'https://www.imdb.com/title/tt15239678/',
    kinopoiskRating: 9.9,
    kinopoiskLink: 'https://www.kinopoisk.ru/film/4540126/',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UY4096_.jpg',
  },
  {
    id: 2,
    title: 'Forrest Gump',
    releaseYear: 1994,
    watchedAt: '12 May 2024',
    userRating: 9.5,
    imdbRating: 8.8,
    imdbLink: 'https://www.imdb.com/title/tt0109830/',
    kinopoiskRating: 9.0,
    kinopoiskLink: 'https://www.kinopoisk.ru/film/448/',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX558_.jpg',
  },
];

const MoviesContainer = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const openPortal = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const closePortal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className={styles.container}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} openPortal={openPortal} />
      ))}
      {selectedMovie && <MovieInfo movie={selectedMovie} onClose={closePortal} />}
    </div>
  )
}

export default MoviesContainer