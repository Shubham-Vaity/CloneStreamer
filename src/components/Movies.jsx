import { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    const data = await response.json();
    setMovies(data.results); 
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {movies.map(movie => (
        <div key={movie.id} className="bg-gray-800 p-4 rounded-lg">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h3 className="text-white mt-2">{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Movies;
