import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addtrailervideo } from '../utils/movieSlice';

const useMovieTrailer = (movieid) => {

    const dispatch = useDispatch();

     const getMovieVideos = async () => {
       const data = await fetch(
         `https://api.themoviedb.org/3/movie/${movieid}/videos?`,
         API_OPTIONS
       );
       const json = await data.json();
       console.log(json);

       const filtered_data = json.results.filter(
         (video) => video?.type === "Trailer"
       );
       const trailer = filtered_data[0];
       dispatch(addtrailervideo(trailer));
     };

     useEffect(() => {
       getMovieVideos();
     }, []);
}

export default useMovieTrailer