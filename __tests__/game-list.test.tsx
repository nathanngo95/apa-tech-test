import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GameList from "../components/GameList";

import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock the useGamesQuery hook
jest.mock("../services/gameService", () => ({
  useGamesQuery: jest.fn(() => ({
    items: [
      { id: 1, provider: "provider", gameText: "Game 1" },
      { id: 2, provider: "provider 2", gameText: "Game 2" },
      // Add more mock data as needed
    ],
    isLoading: false,
    isError: false,
    refetch: jest.fn(),
  })),
}));
const push = jest.fn();
useRouter.mockImplementation(() => ({
  push,
  pathname: "/",
  route: "/",
  asPath: "/",
  query: "",
}));

describe("GameList component", () => {
  test("renders game list correctly", () => {
    render(<GameList />);
    expect(screen.getByText("Games List")).toBeInTheDocument();
  });
});
