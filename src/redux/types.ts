import { store } from "./store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ApiBaseResponse<T> = {
  docs: T[];
  limit: number;
  page: number;
  pages: number;
  total: number;
};

export type ApiFilm = {
  status: string | null;
  rating: {
    kp: number | null;
    imdb: number | null;
    filmCritics: number | null;
    russianFilmCritics: number | null;
    await: number | null;
  };
  votes: {
    kp: number | null;
    imdb: number | null;
    filmCritics: number | null;
    russianFilmCritics: number | null;
    await: number | null;
  };
  backdrop: {
    url: string | null;
    previewUrl: string | null;
  };
  movieLength: number | null;
  id: number | null;
  type: string | null;
  name: string | null;
  description: string | null;
  year: number | null;
  poster: {
    url: string | null;
    previewUrl: string | null;
  };
  genres: { name: string }[];
  countries: { name: string }[];
  typeNumber: number | null;
  alternativeName: string | null;
  enName: string | null;
  names: { name: string; language?: string; type?: string | null }[];
  ratingMpaa: string | null;
  shortDescription: string | null;
  ticketsOnSale: boolean | null;
  ageRating: number | null;
  logo: {
    url: string | null;
  };
  top10: number | null;
  top250: number | null;
  isSeries: boolean| null;
  seriesLength: number | null;
  totalSeriesLength: number | null;
};