import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Game {
  provider: string;
    gameText: string;
    id: string;
    image: {
      original: {
        src: string;
      };
      thumbnail: {
        src: string;
      };
    };
}[];

interface GameState {
  gameItems: Game[];
}
const initialState: GameState = {
  gameItems: []
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateGameData(state, action: PayloadAction<Game[]>) {
      state.gameItems = action.payload;
    },
  },
});

export const { updateGameData } = gameSlice.actions;
export default gameSlice.reducer;
