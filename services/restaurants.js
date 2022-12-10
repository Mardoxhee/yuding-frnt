import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const restaurantsApi = createApi({
  reducerPath: "restaurants",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://yuding-platform.onrender.com",
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => `restaurants`,
    }),
    getRestaurantsDetails: builder.query({
      query: ({ id }) => `/restaurants/${id}`,
    }),
    getRecomandedRestaurants: builder.query({
      query: () => `restaurants?isRecommanded=true`,
    }),
    getTemoignages: builder.query({
      query: () => `temoignages`,
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRecomandedRestaurantsQuery,
  useGetRestaurantsDetailsQuery,
  useGetTemoignagesQuery,
} = restaurantsApi;
