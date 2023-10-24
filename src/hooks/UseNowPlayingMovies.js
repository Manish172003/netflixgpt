import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const UseNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowplayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?region=IN&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowplayingMovies();
  }, []);
};

export default UseNowPlayingMovies;
