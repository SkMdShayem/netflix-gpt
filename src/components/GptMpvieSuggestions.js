import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMpvieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) {
    return null; // or a loading indicator
  }
  return (
    <div>
      <div className="m-auto p-10 bg-black bg-opacity-50 rounded-lg mt-10">
        {movieNames.map((name, index) => (
          <MovieList key={index} title={name} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMpvieSuggestions;
