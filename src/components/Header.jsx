import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [randomImages, setRandomImages] = useState([]);
  const apiKey = 'c45a857c193f6302f2b5061c3b85e743'; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchRandomMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
        if (!response.ok) {
          const errorText = await response.text(); 
          throw new Error(`Network response was not ok: ${response.status} ${response.statusText}. Response: ${errorText}`);
        }
        const data = await response.json();
        const shuffledMovies = data.results.sort(() => 0.5 - Math.random()).slice(0, 3);
        setRandomImages(shuffledMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchRandomMovies();
  }, [apiKey]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % randomImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [randomImages]);

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/home') {
      navigate('/home', { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full mx-auto bg-gray-800">
      <div className="flex justify-between items-center w-full p-4 bg-black bg-opacity-75 z-10">
        <div className="flex items-center">
          <img src="https://play-lh.googleusercontent.com/YzCzgysrtn5_-shQVFB7zj8JRP6SSn2fKtfoGvHWrPAeQu4fsuMj44HZtaTtjiQes1g" alt="Logo" className="h-10" />
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search movies..."
            className="p-2 rounded-md"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Search</button>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/home" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/home" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Movies
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('top-rated')}
                  className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-white"
                >
                  Top Rated Movies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('upcoming')}
                  className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-white"
                >
                  Upcoming Movies
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="mt-4 relative">
        {randomImages.length > 0 && (
          <img
            key={randomImages[currentImageIndex].id}
            src={`https://image.tmdb.org/t/p/w500${randomImages[currentImageIndex].poster_path}`}
            alt={randomImages[currentImageIndex].title}
            className="w-full h-96 object-cover transition duration-500 grayscale hover:grayscale-0 mx-auto"
            style={{ objectPosition: 'center' }}
          />
        )}
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
    </header>
  );
};

export default Header;
