import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularPage, setPopularPage] = useState(1);
  const [topRatedPage, setTopRatedPage] = useState(1);
  const [upcomingPage, setUpcomingPage] = useState(1);
  const apiKey = 'c45a857c193f6302f2b5061c3b85e743'; 

  useEffect(() => {
    const fetchMovies = async (page, type, setState) => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=${page}`);
        const data = await response.json();
        setState(data.results);
      } catch (error) {
        console.error(`Error fetching ${type} movies:`, error);
      }
    };

    fetchMovies(popularPage, 'popular', setPopularMovies);
    fetchMovies(topRatedPage, 'top_rated', setTopRatedMovies);
    fetchMovies(upcomingPage, 'upcoming', setUpcomingMovies);
  }, [apiKey, popularPage, topRatedPage, upcomingPage]);

  const handlePageChange = (type, setPage, currentPage) => {
    setPage(currentPage + 1);
  };

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
                <h3 className="text-lg font-semibold">{movie.title}</h3>
              </Link>
            </div>
          ))}
        </div>
        <button 
          onClick={() => handlePageChange('popular', setPopularPage, popularPage)} 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Load More Popular Movies
        </button>
      </div>

      
      <div id="top-rated" className="mb-10">
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
                <h3 className="text-lg font-semibold">{movie.title}</h3>
              </Link>
            </div>
          ))}
        </div>
        <button 
          onClick={() => handlePageChange('top_rated', setTopRatedPage, topRatedPage)} 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Load More Top Rated Movies
        </button>
      </div>

      
      <div id="upcoming" className="mb-10">
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
                <h3 className="text-lg font-semibold">{movie.title}</h3>
              </Link>
            </div>
          ))}
        </div>
        <button 
          onClick={() => handlePageChange('upcoming', setUpcomingPage, upcomingPage)} 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Load More Upcoming Movies
        </button>
      </div>
    </div>
  );
};

export default Home;
