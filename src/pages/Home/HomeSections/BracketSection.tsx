import { useState, useEffect } from "react";

const BracketSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showHistoricalFullscreen, setShowHistoricalFullscreen] =
    useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Bloquear o scroll quando o modal estiver aberto
    if (showHistoricalFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      document.body.style.overflow = "auto";
    };
  }, [showHistoricalFullscreen]);

  return (
    <>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-center font-[Orbitron]">
            <span className="text-white">EDIÇÃO </span>
            <span className="text-orange-500">HISTÓRICA</span>
          </h2>

          <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
            Relembre a épica edição 33 da Copinha 2v2, onde a dupla Goldzão e
            Clypt venceu Tutu e Baltazar em uma final inesquecível.
          </p>

          {/* Iframe Container */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-orange-500 rounded-tl-lg opacity-70 hidden md:block"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-orange-500 rounded-br-lg opacity-70 hidden md:block"></div>

            {/* Main iframe container */}
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-orange-400 p-3 rounded-t-lg mb-4">
                <h3 className="text-lg md:text-xl font-orbitron font-bold text-black text-center font-[Orbitron]">
                  COPINHA 2V2 - EDIÇÃO 33
                </h3>
              </div>

              <div
                className="relative rounded-lg overflow-hidden"
                style={{ height: isMobile ? "400px" : "500px" }}
              >
                <iframe
                  src="https://challonge.com/pt_BR/w0cbjviq/module"
                  width="100%"
                  height="100%"
                  scrolling="auto"
                  frameBorder="0"
                  className="bg-white"
                ></iframe>
              </div>

              <div className="mt-4 text-center">
                <button
                  onClick={() => setShowHistoricalFullscreen(true)}
                  className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <span>Ver em tela cheia</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                    <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                    <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                    <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <div className="mt-10 text-center">
            <a
              href="/chaveamento"
              className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-md 
                    border border-gray-700 hover:border-orange-500 transition-colors duration-300"
            >
              VER CHAVEAMENTO ATUAL
            </a>
          </div> */}
        </div>
      </section>
      {/* Modal de Tela Cheia para Edição Histórica */}
      {showHistoricalFullscreen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col">
          <div className="p-4 flex justify-between items-center bg-gray-900 border-b border-gray-800">
            <h3 className="text-xl font-orbitron font-bold font-[Orbitron]">
              <span className="text-white">COPINHA 2V2 - </span>
              <span className="text-orange-500">EDIÇÃO 33</span>
            </h3>
            <button
              onClick={() => setShowHistoricalFullscreen(false)}
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-300"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="flex-1 p-2 md:p-4">
            <div className="w-full h-full bg-white rounded-lg overflow-hidden">
              <iframe
                src="https://challonge.com/pt_BR/w0cbjviq/module"
                width="100%"
                height="100%"
                scrolling="auto"
                frameBorder="0"
                className="bg-white"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BracketSection;
