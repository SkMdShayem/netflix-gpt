import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async (id) => {
    // Logic to fetch and display video based on movieId
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS,
    );
    const data = await response.json();
    // Further implementation to display video
    const trailer = data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube",
    );
    dispatch(setTrailer(trailer ? trailer.key : null));
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideo(movieId);
    }
  }, [movieId]);
};

export default useMovieTrailer;
