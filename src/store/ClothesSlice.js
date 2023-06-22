import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API from './API';

export const clothesApi = createApi({
  reducerPath: 'clothesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}/` }),
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
