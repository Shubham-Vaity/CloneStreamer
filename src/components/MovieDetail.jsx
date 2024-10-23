import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const apiKey = "c45a857c193f6302f2b5061c3b85e743";

 
  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetail();
  }, [id, apiKey]);

 
  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchMovieCast();
  }, [id, apiKey]);

  return (
    <div className="movie-detail">
     
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start mb-6">
        
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg mb-4 md:mr-8 w-1/3"
            />
          )}
          
          <div className="flex flex-col justify-start md:mt-0 mt-4"> 
            <h1 className="text-4xl font-bold text-white mb-2">{movie.title}</h1>
            <p className="text-lg text-gray-300 font-bold mt-2">{movie.overview}</p>
          </div>
        </div>
      </div>

    
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-white mb-4">Cast</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {cast.map(actor => (
            <div key={actor.cast_id} className="bg-gray-800 p-4 rounded-lg text-center shadow-lg">
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                  className="rounded-lg mb-2 w-2/3 mx-auto" // Reduced image size to 2/3 of its original
                />
              ) : (
                <div className="h-20 bg-gray-700 rounded-lg mb-2"></div>
              )}
              <h3 className="text-lg font-medium text-white">{actor.name}</h3>
              <p className="text-sm text-gray-400">as {actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
