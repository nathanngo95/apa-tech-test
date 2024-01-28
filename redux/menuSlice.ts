import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "./gamesSlice";

export interface MenuItem {
  id: number;
  name: string;
  path: string;
  image?: {
    alt?: string;
    original?: {
      src?: string;
    };
  };
}

export interface Footer {
  copyright: string;
  logoUrl: string;
  links: { text: string; pagePath: string }[];
}

export interface Menu {
  footerContent: Footer;
  menu: {
    lobby: {
      items: MenuItem[];
    };
  };
  gamesOfTheMonth: Game[];
}

const initialMenuState: Menu = {
  footerContent: {
    copyright: "",
    links: [],
    logoUrl: "",
  },
  menu: {
    lobby: {
      items: [],
    },
  },
  gamesOfTheMonth: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initialMenuState,
  reducers: {
    updateFooterContent(state, action: PayloadAction<Footer>) {
      state.footerContent = action.payload;
    },
    updateMenu(state, action: PayloadAction<MenuItem[]>) {
      state.menu.lobby.items = action.payload;
    },
    updateGamesOfTheMonth(state, action: PayloadAction<Game[]>) {
      state.gamesOfTheMonth = action.payload;
    },
  },
});

export const { updateFooterContent, updateMenu, updateGamesOfTheMonth } = menuSlice.actions;
export default menuSlice.reducer;
