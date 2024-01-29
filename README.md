# Game Lobby App

## Overview

The Game Lobby App is a web application built with ReactJS and Next.js. It provides a user-friendly interface for browsing and searching games. Users can navigate through different game categories, view a list of games, and search for specific games.

## Features

- **Game Menu Lobby Categories Navigation**: Navigate through different game categories to find your favorite games easily.
- **Games List**: View a list of games in each category, with details such as game title, cover image, and description.
- **Games Search**: Search for specific games using keywords.
- **Pagination**: Navigate through pages of game lists efficiently with pagination controls.
- **Responsive Design**: The app is designed to be responsive and works well on various devices, including desktops and tablets.

## Technologies Used

- **ReactJS**: Frontend library for building user interfaces.
- **Next.js**: React framework for server-side rendering and routing.
- **TypeScript**: Typed superset of JavaScript for improved code quality and maintainability.
- **Redux Toolkit**: State management library for managing application state.
- **React Query**: Library for fetching, caching, and updating data in React applications. When you navigate between list game pages. If that page was called, react-query will return immidiately the list from cache
- **Tailwind CSS**: Utility-first CSS framework for styling the UI.
- **DaisyUI**: Component library for Tailwind CSS to add additional UI components and styles. This library is new to me and I decided to use this 1st time for this project.
- **Jest**: Testing framework for writing unit and integration tests.
- **React Testing Library**: Testing utilities for testing React components.

## Getting Started

1. **Clone the Repository**
2. **Install Dependencies:** npm install
3. **Run the Development Server:** npm run dev -> The app will be running at http://localhost:3000.

## Usage
- Browse through different game categories using the navigation menu.
- View a list of games in each category.
- Use the search bar to find specific games by title or keyword.
- Navigate through pages of game lists using pagination controls.

## Testing
Run the following command to execute tests: npm test

## Uncovered/ Need to improve
I'm trying to set my self in the timebox of 8 hours (actually around 7 hours for coding/debuging/researching... and the remaining time to write this docs), I tried to bring as many as I can from the requirement. However, I still miss these things:
- SSR: I planned to add this along with next/image since this is not too hard but I faced some trouble when trying to config the unit testing. Then I realised there was no time, so I skiped this.
- Mobile Responsive: The pages look fine on desktop and tablet but a bit off on mobile, I think that's fine since I tried to focus on functionalities
- More test cases: Yeah, I can write some more unit testing. To be honest, this is the first time I setup unit testing for Nextjs and got some issues on doing mock data for next/router (Good learn >_< )

## Thanks for having me in the technical test. Hope this find you well and we have a chance to go forward and talk more about these cool things. Enjoy the day!