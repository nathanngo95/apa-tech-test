import React from "react";
import { useMenuQuery } from "../services/gameService";
import { useDispatch } from "react-redux";
import { Menu, MenuItem, updateFooterContent, updateGamesOfTheMonth, updateMenu } from "../redux/menuSlice";
import { useSelector } from "react-redux";
import Link from "next/link";

const Header = () => {
  const dispatch = useDispatch();
  const { data: menuItems } = useMenuQuery();
  const headerItems: MenuItem[] = useSelector(
    (state: any) => state.menu.menu.lobby.items
  );
  React.useEffect(() => {
    if (menuItems) {
      dispatch(updateMenu(menuItems.menu.lobby.items));
      dispatch(updateFooterContent(menuItems.footerContent));
      dispatch(updateGamesOfTheMonth(menuItems.gamesOfTheMonth));
    }
  }, [menuItems, dispatch]);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-white text-xl font-bold"> <Link href='/'>Game Lobby</Link></span>
          {headerItems?.map((menuItem: MenuItem) => (
            <Link key={menuItem.id} href={menuItem.path}>
              <a className="text-white">{menuItem.name}</a>
            </Link>
          ))}
        </div> 
      </div>
    </nav>
  );
};

export default Header;
