import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";   

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const options = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS,
    );
    const jsonData = await options.json();
    dispatch(setNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlaying;
