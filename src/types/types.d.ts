export interface User {
  id: string;
  name: string;
  email: string;
  photo?: string
}

export interface MediaItem {
  imdbID: string;
  kinopoiskID: number;
  titleEn: string;
  titleRu: string;
  alternativeName: string | null;
  year: string;
  releasedDate: string;
  runtime: number;
  director: string;
  writer: string;
  descriptionEn: string;
  shortDescrEn: string;
  descriptionRu: string;
  shortDescrRu: string;
  ratingKp: number;
  ratingIMDb: number;
  ratingMetacritic: number;
  posterURL: string;
  previewUrl: string | null;
  genres: string[];
  type: string;
  isSeries: boolean;
  totalSeasons: number | null;
}

export interface SearchItem {
  imdbID: string;
  kinopoiskID: number;
  titleEn: string,
  titleRu: string,
  shortDescription: string,
  year: string,
  posterURL: string,
  ratingKp: number | string;
  ratingIMDb: number | string;
  ratingMetacritic: number | string;
  type: string;
  internalVotes: number;
}

export interface MovieSearchResponse {
  docs: SearchItem[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface FetchError extends Error {
  status: number; 
  message: string;
}
