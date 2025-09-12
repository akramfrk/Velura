export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800">
      <div className="container mx-auto px-4 py-12 w-4/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <a href="/" className="inline-block mb-6">
              <span className="text-purple-500 font-bold text-2xl">
                Vel<span className="text-white">ura</span>
              </span>
            </a>
            <p className="mb-4 text-sm">
              Discover and explore the latest movies from around the world.
              Velura gives you access to a vast collection of films, reviews,
              and ratings across all genres.
            </p>
            <div className=" flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ferkioui-akram/"
                target="_blank"
                className="text-neutral-500 hover:text-purple-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/akram.frk/"
                target="_blank"
                className="text-neutral-500 hover:text-purple-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://github.com/akramfrk"
                target="_blank"
                className="text-neutral-500 hover:text-purple-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-purple-400 transition-all">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#trending"
                  className="hover:text-purple-400 transition-all"
                >
                  Trending
                </a>
              </li>
              <li>
                <a
                  href="#popular"
                  className="hover:text-purple-400 transition-all"
                >
                  Popular
                </a>
              </li>
              <li>
                <a
                  href="#top-rated"
                  className="hover:text-purple-400 transition-all"
                >
                  Top Rated
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/akramfrk/Velura" target="_blank" className="hover:text-purple-400 transition-all">
                  About
                </a>
              </li>
              <li>
                <a href="https://github.com/akramfrk" target="_blank" className="hover:text-purple-400 transition-all">
                  Developer
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs">
              © 2025 Velura. All rights reserved.
              <br className="md:hidden" />
              <span className="hidden md:inline">.</span>
              Powered by{" "}
              <a href="#" className="text-purple-400 hover:text-purple-300">
                TMDB API
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
