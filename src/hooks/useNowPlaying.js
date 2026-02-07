import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";

const useNowPlaying = () => {
  const dispatch = useDispatch();
const  NowPlayingMovies = useSelector((store) => store.movies.NowPlayingMovies);
  const getNowPlayingMovies = async () => {
    const options = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS,
    );
    const jsonData = await options.json();
    dispatch(setNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    if (!NowPlayingMovies) {
      getNowPlayingMovies();
    } 
  }, []);
};

export default useNowPlaying;
