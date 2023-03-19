import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apikey = "ac91ba4";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.omdbapi.com/",
  }),
  endpoints: (builder) => ({
    searchByTitle: builder.query({
      query: (title: string) => ({
        url: `?apikey=${apikey}&s=${title}&type=movie`,
      }),
    }),

    searchById: builder.query({
      query: (id: string) => ({
        url: `?apikey=${apikey}&i=${id}&type=movie`,
      }),
    }),
  }),
});

export const { useSearchByIdQuery, useSearchByTitleQuery } = moviesApi;
