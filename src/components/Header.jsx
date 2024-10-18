import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'; 

const Header = () => {
  const [randomImages, setRandomImages] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchRandomMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
        if (!response.ok) throw new Error('Network response was not ok');
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

  return (
    <header className="relative h-[600px] w-full mx-auto overflow-hidden bg-gray-800"> 
     
      <div className="flex justify-between items-center w-full p-4 bg-black bg-opacity-75">
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
              
              <Link to="/components/Home" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/movies" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Movies
            </Link>
            <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </Link>
            <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            </ul>
          </nav>

          
        </div>
      </div>


     
      <div className="mt-4" />

      
      {randomImages.length > 0 && (
        <img
          key={randomImages[currentImageIndex].id}
          src={`https://image.tmdb.org/t/p/w500${randomImages[currentImageIndex].poster_path}`}
          alt={randomImages[currentImageIndex].title}
          className="w-[calc(100%-40px)] h-full object-cover transition duration-500 grayscale hover:grayscale-0 mx-auto" // Adjusted width to create space on both sides
          style={{ objectPosition: 'center' }} // Center image in the carousel
        />
      )}
      <div className="absolute inset-0 bg-black opacity-50" />
    </header>
  );
};

export default Header;
