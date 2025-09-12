# 🎬 Velura - Movie Discovery App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

Velura is a modern, responsive movie discovery web application that allows users to explore trending, popular, and top-rated movies. Built with React and powered by the TMDB API, Velura provides an intuitive interface for movie enthusiasts to discover and explore films across various genres.

## ✨ Features

- 🎥 Browse trending, popular, and top-rated movies
- 🔍 Search for specific movies
- 🏷️ Filter movies by genre
- 📱 Fully responsive design for all devices
- ⚡ Fast and smooth user experience with React 19
- 🎨 Beautiful UI built with Tailwind CSS
- 🔄 Real-time data fetching from TMDB API

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- TMDB API key (get it from [TMDB API](https://www.themoviedb.org/settings/api))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/velura.git
   cd velura
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your TMDB API key:
   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser to see the app in action!

## 🛠️ Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [TMDB API](https://www.themoviedb.org/documentation/api) - The Movie Database API
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon toolkit

## 📁 Project Structure

```
velura/
├── public/              # Static files
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # Reusable React components
│   │   ├── Footer.jsx   # Footer component
│   │   ├── GenreSection.jsx  # Genre filter section
│   │   ├── HeroSection.jsx   # Hero banner
│   │   ├── MovieContent.jsx  # Main movie content
│   │   ├── MovieDetails.jsx  # Movie details modal
│   │   ├── MovieSlide.jsx    # Movie carousel item
│   │   ├── Navbar.jsx   # Navigation bar
│   │   └── ScrollToTop.jsx   # Scroll to top button
│   ├── context/         # React context
│   │   └── MoviesContext.jsx # Global state management
│   ├── services/        # API services
│   │   └── api.js       # TMDB API integration
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data
- [Vite](https://vitejs.dev/) for the amazing development experience
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the amazing UI library

## 📧 Contact

Akram FERKIOUI - [LinkedIn](https://www.linkedin.com/in/ferkioui-akram/) - akramferkioui.contact@gmail.com

Project Link: [Velura](https://velura-eight.vercel.app/)
