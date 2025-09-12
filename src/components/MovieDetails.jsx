import { useEffect, useState } from "react";
import { getImage, fetchMovieDetails } from "../services/api";

export default function MovieDetails({ moviesId, onClose }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const movieData = await fetchMovieDetails(moviesId);
        setMovie(movieData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      } finally {
        setLoading(false);
      }
    }
    if (moviesId) {
      getMovieDetails();
    }
  }, [moviesId]);

  if (!moviesId) return null;

  const formatRunTime = (minutes) => {
    if (!minutes) return "N/A";
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs}h ${mins}m`;
  };

  const formatRating = (rating) => {
    return (Math.round(rating * 10) / 10).toFixed(1);
  };

  const formatRevenue = (revenue) => {
    if (!revenue) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(revenue);
  };
  console.log(movie);
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/95 backdrop-blur-sm overflow-auto">
      <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700/80 text-white hover:bg-neutral-600/80 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* State Container - Only one should be visible at a time */}
        <div>
          {/* Loading State - Comment out when not needed */}
          {loading ? (
            <div className="flex items-center justify-center h-96">
              <div className="animate-pulse text-center">
                <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="mt-4 text-white">Loading Details...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l6.518 11.59c.75 1.334-.213 3.01-1.742 3.01H3.48c-1.53 0-2.492-1.676-1.742-3.01l6.519-11.59zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-2a.75.75 0 01-.75-.75V7a.75.75 0 011.5 0v3.25A.75.75 0 0110 11z"
                    clipRule="evenodd"
                  />
                </svg>
                <h2 className="text-xl font-bold mt-4 text-white">
                  Failed to Load Movie Details!
                </h2>
                <p className="mt-2 text-neutral-400">Error!</p>
                <button
                  onClick={onClose}
                  className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          ) : movie ? (
            <div>
              {/* Backdrop */}
              <div className="relative h-72 md:h-96 w-full">
                {movie.backdrop_path ? (
                  <img
                    src={getImage(movie.backdrop_path)}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-700"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="md:flex gap-8 -mt-32 md:-mt-48 relative">
                  {/* Poster */}
                  <div className="w-32 md:w-64 flex-shrink-0 mb-4 md:mb-0">
                    <div className="rounded-lg overflow-hidden shadow-lg border border-neutral-400">
                      {movie.poster_path ? (
                        <img
                          src={getImage(movie.poster_path, "w500")}
                          alt={movie.title}
                          className="w-full aspect-[2/3] object-cover"
                        />
                      ) : (
                        <div className="w-full aspect-[2/3] bg-neutral-700 flex items-center justify-center text-white">
                          No Poster Available
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Movie Info */}
                  <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                      {movie.title}
                      <span className="font-normal text-neutral-400 ml-2">
                        ({movie.release_date?.substring(0, 4) || "N/A"})
                      </span>
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mt-3 text-sm items-center">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 font-medium">
                          {formatRating(movie.vote_average)}
                        </span>
                      </div>
                      {movie.runtime && (
                        <span className="text-neutral-300">
                          {formatRunTime(movie.runtime)}
                        </span>
                      )}
                      {movie.release_date && (
                        <span className="text-neutral-300">
                          {movie.release_date}
                        </span>
                      )}
                      {movie.adult && (
                        <span className="bg-red-500/80 text-white text-sm py-0.5 px-2 rounded">
                          18+
                        </span>
                      )}
                    </div>

                    {/* Genres */}
                    {movie.genres && movie.genres.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {movie.genres.map((genre) => (
                          <span className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs">
                            {genre.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tagline */}
                    <p className="mt-4 text-neutral-400 italic">
                      {movie.tagline || "No tagline available."}
                    </p>

                    {/* Overview */}
                    <div className="mt-6">
                      <h2 className="text-xl font-semibold mb-2 text-white">
                        Overview
                      </h2>
                      <p className="text-neutral-300">
                        {movie.overview || "No overview available."}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Watch Now
                      </button>

                      <button className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        Add to Watch List
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-white">
                      Details
                    </h2>
                    <div className="space-y-4">
                      {movie.production_companies &&
                        movie.production_companies.length > 0 && (
                          <div>
                            <h3 className="text-neutral-400 text-sm mb-1">
                              Production Companies
                            </h3>
                            <p className="text-white">
                              {movie.production_companies
                                .map((company) => company.name)
                                .join(", ")}
                            </p>
                          </div>
                        )}
                      {movie.production_countries &&
                        movie.production_countries.length > 0 && (
                          <div>
                            <h3 className="text-neutral-400 text-sm mb-1">
                              Production Countries
                            </h3>
                            <p className="text-white">
                              {movie.production_countries
                                .map((country) => country.name)
                                .join(", ")}
                            </p>
                          </div>
                        )}
                      {movie.spoken_languages &&
                        movie.spoken_languages.length > 0 && (
                          <div>
                            <h3 className="text-neutral-400 text-sm mb-1">
                              Languages
                            </h3>
                            <p className="text-white">
                              {movie.spoken_languages
                                .map((language) => language.english_name)
                                .join(", ")}
                            </p>
                          </div>
                        )}
                      {movie.budget && (
                        <div>
                          <h3 className="text-neutral-400 text-sm mb-1">
                            Budget
                          </h3>
                          <p className="text-white">{formatRevenue(movie.budget)}</p>
                        </div>
                      )}
                      {movie.revenue && (
                        <div>
                          <h3 className="text-neutral-400 text-sm mb-1">
                            Revenue
                          </h3>
                          <p className="text-white">{formatRevenue(movie.revenue)}</p>
                        </div>
                      )}
                      {movie.status && (
                        <div>
                          <h3 className="text-neutral-400 text-sm mb-1">
                            Status
                          </h3>
                          <p className="text-white">Released</p>
                        </div>
                      )}
                      {movie.original_language && (
                        <div>
                          <h3 className="text-neutral-400 text-sm mb-1">
                            Original Language
                          </h3>
                          <p className="text-white">
                            {movie.original_language.toUpperCase()}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                      Rating
                    </h2>
                    {movie.vote_average ? (
                      <div className="flex items-center">
                        <div className="w-24 h-24 rounded-full border-4 border-purple-500 flex items-center justify-center mr-4">
                          <span className="text-2xl font-bold">{formatRating(movie.vote_average)}</span>
                        </div>
                        <div>
                          <p className="text-neutral-300">From {movie.vote_count.toLocaleString()} votes</p>
                          <div className="w-full bg-neutral-700 rounded-full h-2.5 mt-2">
                            <div
                              className="bg-purple-600 h-2.5 rounded-full"
                              style={{ width: `${(movie.vote_average / 10) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-neutral-400">No ratings available.</p>
                    )}
                  </div>

                  {/* IMDB and Homepage Link */}
                  <div className="mt-8 space-y-4 md:col-span-2">
                    <a
                      href={movie.homepage}
                      className="inline-flex items-center bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded transition-all mr-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                      Official Website
                    </a>

                    <a
                      href={`https://www.imdb.com/title/${movie.imdb_id}`}
                      target="_blank"
                      className="inline-flex items-center bg-[#f4c418] hover:border-amber-600 text-white px-4 py-2 rounded transition-colors ml-2 bg-[url('https://m.media-amazon.com/images/G/01/imdb/images-ANDW73HA/favicon_desktop_32x32._CB1582158068_.png')] bg-no-repeat bg-left pl-8"
                    >
                      View on IMDB
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
