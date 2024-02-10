import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import dayjs from "dayjs";

const getPremiereDates = () =>
  `${dayjs().subtract(100, "day").format("DD.MM.YYYY")}-${dayjs().format(
    "DD.MM.YYYY"
  )}`;

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev",
    headers: {
      accept: "application/json",
      "X-API-KEY": import.meta.env.VITE_TOKEN,
    },
  }),
  reducerPath: "service",
  endpoints: (build) => ({
    getGenres: build.query<unknown, void>({
      query: (arg) => ({
        url: "/v1/movie/possible-values-by-field?field=genres.name",
      }),
    }),
    getAll: build.query<unknown, void>({
      query: (arg) => ({
        url: "/v1.4/movie",
      }),
    }),
    getWorldPremiere: build.query<unknown, void>({
      query: (arg) => ({
        url: `/v1.4/movie?page=1&limit=10&notNullFields=backdrop.url&rating.kp=6-10&premiere.world=${getPremiereDates()}`,
      }),
    }),
  }),
});

export const { useGetGenresQuery, useGetAllQuery, useGetWorldPremiereQuery } =
  api;
