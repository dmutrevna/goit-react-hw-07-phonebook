import { configureStore } from '@reduxjs/toolkit';

import { phoneBookReducer } from './phoneBookSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
