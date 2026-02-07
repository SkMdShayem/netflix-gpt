import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.language);

  const searchMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const response = await data.json();
    return response.results;
  };

  const handleGPTSearchClick = async () => {
    try {
      const GPTQuery =
        "Search for movies related to: " +
        searchText.current.value +
        ". Give me a list of 5 movies with comma separated.";
      const response = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: GPTQuery }],
      });

      if (!response || !response.choices?.[0]?.message?.content) {
        console.error("No response or content from OpenAI API");
        return;
      }
      const content = response.choices[0].message.content;
      console.log(content);
      const movies = content.split(",").map((movie) => movie.trim());
      console.log(movies);
    } catch (error) {
      const movies = [
        "The Matrix",
        "Inception",
        "Interstellar",
        "The Dark Knight",
        "Pulp Fiction",
      ];
      const searchResults = movies.map((movie) => searchMovies(movie));
      const allResults = await Promise.all(searchResults);
      console.log(allResults);
      dispatch(addMovieResults({ movieNames: movies, movieResults: allResults }));
    }
  };

  return (
    <div className="w-full flex justify-center items-center mt-8 pt-[5%]">
      <form className="w-1/2 flex" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </form>
      <button
        className="ml-4 p-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        onClick={handleGPTSearchClick}
      >
        {lang[language].searchPlaceholder}
      </button>
    </div>
  );
};

export default GptSearchBar;
