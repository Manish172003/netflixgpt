import React from "react";
import MovieCard from "./MovieCard";
import { IMG_CDN } from "../utils/constant";

const MovieList = ({ title, movies }) => {
  // console.log(title);

  // console.log("this is movielist", movies);
  return (
    <>
      <h1 className="text-white text-2xl pl-6  md:pl-12 md:p-2">{title}󠀾</h1>
      <div className="overflow-x-scroll scrollbar-thin pl-6 md:pl-10 ">
        <div className="flex">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard key={movie?.id} posterurl={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
