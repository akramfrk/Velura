import { createContext, useContext, useState, useEffect } from "react";
import {
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchGenres,
} from "../services/api";

const MoviesContext = createContext();
export const useMovies = () => useContext(MoviesContext);

export const MoviesProvider = ({ children }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(true);
        const [trending, popular, topRated, genreList] = await Promise.all([
          fetchTrendingMovies(),
          fetchPopularMovies(),
          fetchTopRatedMovies(),
          fetchGenres(),
        ]);
        setTrendingMovies(trending);
        setPopularMovies(popular);
        setTopRatedMovies(topRated);
        setGenres(genreList);
      } catch (err) {
        setError("Failed to fetch movie data. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieData();
  }, []);

  const openMovieDetails = (moviesId) => {
    setSelectedMovie(moviesId);
    document.body.style.overflow = "hidden";
  };

  const closeMovieDetails = () => {
    setSelectedMovie(null);
    document.body.style.overflow = "auto";
  };
  return (
    <MoviesContext.Provider
      value={{
        trendingMovies,
        popularMovies,
        topRatedMovies,
        genres,
        loading,
        error,
        selectedMovie,
        openMovieDetails,
        closeMovieDetails,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};