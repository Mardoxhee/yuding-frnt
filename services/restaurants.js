import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const restaurantsApi = createApi({
  reducerPath: 'restaurants',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://yuding.herokuapp.com/'
    baseUrl: 'http://yuding.herokuapp.com'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => `restaurants`
    })
  })
});

export const { useGetRestaurantsQuery } = restaurantsApi;
