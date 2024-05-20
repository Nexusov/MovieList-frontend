import { MediaItem, SearchItem, User } from "../types/types";

export const transformUser = (user: User | undefined): User | undefined => {
  if (!user) return

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  }
}

export const transformMovie = (movie: MediaItem | undefined): MediaItem | undefined => {
  if (!movie) return

  return {
    imdbID: movie.imdbID,
    kinopoiskID: movie.kinopoiskID,
    titleEn: movie.titleEn,
    titleRu: movie.titleRu,
    alternativeName: movie.alternativeName,
    year: movie.year,
    releasedDate: movie.releasedDate,
    runtime: movie.runtime,
    director: movie.director,
    writer: movie.writer,
    descriptionEn: movie.descriptionEn,
    shortDescrEn: movie.shortDescrEn,
    descriptionRu: movie.descriptionRu,
    shortDescrRu: movie.shortDescrRu,
    ratingKp: movie.ratingKp,
    ratingIMDb: movie.ratingIMDb,
    ratingMetacritic: movie.ratingMetacritic,
    posterURL: movie.posterURL,
    previewUrl: movie.previewUrl,
    genres: movie.genres,
    type: movie.type,
    isSeries: movie.isSeries,
    totalSeasons: movie.totalSeasons,
  };
};

export const transformSearchItem = (movie: SearchItem | undefined): SearchItem | undefined  => {
  if (!movie) return

  return {
    imdbID: movie.imdbID,
    kinopoiskID: movie.kinopoiskID,
    titleEn: movie.titleEn,
    titleRu: movie.titleRu,
    year: movie.year,
    posterURL: movie.posterURL,
    ratingKp: movie.ratingKp,
    ratingIMDb: movie.ratingIMDb,
    ratingMetacritic: movie.ratingMetacritic,
    type: movie.type,
  }
}