import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const pending = (state, action) => {
  state.isLoading = true;
  state.error = '';
};

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isLoading = false;
      })
      .addMatcher(action => action.type.endsWith('/pending'), pending)
      .addMatcher(action => action.type.endsWith('/rejected'), rejected);
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;
