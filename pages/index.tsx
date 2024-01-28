/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Game } from "../redux/gamesSlice";

const HomePage = () => {
  const gamesOfTheMonth = useSelector(
    (state: any) => state.menu.gamesOfTheMonth
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-8">
        {/* Carousel */}
        <div
          className="hero min-h-96 mb-8"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">APA GAMES</h1>
              <p className="mb-5">Discover the world of games</p>
              <button className="btn btn-primary">
                <Link href="/game-list">Get Started To The Game List</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Games of the month */}
        <h1 className="text-3xl font-bold mb-4">Games Of The Month</h1>
        {gamesOfTheMonth ? (
          gamesOfTheMonth.map((g: Game) => (
            <div key={g.id} className="hero bg-base-200 place-items-start">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  alt={g.provider}
                  src={g.image.thumbnail.src}
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-5xl font-bold">{g.gameText}</h1>
                  <p className="py-6">{g.provider}</p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <span className="loading loading-infinity loading-lg"></span>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
