import { MediaItem, SearchItem } from "../types/types";

/* export const transformUser = (user: User | undefined): User | undefined => {
  if (!user) return

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    photo: user.photo
  }
} */

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

  const defaultPosterURL = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'

  return {
    imdbID: movie.imdbID,
    kinopoiskID: movie.kinopoiskID,
    titleEn: movie.titleEn,
    titleRu: movie.titleRu,
    shortDescription: movie.shortDescription,
    year: movie.year || 'N/A',
    posterURL: movie.posterURL || defaultPosterURL,
    ratingKp: movie.ratingKp || 'N/A',
    ratingIMDb: movie.ratingIMDb || 'N/A',
    ratingMetacritic: movie.ratingMetacritic || 'N/A',
    type: movie.type,
    internalVotes: movie.internalVotes,
  }
}