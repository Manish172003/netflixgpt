import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from "../components/VideoTitle"
import VideoBackground from "../components/VideoBackground";
const MainContainer = () => {

  const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
  if(!movies) {return ;}

  const mainmovie =  movies[0];
//   console.log(mainmovie)
  const {original_title,overview,id} = mainmovie;
 
  return (
    <>
      <VideoTitle title = {original_title} overview = {overview} />
      <VideoBackground movieid ={id}/>
    </>
  );
}

export default MainContainer