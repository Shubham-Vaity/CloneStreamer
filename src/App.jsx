import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import MovieDetail from './components/MovieDetail.jsx';
import Footer from './components/footer.jsx'; 
import Header from './components/Header.jsx';
import Welcome from './components/Welcome.jsx';
import Movies from './components/Movies.jsx';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Header />
        <Routes>
        <Route path="/" element={<Welcome />} /> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/Movies" element={<Movies />} /> 
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
