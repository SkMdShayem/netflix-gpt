import GptSearchBar from "./GptSearchBar"
import GptMpvieSuggestions from "./GptMpvieSuggestions"
import { BACKGROUND_IMAGE } from "../utils/constants"

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
        <GptSearchBar />
        <GptMpvieSuggestions />
    </div>
  )
}

export default GptSearch