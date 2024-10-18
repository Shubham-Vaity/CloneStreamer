
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      
      <Link to="/home">
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-xl">
          Watch Movies
        </button>
      </Link>
      <div className="mt-10 max-w-2xl text-center">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Vivamus at augue eget arcu dictum varius duis at consectetur lorem. Scelerisque fermentum dui faucibus in ornare.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Vivamus at augue eget arcu dictum varius duis at consectetur lorem. Scelerisque fermentum dui faucibus in ornare.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Vivamus at augue eget arcu dictum varius duis at consectetur lorem. Scelerisque fermentum dui faucibus in ornare.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="mb-4">
          Vivamus at augue eget arcu dictum varius duis at consectetur lorem. Scelerisque fermentum dui faucibus in ornare.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Vivamus at augue eget arcu dictum varius duis at consectetur lorem. Scelerisque fermentum dui faucibus in ornare.
        </p>
        <p className="mb-4">
          Turpis egestas sed tempus urna et pharetra pharetra massa. Consequat mauris nunc congue nisi vitae suscipit tellus mauris.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Vivamus at augue eget arcu dictum varius duis at consectetur lorem. Scelerisque fermentum dui faucibus in ornare.
        </p>
       
      </div>
    </div>
  );
};

export default Welcome;
