import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <div className="flex overflow-x-auto space-x-4 p-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
    </div>
  )
}

export default MovieList;