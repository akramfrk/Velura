import { useState, useEffect, useRef } from "react";
import { getImage, searchMovies } from "../services/api";
import { useMovies } from "../context/MoviesContext";

export default function Navbar() {
  const { openMovieDetails } = useMovies();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleSearch = async () => {
      if (searchQuery.trim().length > 2) {
        setIsSearching(true);
        try {
          const result = await searchMovies(searchQuery);
          setSearchResult(result ? result.slice(0, 5) : []);
        } catch (error) {
          console.error("Error fetching search results:", error);
        } finally {
          setIsSearching(false);
          setShowSearchResults(true);
        }
      } else {
        setSearchResult([]);
        setShowSearchResults(false);
      }
    };
    const debounceTimer = setTimeout(() => {
      handleSearch();
    }, 500);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleSearchFocus = () => {
    if (searchQuery.trim().length > 2 && searchResult.length > 0) {
      setShowSearchResults(true);
    }
  };

  const handleClickOutside = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setShowSearchResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMovieSelect = (movieId) => {
    openMovieDetails(movieId);
    setShowSearchResults(false);
    setSearchQuery("");
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 w-4/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              {/* Logo */}
              <svg
                className="h-8 w-8 mr-2 text-purple-500"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="500.000000pt"
                height="500.000000pt"
                viewBox="0 0 500.000000 500.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path
                    d="M970 3762 c46 -32 89 -73 109 -106 12 -18 61 -131 110 -252 232 -571
463 -1135 645 -1579 48 -115 101 -246 118 -290 85 -213 296 -289 474 -171 63
42 91 83 155 229 39 88 56 115 96 150 26 23 70 62 98 87 27 25 84 75 125 110
82 71 115 100 206 181 33 30 76 68 95 84 103 91 299 262 329 289 20 17 53 47
76 66 22 19 71 63 109 96 39 34 111 97 160 140 138 121 156 149 157 240 0 72
-26 132 -81 182 -20 18 -105 86 -190 150 -85 64 -178 135 -206 157 -252 192
-326 244 -359 251 -65 12 -134 -27 -165 -93 -19 -39 -13 -26 -176 -423 -80
-195 -149 -364 -154 -375 -27 -61 -43 -98 -74 -175 -85 -208 -170 -406 -179
-417 -19 -24 -48 -14 -62 20 -31 72 -48 112 -139 337 -53 129 -109 269 -127
310 -17 41 -54 131 -81 200 -28 69 -57 140 -65 158 -8 17 -20 47 -28 65 -8 17
-38 91 -66 162 -97 245 -73 235 -560 234 -356 0 -374 -1 -350 -17z m661 -199
c8 -10 30 -56 49 -102 32 -81 33 -84 15 -97 -23 -17 -222 -19 -258 -3 -18 8
-34 36 -62 104 -20 51 -34 98 -31 104 5 7 55 11 140 11 114 0 135 -2 147 -17z
m1766 -345 c204 -155 213 -162 213 -176 0 -5 -44 -45 -97 -88 -54 -44 -109
-89 -123 -101 -91 -78 -466 -380 -468 -378 -2 2 10 45 26 97 17 51 65 212 107
358 42 146 80 276 84 290 8 22 13 41 37 128 3 14 11 21 19 18 8 -3 98 -69 202
-148z m-1585 -95 c10 -9 18 -20 18 -25 0 -4 8 -27 19 -51 34 -76 43 -106 36
-116 -7 -13 -263 -15 -282 -3 -13 8 -71 140 -73 169 -5 43 -5 43 132 43 108 0
135 -3 150 -17z m182 -445 c8 -13 29 -58 46 -102 42 -106 41 -106 -121 -106
-149 0 -137 -8 -189 124 -42 106 -41 106 121 106 122 0 129 -1 143 -22z"
                  />
                </g>
              </svg>
              <span className="text-purple-500 font-bold text-3xl">
                Vel<span className="text-white">ura</span>
              </span>
            </a>
          </div>
          {/* Desktop Navbar */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Home
            </a>
            <a
              href="#trending"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Trending
            </a>
            <a
              href="#popular"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Popular
            </a>
            <a
              href="#top-rated"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Top Rated
            </a>
          </nav>
          {/* Desktop Search */}
          <div
            className="hidden md:block relative search-container"
            ref={searchContainerRef}
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchFocus}
                placeholder="Search Movies ..."
                className="bg-neutral-800/80 text-white px-4 py-2 pr-10 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />

              {/* Conditional Rendring */}
              {isSearching ? (
                <div className="absolute right-3 top-2.5">
                  <svg
                    className="w-4 h-4 text-neutral-400 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 absolute right-3 top-3 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              )}
            </div>

            {/* DropDown Search Result Conditional Rendring */}
            {showSearchResults && searchResult && searchResult.length > 0 && (
              <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg overflow-hidden z-50">
                <ul className="divide-y divide-neutral-700">
                  {searchResult.map((movie) => (
                    <li className="hover:bg-neutral-700" key={movie.id}>
                      <button
                        className="flex items-center p-3 w-full text-left"
                        onClick={() => handleMovieSelect(movie.id)}
                      >
                        <div className="w-10 h-14 bg-neutral-700 rounded overflow-hidden flex-shrink-0">
                          {movie.poster_path ? (
                            <img
                              src={getImage(movie.poster_path, "w92")}
                              alt={movie.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs">
                              No Image
                            </div>
                          )}
                        </div>
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-medium text-white truncate">
                            {movie.title}
                          </p>
                          <p className="text-xs text-neutral-400">
                            {movie.release_date?.split("-")[0] || "N/A"}
                          </p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Conditional Rendring */}
            {showSearchResults &&
              searchQuery.trim().length > 2 &&
              (!searchResult || searchResult.length === 0) &&
              !isSearching && (
                <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                  <div className="p-4 text-center text-neutral-400 text-sm">
                    No Movies found matching...
                  </div>
                </div>
              )}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-1 rounded-lg hover:bg-neutral-800/50 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
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
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Conditional Rendring - Enhanced UI */}
        {isMobileMenuOpen && (
          <div className="mt-4 pb-4 md:hidden bg-neutral-900/95 backdrop-blur-lg rounded-xl border border-neutral-800 shadow-xl overflow-hidden transition-all duration-300 ease-out">
            <div className="space-y-1 py-2">
              <a
                href="#"
                className="block text-white hover:bg-purple-900/30 hover:text-purple-300 transition-all duration-200 py-3 px-4 rounded-lg mx-2"
              >
                <span className="flex items-center">Home</span>
              </a>
              <a
                href="#trending"
                className="block text-white hover:bg-purple-900/30 hover:text-purple-300 transition-all duration-200 py-3 px-4 rounded-lg mx-2"
              >
                <span className="flex items-center">Trending</span>
              </a>
              <a
                href="#popular"
                className="block text-white hover:bg-purple-900/30 hover:text-purple-300 transition-all duration-200 py-3 px-4 rounded-lg mx-2"
              >
                <span className="flex items-center">Popular</span>
              </a>
              <a
                href="#top-rated"
                className="block text-white hover:bg-purple-900/30 hover:text-purple-300 transition-all duration-200 py-3 px-4 rounded-lg mx-2"
              >
                <span className="flex items-center">Top Rated</span>
              </a>
            </div>

            <div className="px-4 py-3 border-t border-neutral-800 mt-2">
              {/* Mobile Search */}
              <div
                className="relative mt-3 search-container"
                ref={searchContainerRef}
              >
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={handleSearchFocus}
                    placeholder="Search Movies ..."
                    className="bg-neutral-800/80 text-white px-4 py-3 pr-10 rounded-full text-sm w-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                  {/* Conditional Rendring */}
                  {isSearching ? (
                    <div className="absolute right-3 top-3">
                      <svg
                        className="w-4 h-4 text-neutral-400 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </div>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 absolute right-3 top-3.5 text-neutral-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  )}
                </div>

                {/* Mobile Search result Conditional rendring */}
                {showSearchResults &&
                  searchResult &&
                  searchResult.length > 0 && (
                    <div className="mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                      <ul className="divide-y divide-neutral-700">
                        {searchResult.map((movie) => (
                          <li className="hover:bg-neutral-700" key={movie.id}>
                            <button
                              className="flex items-center p-3 w-full text-left"
                              onClick={() => handleMovieSelect(movie.id)}
                            >
                              <div className="w-10 h-14 bg-neutral-700 rounded overflow-hidden flex-shrink-0">
                                {movie.poster_path ? (
                                  <img
                                    src={getImage(movie.poster_path, "w92")}
                                    alt={movie.title}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs">
                                    No Image
                                  </div>
                                )}
                              </div>
                              <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-white truncate">
                                  {movie.title}
                                </p>
                                <p className="text-xs text-neutral-400">
                                  {movie.release_date?.split("-")[0] || "N/A"}
                                </p>
                              </div>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                {/* Conditional Rendring */}
                {showSearchResults &&
                  searchQuery.trim().length > 2 &&
                  (!searchResult || searchResult.length === 0) &&
                  !isSearching && (
                    <div className="mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                      <div className="p-4 text-center text-neutral-400 text-sm">
                        No Movies found matching...
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
