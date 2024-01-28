import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gamesSlice';
import menuReducer from './menuSlice';

const store = configureStore({
  reducer: {
    game: gameReducer,
    menu: menuReducer,
  },
});

export default store;
