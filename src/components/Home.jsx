import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const apiKey = 'c45a857c193f6302f2b5061c3b85e743'; 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
        const popularData = await popularResponse.json();
        setPopularMovies(popularData.results);

        const topRatedResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
        const topRatedData = await topRatedResponse.json();
        setTopRatedMovies(topRatedData.results);

        const upcomingResponse = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`);
        const upcomingData = await upcomingResponse.json();
        setUpcomingMovies(upcomingData.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  return (
    <div className="p-4 mx-4">
      
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-white mb-4">Popular Movies</h2>
        <div className="flex flex-wrap justify-start gap-2">
          {popularMovies.map(movie => (
            <div key={movie.id} className="border p-2 w-full sm:w-1/4 md:w-1/5 lg:w-1/6 bg-gray-800 text-white flex-shrink-0">
              <Link to={`/movie/${movie.id}`}>
                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold">{movie.title}</h3> {/* Increased font size */}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-white mb-4">Top Rated Movies</h2>
        <div className="flex flex-wrap justify-start gap-2">
          {topRatedMovies.map(movie => (
            <div key={movie.id} className="border p-2 w-full sm:w-1/4 md:w-1/5 lg:w-1/6 bg-gray-800 text-white flex-shrink-0">
              <Link to={`/movie/${movie.id}`}>
                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold">{movie.title}</h3> {/* Increased font size */}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-white mb-4">Upcoming Movies</h2>
        <div className="flex flex-wrap justify-start gap-2">
          {upcomingMovies.map(movie => (
            <div key={movie.id} className="border p-2 w-full sm:w-1/4 md:w-1/5 lg:w-1/6 bg-gray-800 text-white flex-shrink-0">
              <Link to={`/movie/${movie.id}`}>
                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold">{movie.title}</h3> {/* Increased font size */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
