import React from 'react'
import { IMG_BASE_URL } from '../utils/constants';

const MovieCard = ({ movie }) => {
    if (!movie || !movie.poster_path) {
        return null; // or a placeholder image
    }
    return (
        <div className="w-48 flex-shrink-0">
            <img src={IMG_BASE_URL + movie.poster_path} alt="Movie Poster" className="w-full h-auto rounded-lg" />
            <h3 className="text-sm font-semibold mt-2 text-white">{movie.title}</h3>
        </div>
    )           
}

export default MovieCard;