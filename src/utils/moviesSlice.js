import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovies: [],
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
    setTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { setNowPlayingMovies, setTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;