import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    addNowPlayingMovies: null,
    addtrailervideo: null,
    addPopularMovies: null,
    addTopRatedMovies: null,
    addUpComingMovies: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },

    addtrailervideo: (state, action) => {
      state.addtrailervideo = action.payload;
    },

    addUpComingMovies: (state, action) => {
      state.addUpComingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.addPopularMovies = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      state.addTopRatedMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies,addtrailervideo,addPopularMovies,addTopRatedMovies,addUpComingMovies }= movieSlice.actions;
export default movieSlice.reducer;
