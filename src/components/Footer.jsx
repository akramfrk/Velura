export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
