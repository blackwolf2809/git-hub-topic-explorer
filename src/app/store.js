import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../features/components/search/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice
  },
});
