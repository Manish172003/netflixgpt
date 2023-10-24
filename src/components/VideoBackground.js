import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieid }) => {
  useMovieTrailer(movieid);
  const movie = useSelector((store) => store.movies?.addtrailervideo);

  return (
    <div className="w-full aspect-video overflow-x-hidden">
      {" "}
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movie?.key +
          "?&autoplay=1&mute=1&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
