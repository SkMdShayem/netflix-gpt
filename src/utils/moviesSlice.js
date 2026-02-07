import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trailer: null,
    NowPlayingMovies: [],
    PopularMovies: [],
    TopRatedMovies: [],
    UpcomingMovies: [],
  },
  reducers: {
    setTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    setNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },    
    setTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },  
  },
});

export const { setTrailer, setNowPlayingMovies,  setPopularMovies, setTopRatedMovies, setUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;