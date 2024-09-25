import { useState } from 'react';
import { MediaItem } from '../../types/types';
import MovieCard from '../movie_card/MovieCard';
import MovieInfo from '../movie_info/MovieInfo';
import styles from './MoviesContainer.module.scss';
import { useFilterStore } from '../../store/store';

const movies: MediaItem[] = [
  {
    imdbID: '1',
    titleEn: 'Dune: Part Two',
    year: '2024',
    watchedAt: '8 Mar. 2024',
    userRating: 9.9,
    ratingIMDb: 9.9,
    type: "movie",
    ratingKp: 9.9,
    posterURL: 'https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UY4096_.jpg',
  },
  {
    imdbID: "tt0903747",
    internalVotes: 2167416,
    kinopoiskID: 404900,
    posterURL: "https://image.openmoviedb.com/kinopoisk-images/1900788/fb35416f-3b0d-4b96-bc65-cf6923f9e329/orig",
    ratingIMDb: 9.5,
    ratingKp: 8.9,
    ratingMetacritic: 0,
    shortDescription: "Умирающий учитель химии начинает варить мет ради благополучия семьи. Выдающийся драматический сериал 2010-х",
    titleEn: "Breaking Bad",
    titleRu: "Во все тяжкие",
    type: "series",
    year: 2008
  },
  {
    imdbID: '2',
    titleEn: 'Forrest Gump',
    year: '1994',
    watchedAt: '12 May 2024',
    userRating: 9.5,
    ratingIMDb: 8.8,
    ratingKp: 9.0,
    type: "movie",
    posterURL: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX558_.jpg',
  },
  {
    imdbID: "tt0145487",
    internalVotes: 887009,
    kinopoiskID: 838,
    posterURL: "https://image.openmoviedb.com/kinopoisk-images/1946459/428e2842-4157-45e8-a9af-1e5245e52c37/orig",
    ratingIMDb: 7.4,
    ratingKp: 7.739,
    ratingMetacritic: 7.6,
    shortDescription: "Школьник-неудачник Питер Паркер становится супергероем. Тоби Магуайр в культовом кинокомиксе Сэма Рэйми",
    titleEn: "Spider-Man",
    titleRu: "Человек-паук",
    type: "movie",
    year: 2002,
  },
  {
    imdbID: "tt0241527",
    internalVotes: 862554,
    kinopoiskID: 689,
    posterURL: "https://image.openmoviedb.com/kinopoisk-images/1898899/27ed5c19-a045-49dd-8624-5f629c5d96e0/orig",
    ratingIMDb: 7.6,
    ratingKp: 8.278,
    ratingMetacritic: 7.1,
    shortDescription: "Гарри поступает в школу магии Хогвартс и заводит друзей. Первая часть большой франшизы о маленьком волшебнике",
    titleEn: "Harry Potter and the Sorcerer's Stone",
    titleRu: "Гарри Поттер и философский камень",
    type: "movie",
    year: 2001
  },
  {
    imdbID: "tt0111161",
    internalVotes: 2921822,
    kinopoiskID: 326,
    posterURL: "https://image.openmoviedb.com/kinopoisk-images/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/orig",
    ratingIMDb: 9.3,
    ratingKp: 9.109,
    ratingMetacritic: 8.2,
    shortDescription: "Несправедливо осужденный банкир готовит побег из тюрьмы. Тим Роббинс в выдающейся экранизации Стивена Кинга",
    titleEn: "The Shawshank Redemption",
    titleRu: "Побег из Шоушенка",
    type: "movie",
    year: 1994
  },
  {
    imdbID: "tt5797184",
    internalVotes: 44906,
    kinopoiskID: 1055528,
    posterURL: "https://image.openmoviedb.com/kinopoisk-images/1629390/03049446-ddac-49d0-a44b-d3bc4dcf6d73/orig",
    ratingIMDb: 6.8,
    ratingKp: 7.071,
    ratingMetacritic: 6.4,
    shortDescription: "Борцы с апартеидом планируют побег из африканской тюрьмы. Дэниэл Рэдклифф в триллере по реальной истории",
    titleEn: "Escape from Pretoria",
    titleRu: "Побег из Претории",
    type: "movie",
    year: 2020
  },
  {
    imdbID: null,
    internalVotes: 71104,
    kinopoiskID: 4442819,
    posterURL: "https://image.openmoviedb.com/kinopoisk-images/9784475/4de15a6a-e875-40b0-8f9a-75acc6a78125/orig",
    ratingIMDb: 0,
    ratingKp: 6.646,
    ratingMetacritic: 0,
    shortDescription: "Наемники отправляются в зону конфликта на поиски сослуживцев. Драйвовый экшен по мотивам онлайн-шутера",
    titleEn: null,
    titleRu: "Побег из Таркова. Рейд",
    type: "movie",
    year: 2021
  },
  {
    imdbID: "tt17081112",
    internalVotes: 676,
    kinopoiskID: 4720042,
    posterURL: "https://image.openmoviedb.com/kinopoisk-images/6201401/e3773dee-5309-454c-8e37-fab131d9171e/orig",
    ratingIMDb: 5.6,
    ratingKp: 8.21,
    ratingMetacritic: 0,
    shortDescription: "Медведь и инопланетянин должны спасти Землю от космических пиратов. Продолжение франшизы о мишках Буни",
    titleEn: "Boonie Bears: Back To Earth",
    titleRu: "Побег из космоса",
    type: "cartoon",
    year: 2022
  },
  {
    imdbID: "tt0120630",
    internalVotes: 213388,
    kinopoiskID: 635,
    posterURL: "https://image.openmoviedb.com/kinopoisk-images/1704946/02bfc64d-d494-4df3-818a-f23f7810309b/orig",
    ratingIMDb: 7.1,
    ratingKp: 6.957,
    ratingMetacritic: 8.1,
    shortDescription: "Курочкам на ферме миссис Туиди приходится нелегко",
    titleEn: "Chicken Run",
    titleRu: "Побег из курятника",
    type: "cartoon",
    year: 2000
  },
  {
    imdbID: "tt1226229",
    internalVotes: 186135,
    kinopoiskID: 412299,
    posterURL: "https://image.openmoviedb.com/kinopoisk-images/1946459/42cdd920-508d-4fa0-bf37-0e48d0b8c5e2/orig",
    ratingIMDb: 6.3,
    ratingKp: 6.567,
    ratingMetacritic: 6.3,
    shortDescription: "Арон Гринберг получил работу, о которой мечтал всю жизнь",
    titleEn: "Get Him to the Greek",
    titleRu: "Побег из Вегаса",
    type: "movie",
    year: 2010
  },
  {
    imdbID: "tt0082340",
    internalVotes: 160498,
    kinopoiskID: 4404,
    posterURL: "https://image.openmoviedb.com/kinopoisk-images/4486454/de3e73ab-8192-4249-bca4-7033203761a4/orig",
    ratingIMDb: 7.1,
    ratingKp: 6.957,
    ratingMetacritic: 7.3,
    shortDescription: "Непокорный солдат ищет президента в Нью-Йорке, ставшем тюрьмой. Культовая фантастика Джона Карпентера",
    titleEn: "Escape from New York",
    titleRu: "Побег из Нью-Йорка",
    type: "movie",
    year: 1981
  },
  {
    imdbID: "tt1131748",
    internalVotes: 27365,
    kinopoiskID: 415249,
    posterURL: "https://image.openmoviedb.com/kinopoisk-images/1629390/9ff40898-042d-4535-a5d1-a95c4b362e8a/orig",
    ratingIMDb: 7.8,
    ratingKp: 8.014,
    ratingMetacritic: 0,
    shortDescription: "Сару арестовывают за убийство матери Майкла и отправляют в тюрьму, и она все ещё носит его ребёнка под сердцем",
    titleEn: "Prison Break: The Final Break",
    titleRu: "Побег из тюрьмы: Финальный побег",
    type: "movie",
    year: 2009
  },
  {
    imdbID: "tt25981462",
    internalVotes: 180,
    kinopoiskID: 5215684,
    posterURL: "https://image.openmoviedb.com/kinopoisk-images/10900341/882022d2-40f1-4768-bbfa-52159cbaeb2b/orig",
    ratingIMDb: 6.5,
    ratingKp: 8.008,
    ratingMetacritic: 0,
    shortDescription: "Братья-медведи разыскивают маму, пропавшую много лет назад. Продолжение анимационной франшизы из Китая",
    titleEn: "Boonie Bears: Guardian Code",
    titleRu: "Побег из страны роботов",
    type: "cartoon",
    year: 2023
  },
  {
    imdbID: "tt9911196",
    internalVotes: 3371,
    kinopoiskID: 1246629,
    posterURL: "https://image.openmoviedb.com/kinopoisk-images/6201401/7e8527e3-1a08-4b3c-b3d0-b2c4ceb58d6a/orig",
    ratingIMDb: 7.4,
    ratingKp: 7.117,
    ratingMetacritic: 0,
    shortDescription: "Подкаблучник симулирует деменцию, чтобы обрести свободу. Адаптация чешского драмеди от авторов «Зыби»",
    titleEn: "De beentjes van Sint-Hildegard",
    titleRu: "Побег из брака",
    type: "movie",
    year: 2020
  },
];

const MoviesContainer = () => {
  const [selectedMovie, setSelectedMovie] = useState<MediaItem | null>(null);
  const { filterType, isReversed } = useFilterStore();

  const openPortal = (movie: MediaItem) => {
    setSelectedMovie(movie);
  };

  const closePortal = () => {
    setSelectedMovie(null);
  };

  const filteredMovies = movies.filter(movie => {
    if (filterType === 'All') return true;
    return movie.type === filterType.toLowerCase();
  });

  const displayedMovies = isReversed ? [...filteredMovies].reverse() : filteredMovies;

  return (
    <div className={styles.container}>
      {displayedMovies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} openPortal={openPortal} />
      ))}
      {selectedMovie && <MovieInfo movie={selectedMovie} onClose={closePortal} />}
    </div>
  )
}

export default MoviesContainer