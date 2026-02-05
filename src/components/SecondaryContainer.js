import React from 'react';
import MovieList from './MovieList';
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="m-auto p-10 bg-black">
      <MovieList title="Now Playing Movies" movies={movies?.NowPlayingMovies || []} />
      <MovieList title="Popular Movies" movies={movies?.PopularMovies || []} />
      <MovieList title="Top Rated Movies" movies={movies?.TopRatedMovies || []} />
      <MovieList title="Upcoming Movies" movies={movies?.UpcomingMovies || []} />
    </div>
  );
};

export default SecondaryContainer;