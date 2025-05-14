const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Rainbow Six Siege background image */}
        <img
          src="https://images4.alphacoders.com/676/thumb-1920-676369.jpg"
          alt="Rainbow Six Siege background"
          className="object-cover object-center w-full h-full opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 z-20 text-center">
        <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold tracking-wider font-[Orbitron]">
            <span className="text-white">COPINHA</span>
            <span className="text-orange-500"> 2v2</span>
          </h1>
        </div>

        <h2 className="text-xl md:text-3xl font-medium mb-8 max-w-2xl mx-auto">
          <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            FORME SUA DUPLA. MOSTRE QUEM MANDA.
          </span>
        </h2>

        <a href="https://wa.me/+5511959358507?text=Olá,%20tenho%20interesse%20em%20participar%20da%20Copinha%202v2" target="_blank" rel="noopener noreferrer">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer font-bold py-3 px-8 rounded-md 
                       transform hover:scale-105 transition-all duration-300 
                       border border-orange-400 shadow-[0_0_15px_rgba(255,102,0,0.5)]"
          >
            INSCREVA-SE AGORA
          </button>
        </a>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-orange-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
