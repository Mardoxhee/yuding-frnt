import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { restaurantsApi } from '../services/restaurants';

export const store = configureStore({
  reducer: {
    [restaurantsApi.reducerPath]: restaurantsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restaurantsApi.middleware)
});

setupListeners(store.dispatch);
