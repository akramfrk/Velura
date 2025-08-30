export default function MovieDetails() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/95 backdrop-blur-sm overflow-auto">
      <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700/80 text-white hover:bg-neutral-600/80 transition-all">
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
          {/* <div className="flex items-center justify-center h-96">
            <div className="animate-pulse text-center">
              <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="mt-4 text-white">Loading Details...</p>
            </div>
          </div> */}

          {/* Error State - Comment out when not needed */}
          {/* <div className="flex items-center justify-center h-96">
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
              <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md">
                Close
              </button>
            </div>
          </div> */}

          {/* Success State - Uncomment to show movie details */}
          <div>
            {/* Backdrop */}
            <div className="relative h-72 md:h-96 w-full">
              <img src="" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="md:flex gap-8 -mt-32 md:-mt-48 relative">
                {/* Poster */}
                <div className="w-32 md:w-64 flex-shrink-0 mb-4 md:mb-0">
                  <div className="rounded-lg overflow-hidden shadow-lg border border-neutral-400">
                    <div className="w-full aspect-[2/3] bg-neutral-700 flex items-center justify-center text-white">
                      No Poster Available
                    </div>
                  </div>
                </div>

                {/* Movie Info */}
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Movie Title
                    <span className="font-normal text-neutral-400 ml-2">
                      (2023)
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
                      <span className="ml-1 font-medium">8.5/10</span>
                    </div>
                    <span className="text-neutral-300">2h 15m</span>
                    <span className="text-neutral-300">2023-05-15</span>
                    <span className="bg-red-500/80 text-white text-sm py-0.5 px-2 rounded">
                      18+
                    </span>
                  </div>

                  {/* Genres */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs">
                      Action
                    </span>
                    <span className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs">
                      Adventure
                    </span>
                    <span className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs">
                      Sci-Fi
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="mt-4 text-neutral-400 italic">"An epic adventure awaits"</p>

                  {/* Overview */}
                  <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2 text-white">
                      Overview
                    </h2>
                    <p className="text-neutral-300">
                      This is the movie overview. It provides a summary of the plot and main themes of the film.
                      The story follows the main characters as they embark on an adventure that will change their lives forever.
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
                    <div>
                      <h3 className="text-neutral-400 text-sm mb-1">
                        Production Companies
                      </h3>
                      <p className="text-white">Paramount Pictures, Marvel Studios</p>
                    </div>
                    <div>
                      <h3 className="text-neutral-400 text-sm mb-1">
                        Language
                      </h3>
                      <p className="text-white">English</p>
                    </div>
                    <div>
                      <h3 className="text-neutral-400 text-sm mb-1">Budget</h3>
                      <p className="text-white">$200,000,000</p>
                    </div>
                    <div>
                      <h3 className="text-neutral-400 text-sm mb-1">Revenue</h3>
                      <p className="text-white">$800,000,000</p>
                    </div>
                    <div>
                      <h3 className="text-neutral-400 text-sm mb-1">Status</h3>
                      <p className="text-white">Released</p>
                    </div>
                    <div>
                      <h3 className="text-neutral-400 text-sm mb-1">
                        Original Language
                      </h3>
                      <p className="text-white">English</p>
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Rating
                  </h2>
                  <div className="flex items-center">
                    <div className="w-24 h-24 rounded-full border-4 border-purple-500 flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold">85%</span>
                    </div>
                    <div>
                      <p className="text-neutral-300">1,245 votes</p>
                      <div className="w-full bg-neutral-700 rounded-full h-2.5 mt-2">
                        <div 
                          className="bg-purple-600 h-2.5 rounded-full" 
                          style={{ width: '85%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* IMDB and Homepage Link */}
                <div className="mt-8 space-y-4 md:col-span-2">
                  <a
                    href="#"
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
                    href="#" 
                    className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded transition-colors ml-2"
                  >
                    <svg 
                      className="h-5 w-5 mr-2" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M10.9 2v2.1h-3.2v1.9h3.2v2.1h-3.2v1.9h3.2v2.1h-3.2v1.9h3.2V18h-3.2V20h3.2q1.25 0 2.125-.875T14 17.1v-10q0-1.25-.875-2.125T11 4.1q-.15 0-.3.012-.15-.012-.3-.012-1.25 0-2.125.875T7.7 7.1v10q0 1.25.875 2.125T10.7 20h.2q1.25 0 2.125-.875T13.9 17.1v-10q0-1.25-.875-2.125T10.9 2Z"/>
                    </svg>
                    View on IMDB
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}