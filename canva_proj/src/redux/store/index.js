import { configureStore } from '@reduxjs/toolkit';
import figureReducer from '../features/figure';

export const store = configureStore({
  reducer: {
    figure: figureReducer
  }
});
