import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showgptsearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      //   state.showgptsearch = !showgptsearch;
      state.showgptsearch = !state.showgptsearch;
    },
  },
});

export const { toggleGptSearchView } = GptSlice.actions;
export default GptSlice.reducer;

