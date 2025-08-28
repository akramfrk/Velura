import MovieContent from "./components/MovieContent";
import Navbar from "./components/Navbar";

export default function App() {
  return(
    <div className="min-h-screen text-white">
      <Navbar />
      <main>
        <MovieContent />
      </main>
    </div>
  )
}