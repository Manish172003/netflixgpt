import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    addNowPlayingMovies: null,
    addtrailervideo :null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },

    addtrailervideo :(state,action) =>{
      state.addtrailervideo = action.payload;
    }
  },
});

export const { addNowPlayingMovies,addtrailervideo } = movieSlice.actions;
export default movieSlice.reducer;
