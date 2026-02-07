import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTopRatedMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const TopRatedMovies = useSelector((store) => store.movies.TopRatedMovies);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS,
      );
      const json = await data.json();
      dispatch(setTopRatedMovies(json.results));
    };
    if (!TopRatedMovies) {
      getTopRatedMovies();
    }
  }, [dispatch]);
};

export default useTopRatedMovies;
