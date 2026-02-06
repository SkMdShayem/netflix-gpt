import React, { use } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const language = useSelector((store) => store.config.language);
  return (
    <div className="w-full flex justify-center items-center mt-8 pt-[5%]">
        <form className="w-1/2 flex">
            <input 
                type="text" 
                placeholder={lang[language].gptSearchPlaceholder}
                className="w-full p-2 border border-gray-300 rounded"
            />
        </form>
        <button className="ml-4 p-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
            {lang[language].searchPlaceholder}
        </button>
    </div>
  )
}

export default GptSearchBar