export default function MovieDetails() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/95 backdrop:blur-sm overflow-auto">
      <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h-[900vh] overflow-hidden">
        {/* Close Button */}
        <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700-80 text-white hover:bg-neutral-600/80 transition-all">
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
      </div>
    </div>
  );
}
