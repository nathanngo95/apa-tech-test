import React from "react";
import GameList from "../components/GameList";
import Footer from "../components/Footer";
import Header from "../components/Header";

const GameListPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <GameList />
      <Footer />
    </div>
  );
};

export default GameListPage;
