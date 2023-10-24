import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "../components/VideoTitle";
import VideoBackground from "../components/VideoBackground";
import VideoTitleAdvanced from "./VideoTitleAdvanced";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.addPopularMovies);
  if (!movies) {
    return;
  }

  const mainmovie = movies[1];
  //   console.log(mainmovie)
  const { original_title, overview, id } = mainmovie;

  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieid={id} />
    </>
  );
};

export default MainContainer;
