import useRequest from "../hooks/useRequest";
import { MediaItem, MovieSearchResponse, SearchItem } from "../types/types";
import { transformMovie, transformSearchItem, } from "../utils/dataTransformers";


/* export const GetUserById = (id: User['id']) => {
  const { data, error, mutate, isLoading, isError } = useRequest<User>(`/user/${id}`);
  const userData = transformUser(data);

  return { userData, error, mutate, isLoading, isError }
} */

export const GetMoviesBySearch = (title: SearchItem['titleEn']) => {
  const { data, error, mutate, isLoading, isError } = useRequest<MovieSearchResponse>(`/kp/movies/search?title=${encodeURIComponent(title)}`);
  const movieData = data ? data.docs.map(transformSearchItem).filter((item): item is SearchItem => item !== undefined) : [];

  return { movieData, error, mutate, isLoading, isError }
}

export const GetMovieByTitleOMDb = (title: MediaItem['titleEn']) => {
  const { data, error, mutate, isLoading, isError } = useRequest<MediaItem>(`/omdb/movie?title=${encodeURIComponent(title)}`);
  const movieData = transformMovie(data);

  return { movieData, error, mutate, isLoading, isError }
}

export const GetMovieByIdOMDb = (id: MediaItem['imdbID']) => {
  const { data, error, mutate, isLoading, isError } = useRequest<MediaItem>(`/movie/${id}`);
  const movieData = transformMovie(data);

  return { movieData, error, mutate, isLoading, isError }
}
