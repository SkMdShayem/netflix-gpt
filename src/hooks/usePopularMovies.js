import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPopularMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const PopularMovies = useSelector((store) => store.movies.PopularMovies);

  useEffect(() => {
    if (PopularMovies) return; // If we already have popular movies, don't fetch again
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(setPopularMovies(json.results));
    };
    getPopularMovies();
  }, [dispatch]);
};

export default usePopularMovies;