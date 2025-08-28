export default function Navbar() {
  return (
    <header className="flex justify-center">
      <div className="container mx-auto px-4 py-4 w-4/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
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
          <div className="hidden md:block relative search-container">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Movies ..."
                className="bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />

              {/* Conditional Rendring */}
              <div className="absolute right-3 top-2.5">
                <svg
                  className="w-4 h-4 text-neutral-400"
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
              {/* Else */}
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
            </div>

            {/* DropDown Search Result Conditional Rendring */}
            <div className="absolute mt-2 w-72 bg-neutral-700 rounded-lg overflow-hidden z-50">
              <ul className="divide-y divide-neutral-700">
                <li className="hover:bg-neutral-700">
                  <button className="flex items-center p-3 w-full text-left">
                    <div className="w-10 h-10 bg-neutral-700 rounded overflow-hidden flex-shrink-0">
                      {/* Conditional Rendring */}
                      <img src="" alt="" className="w-full object-cover" />
                      {/* Else */}
                      <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs">
                        No Image
                      </div>
                    </div>
                    <div className="ml-3 flex-1 ">
                      <p className="text-sm font-medium text-white truncate">
                        Movie Title
                      </p>
                      <p className="text-xs text-neutral-400">
                        Movie Release Date
                      </p>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            {/* Conditional Rendring */}
            <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
              <div className="p-4 text-center text-neutral-400 text-sm">
                No Movies found matching...
              </div>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            {/* Conditional Rendring */}
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
            {/* Else */}
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
          </button>
        </div>
        {/* Mobile Navigation Conditional Rendring  */}
        <div className="mt-4 pb-4 space-y-4 md:hidden">
          <a
            href="#"
            className="block text-white hover:text-purple-400 transition-colors py-2"
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
          <div className=" relative mt-3 search-container">
            <input
              type="text"
              placeholder="Search Movies ..."
              className="bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
            {/* Conditional Rendring */}
            <div className="absolute right-3 top-2.5">
              <svg
                className="w-4 h-4 text-neutral-400"
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
              {/* Else */}
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

              {/* Mobile Search result Conditional rendring */}
              <div className=" mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                <ul className="divide-y divide-neutral-700">
                  <li className="hover:bg-neutral-700">
                    <button className="felx items-center p-3 w-full text-left">
                      <div className="w-10 h-14 bg-neutral-700 rounded-full overflow-hidden flex-shrink-0">
                        {/* Conditional rendring */}
                        <img
                          src=""
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        {/* Else */}
                        <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs">
                          No Image
                        </div>
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-white truncate">
                          Movie Title
                        </p>
                        <p className="text-xs text-neutral-400"> Movies release date</p>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              {/* Conditional Rendring */}
              <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                <div className="p-4 text-center text-neutral-400p text-sm">
                    No Movies found matching...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
