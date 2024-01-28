import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useGamesQuery } from "../services/gameService";
import { Game } from "../redux/gamesSlice";

const GameList = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10); // Default 10 records/page
  const [searchQuery, setSearchQuery] = useState('');
  const { data: games, isLoading, isError } = useGamesQuery(page, pageSize, searchQuery);

  useEffect(() => {
    const { query } = router;
    const currentPage = query.page ? Number(query.page) : 1;
    const currentSearchQuery = query.search ? String(query.search) : '';
    setPage(currentPage);
    setSearchQuery(currentSearchQuery);
  }, [router.query]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch game data</div>;


  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    router.push(
      { pathname: router.pathname, query: { ...router.query, page: newPage } },
      undefined,
      { shallow: true }
    );
  };

  const handleSearch = () => {
    // Navigate to the first page when searching
    setPage(1);
    router.push({ pathname: router.pathname, query: { ...router.query, search: searchQuery, page: 1 } }, undefined, { shallow: true });
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Games List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-l-md p-2 focus:outline-none"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none">
          Search
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games?.items.map((game: Game) => (
          <li
            key={game.id}
            className="border rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out"
          >
            <img
              src={game.image.original.src}
              alt={game.gameText}
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">{game.gameText}</h3>
            <p className="text-gray-600">{game.provider}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-center">
        <nav aria-label="Pagination">
          <div className="join">
            <button
              onClick={() => handlePageChange(page - 1)}
              className="join-item btn"
            >
              {`<`}
            </button>
            <button className="join-item btn">Page {page}</button>
            <button
              onClick={() => handlePageChange(page + 1)}
              className="join-item btn"
            >
              {`>`}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default GameList;
