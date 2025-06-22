function Hero() {
  return (
    <section className="relative w-full max-w-screen-md mx-auto px-4 min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
        Alexander E.F Valdez
      </h1>
      <p className="mt-4 text-lg sm:text-xl max-w-xl text-gray-300">
        Computer Science Student With An Interest In iOS, Website, and Android
        Development
        <p>(And All Things IT)</p>
      </p>

      <div className="absolute bottom-32 text-white breathe">
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLineCap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
