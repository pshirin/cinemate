import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  reducerPath: "service",
  endpoints: (build) => ({
    // getPokemonByName: build.query<Pokemon, string>({
    //   query: (name) => `pokemon/${name}`,
    // }),
  }),
});

export const {} = api;
