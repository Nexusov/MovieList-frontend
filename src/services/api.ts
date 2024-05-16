import useRequest from "../hooks/useRequest";
import { MovieOMDb, User } from "../types/types";


export const GetUserById = (id: User['id']) => {
  const { data, error, mutate, isLoading, isError } = useRequest<User>(`/user/${id}`);
  const userData = transformUser(data);

  return { userData, error, mutate, isLoading, isError }
}

export const GetMovieByTitle = (title: MovieOMDb['Title']) => {
  const { data, error, mutate, isLoading, isError } = useRequest<MovieOMDb>(`/movie/search?title=${encodeURIComponent(title)}`);
  const movieData = transformMovie(data);

  return { movieData, error, mutate, isLoading, isError }
}

export const GetMovieById = (id: MovieOMDb['imdbID']) => {
  const { data, error, mutate, isLoading, isError } = useRequest<MovieOMDb>(`/movie/${id}`);
  const movieData = transformMovie(data);

  return { movieData, error, mutate, isLoading, isError }
}

const transformUser = (user: User | undefined): User | undefined => {
  if (!user) return

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  }
}

const transformMovie = (movie: MovieOMDb | undefined): MovieOMDb | undefined => {
  if (!movie) return

  return {
    Title: movie.Title,
    Year: movie.Year,
    Rated: movie.Rated,
    Released: movie.Released,
    Runtime: movie.Runtime,
    Genre: movie.Genre,
    Director: movie.Director,
    Writer: movie.Writer,
    Actors: movie.Actors,
    Plot: movie.Plot,
    Language: movie.Language,
    Country: movie.Country,
    Awards: movie.Awards,
    Poster: movie.Poster,
    Ratings: movie.Ratings,
    Metascore: movie.Metascore,
    imdbRating: movie.imdbRating,
    imdbVotes: movie.imdbVotes,
    imdbID: movie.imdbID,
    Type: movie.Type,
    DVD: movie.DVD,
    BoxOffice: movie.BoxOffice,
    Production: movie.Production,
    Website: movie.Website,
    Response: movie.Response
  };
};