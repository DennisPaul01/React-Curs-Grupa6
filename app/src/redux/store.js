import { configureStore } from '@reduxjs/toolkit';
import { tutorsReducer } from './tutorsSlice';
import { facultiesReducer } from './facultiesSlice';

export const store = configureStore({
  reducer: {
    tutorsSlice: tutorsReducer,
    facultiesSlice: facultiesReducer,
  },
});
