import { useQuery } from "react-query";
import { Menu, MenuItem } from "../redux/menuSlice";
import { Game } from "../redux/gamesSlice";



interface GameList {
  count: number;
  items: Game[];
  nextPage?: string;
  previousPage?: string;
}

export const useMenuQuery = () => {
  return useQuery<Menu>("menu", async () => {
    const response = await fetch(
      "https://casino.api.stg.kansino.nl/v1/kansino/en/config"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch menu data");
    }
    return response.json();
  });
};

export const useGamesQuery = (page: number, pageSize: number, searchQuery: string) => {
  return useQuery<GameList>(['games', page, pageSize], async () => {
    const response = await fetch(`https://casino.api.stg.kansino.nl/v1/kansino/en/games/tiles?pageNumber=${page}&pageSize=${pageSize}&search=${searchQuery}`);
    if (!response.ok) {
      throw new Error('Failed to fetch game data');
    }
    return response.json();
  });
};

