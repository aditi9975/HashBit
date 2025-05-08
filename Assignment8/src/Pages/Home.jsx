// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import movies from '../movies';
import './Home.css'; // optional for styling

const Home = () => {
  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <div className="movie-card" key={movie.id}>
          <img src={movie.image} alt={movie.title} width="200" />
          <h3>{movie.title}</h3>
          <Link to={`/details/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
