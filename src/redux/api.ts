import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
  }),
});

export const { useGetGenresQuery, useGetAllQuery } = api;
