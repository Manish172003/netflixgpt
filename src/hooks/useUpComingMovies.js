import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addUpComingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?region=IN&page=1",
      API_OPTIONS
    );

    // "https://api.themoviedb.org/3/movie/popular?with_original_language=hi&region=IN&page=1";

    const json = await data.json();
    // console.log(json);
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
