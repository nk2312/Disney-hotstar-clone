import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from '../features/MovieSlice';
import { userReducer } from '../features/UserSlice';


export const store = configureStore({
  reducer: {
    movie:movieReducer ,
    user:userReducer
  },
});
