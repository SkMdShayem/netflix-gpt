import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="w-full h-screen object-cover "
          src={BACKGROUND_IMAGE}
          alt="Netflix Background"
        />
      </div>
      <div className="pt-[40%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
