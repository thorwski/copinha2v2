import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";

const Bracket = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showFullscreen, setShowFullscreen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Bloquear o scroll quando o modal estiver aberto
    if (showFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      document.body.style.overflow = "auto";
    };
  }, [showFullscreen]);

  return (
    <div className="min-h-screen bg-black text-white font-barlow">
      {/* Hero Section */}
      <section className="relative py-20 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
        <div className="absolute inset-0">
          <img
            src="https://wallpapers.com/images/hd/best-rainbow-six-siege-background-9avm8w8wqwoo4eyw.jpg"
            alt="Rainbow Six Siege background"
            className="object-cover object-center w-full h-full opacity-50"
          />
        </div>

        <div className="container mx-auto px-4 z-20 text-center">
          <div className="mb-6">
            <a
              href="/"
              className="inline-block mb-8 transform hover:scale-105 transition-transform duration-300"
            >
              <h1 className="text-4xl md:text-6xl font-orbitron font-bold tracking-wider font-[Orbitron]">
                <span className="text-white">COPINHA</span>
                <span className="text-orange-500"> 2v2</span>
              </h1>
            </a>

            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 font-[Orbitron]">
              <span className="text-white">CHAVEAMENTO</span>
              <span className="text-orange-500"> DO TORNEIO</span>
            </h2>

            <div className="h-1 w-40 bg-orange-500 mx-auto mb-8"></div>

            <p className="text-xl md:text-2xl font-medium mb-8 max-w-2xl mx-auto text-gray-300">
              Acompanhe o progresso de todas as duplas no torneio
            </p>
          </div>
        </div>
      </section>

      {/* Chaveamento Section */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Informações sobre o chaveamento */}
            <div className="bg-gray-900/70 rounded-lg p-4 md:p-6 mb-8 border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="bg-orange-500 p-2 rounded-full">
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
                    className="text-black"
                  >
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    <path d="M9 14 5 17.5 9 21"></path>
                    <path d="M15 14l4 3.5-4 3.5"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    Chaveamento em Tempo Real
                  </h3>
                  <p className="text-gray-300">
                    Acompanhe o progresso do torneio em tempo real. O
                    chaveamento é atualizado automaticamente após cada partida.
                  </p>
                </div>
              </div>
            </div>

            {/* Iframe Container */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-orange-500 rounded-tl-lg opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-orange-500 rounded-br-lg opacity-70"></div>

              {/* Loading indicator */}
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 z-10 rounded-lg">
                  <div className="flex flex-col items-center">
                    <svg
                      className="animate-spin h-10 w-10 text-orange-500 mb-4"
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
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <p className="text-gray-300">Carregando chaveamento...</p>
                  </div>
                </div>
              )}

              {/* Main iframe container */}
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-orange-400 p-3 rounded-t-lg mb-4">
                  <h3 className="text-lg md:text-xl font-orbitron font-bold text-black text-center font-[Orbitron]">
                    CHAVEAMENTO COPINHA 2V2
                  </h3>
                </div>

                <div
                  className="relative rounded-lg overflow-hidden"
                  style={{ height: isMobile ? "400px" : "650px" }}
                >
                  <iframe
                    src="https://challonge.com/pt_BR/u8vzgq93/module"
                    width="100%"
                    height="100%"
                    scrolling="auto"
                    frameBorder="0"
                    onLoad={() => setIframeLoaded(true)}
                    className="bg-white"
                  ></iframe>
                </div>

                <div className="mt-4 text-center">
                  <button
                    onClick={() => setShowFullscreen(true)}
                    className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors cursor-pointer"
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

            {/* Informações adicionais */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500 mr-2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  Formato do Torneio
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
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
                      className="text-orange-500 mr-2 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      <strong>Dupla Eliminação:</strong> Cada dupla tem duas
                      chances. Perca uma vez e vá para a chave de losers. Perca
                      duas vezes e está fora.
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-orange-500 mr-2 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      <strong>16 Duplas:</strong> O torneio conta com 16 duplas
                      no total, disputando o título de campeão.
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-orange-500 mr-2 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      <strong>Melhor de 3:</strong> Todas as partidas são
                      disputadas em formato melhor de 3 (BO3), exceto a grande
                      final.
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-orange-500 mr-2 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      <strong>Grande Final:</strong> A grande final é disputada
                      em formato melhor de 5 (BO5).
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500 mr-2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  Informações Importantes
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
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
                      className="text-orange-500 mr-2 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      <strong>Horários:</strong> Confira os horários das
                      partidas diretamente no chaveamento ou em nosso grupo do
                      WhatsApp.
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-orange-500 mr-2 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      <strong>Atrasos:</strong> Equipes que não entrarem no
                      lobby dentro do prazo de 15 minutos serão desclassificadas
                      da partida.
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-orange-500 mr-2 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      <strong>Transmissão:</strong> As partidas das semifinais e
                      finais serão transmitidas ao vivo em nosso canal.
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-orange-500 mr-2 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      <strong>Dúvidas:</strong> Em caso de dúvidas ou problemas,
                      entre em contato com a organização pelo grupo do WhatsApp.
                    </span>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-black font-[Orbitron]">
            GARANTA SUA VAGA NA PRÓXIMA COPINHA!
          </h2>
          <p className="text-black/80 max-w-2xl mx-auto mb-8 text-lg">
            Inscrições para a próxima edição serão abertas em breve. Prepare sua
            dupla e não fique de fora!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/+5511959358507?text=Olá,%20tenho%20interesse%20em%20participar%20da%20Copinha%202v2"
              className="bg-black text-white font-bold py-3 px-8 rounded-md 
                       transform hover:scale-105 transition-all duration-300 
                       border-2 border-black hover:border-white
                       shadow-[0_0_15px_rgba(0,0,0,0.3)] w-full max-w-[250px] mx-auto sm:mx-0"
            >
              INSCREVER-SE
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modal de Tela Cheia */}
      {showFullscreen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col">
          <div className="p-4 flex justify-between items-center bg-gray-900 border-b border-gray-800">
            <h3 className="text-xl font-orbitron font-bold font-[Orbitron]">
              <span className="text-white">CHAVEAMENTO </span>
              <span className="text-orange-500">COPINHA 2V2</span>
            </h3>
            <button
              onClick={() => setShowFullscreen(false)}
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors cursor-pointer"
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
                src="https://challonge.com/pt_BR/u8vzgq93/module"
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
    </div>
  );
};

export default Bracket;
