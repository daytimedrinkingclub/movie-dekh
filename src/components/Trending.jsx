import React, { useState, useEffect } from 'react';

function Trending() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/trendingmovies');
      if (!response.ok) {
        throw new Error('Failed to fetch trending movies');
      }
      const data = await response.json();
      setTrendingMovies(data.movies);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className='text-white text-center text-4xl font-bold'>Trending Movies</h2>
      <ul>
        {trendingMovies.map((movie) => (
          console.log(movie)
        ))}
      </ul>
    </div>
  );
}

export default Trending;