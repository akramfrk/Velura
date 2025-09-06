import Footer from "./components/Footer";
import MovieContent from "./components/MovieContent";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { MoviesProvider } from "./context/MoviesContext";

export default function App() {
  return (
    <MoviesProvider>
      <div className="min-h-screen text-white">
        <Navbar />
        <main>
          <MovieContent />
        </main>
        <Footer />
        {window.scrollY > 50 ? <ScrollToTop /> : null}
      </div>
    </MoviesProvider>
  );
}
