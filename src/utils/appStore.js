import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import MoviesReducer from "./movieSlice";
import GptReducer from "./GptSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: MoviesReducer,
    gpt: GptReducer,
  },
});

export default appStore;
