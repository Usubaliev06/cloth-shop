// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   data: null,
//   getData: {
//     status: null,
//     error: null,
//   },
// };

// export const fetchData = createAsyncThunk('clothes/fetchData', async () => {
//   try {
//     const response = await fetch(`${API}/`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// });

// export const clothesSlice = createSlice({
//   name: 'clothes',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.getData.status = 'loading';
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.data = action.payload;
//         state.getData.status = 'succeeded';
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.getData.status = 'failed';
//         state.getData.error = action.error.message;
//       });
//   },
// });

// export const staffActions = {
//   getData,
// }

// export default clothesSlice.reducer;



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API from './API';

export const clothesApi = createApi({
  reducerPath: 'clothesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}/` }),
  endpoints: (builder) => ({
    getClothes: builder.query({
      query: () => '/clothes',
    }),
  }),
});

export const { useGetClothesQuery } = clothesApi;

export default clothesApi.reducerPath;
