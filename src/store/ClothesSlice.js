import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log('hui', import.meta.env.VITE_BASE_URL)


export const clothesApi = createApi({
  reducerPath: 'clothesApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getClothes: builder.query({
      query: () => '/clothes',
  }),
  getClothesDetail: builder.query({
    query: (id) => `clothes/${id}`,
  }),
  }),
});


export const { useGetClothesQuery, useGetClothesDetailQuery } = clothesApi

export default clothesApi.reducerPath;

