import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showgpt: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGpt: (state) => {
      state.showgpt = !state.showgpt;
    },
    addMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;  
    },
  },
});

export const { toggleGpt, addMovieResults } = gptSlice.actions;
export default gptSlice.reducer;    
