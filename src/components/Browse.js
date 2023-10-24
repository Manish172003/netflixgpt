import React, { useEffect } from "react";
import Header from "./Header";
import UseNowPlayingMovies from "../hooks/UseNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import ChatGptSearchPage from "./ChatGptSearchPage";
import { useSelector } from "react-redux";
import VideoTitleAdvanced from "./VideoTitleAdvanced";

const Browse = () => {
  const gptview = useSelector((Store) => Store.gpt.showgptsearch);
  console.log(gptview);

  UseNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
      <VideoTitleAdvanced />
      {gptview ? (
        <ChatGptSearchPage />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />{" "}
        </>
      )}
    </div>
  );
};

export default Browse;
