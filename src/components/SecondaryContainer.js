import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log("This is secondary " , movies[0].title);

  return (
    <div className="bg-black">
      <div className="md:-mt-56 z-10 relative md:pl-3">
        <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
        <MovieList title={"Top Rated "} movies={movies.addTopRatedMovies} />
        <MovieList title={"Popular"} movies={movies.addPopularMovies} />
        <MovieList title={"Up Coming"} movies={movies.addUpComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
