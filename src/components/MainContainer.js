import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);
  if (!Array.isArray(movies) || movies.length === 0) return null;

  const mainMovie = movies[0] || null;
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] md:pt-0 md:relative">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id}/>
    </div>
  );
};

export default MainContainer;
