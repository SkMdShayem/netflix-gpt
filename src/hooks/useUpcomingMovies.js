import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUpcomingMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const UpcomingMovies = useSelector((store) => store.movies.UpcomingMovies);

  useEffect(() => {
    const getUpcomingMovies = async () => {
      if (UpcomingMovies) return; // If we already have upcoming movies, don't fetch again
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
        );
        const json = await data.json();
        dispatch(setUpcomingMovies(json.results));
        };
        getUpcomingMovies();
    }, [dispatch]);
};

export default useUpcomingMovies;   