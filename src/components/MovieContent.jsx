import { useMovies } from "../context/MoviesContext";
import GenreSection from "./GenreSection";
import HeroSection from "./HeroSection";
import MovieDetails from "./MovieDetails";
import MovieSlider from "./MovieSlide";

export default function MovieContent() {
  const {
    trendingMovies,
    popularMovies,
    topRatedMovies,
    selectedMovie,
    closeMovieDetails,
    error,
  } = useMovies();

  if (error) {
    return (
      <div className="w-full h-40 flex flex-col items-center justify-center bg-neutral-900 rounded-lg gap-3">
        <p className="text-red-500 font-semibold">
          ⚠️ Failed to load movies. Please try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-all"
        >
          Reload Page
        </button>
      </div>
    );
  }
  return (
    <>
      <HeroSection />
      <div className="bg-gradient-to-b from-neutral-900 to-neutral-950">
        <MovieSlider
          title="Trending This Week"
          subtitle="Stay updated with what everyone's watching"
          movies={trendingMovies}
          id="trending"
        />
        <MovieSlider
          title="Popular Movies"
          subtitle="Most Watched Movies Right Now"
          movies={popularMovies}
          id="popular"
        />
        <GenreSection />
        <MovieSlider
          title="Top Rated Movies"
          subtitle="Highest Rated Movies of All Time"
          movies={topRatedMovies}
          id="top-rated"
        />
      </div>
      {/* Conditional Rendring */}
      {selectedMovie && (
        <MovieDetails moviesId={selectedMovie} onClose={closeMovieDetails} />
      )}
    </>
  );
}
