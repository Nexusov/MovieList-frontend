export interface Movie {
  id: number;
  title: string;
  releaseYear: number;
  watchedAt: string;
  userRating: number;
  imdbRating: number;
  imdbLink: string;
  kinopoiskRating: number;
  kinopoiskLink: string;
  posterURL: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface MovieOMDb {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<{ Source: string, Value: string }>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}