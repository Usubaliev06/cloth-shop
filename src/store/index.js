
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { clothesApi } from './ClothesSlice';

export const store = configureStore({
  reducer: {
    [clothesApi.reducerPath]: clothesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clothesApi.middleware),
});

setupListeners(store.dispatch);


