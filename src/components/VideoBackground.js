import React from "react";
import {useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieid }) => {

  useMovieTrailer(movieid);
  //   const [id,setId] = useState(0);
  const movie = useSelector((store) => store.movies?.addtrailervideo);

  return (
    <div >
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${movie?.key + "?&autoplay=1&mute=1"}`} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
