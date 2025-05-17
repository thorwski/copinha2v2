import { useState } from "react";
import Footer from "../../components/Footer/Footer";

const PrizePool = () => {
  const [showTerms, setShowTerms] = useState(false);

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
              <span className="text-white">PREMIAÇÃO E </span>
              <span className="text-orange-500">INSCRIÇÃO</span>
            </h2>

            <div className="h-1 w-40 bg-orange-500 mx-auto mb-8"></div>

            <p className="text-xl md:text-2xl font-medium mb-8 max-w-2xl mx-auto text-gray-300">
              Detalhes sobre a premiação, valores de inscrição e termos do
              torneio.
            </p>
          </div>
        </div>
      </section>

      {/* Premiação Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <div className="bg-gradient-to-r from-orange-600 to-orange-400 p-4 flex items-center justify-between">
                <h3 className="text-2xl font-orbitron font-bold text-black font-[Orbitron]">
                  PREMIAÇÃO TOTAL
                </h3>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black mr-2"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </div>
              </div>

              <div className="p-8 text-center">
                <div className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  R$ 300
                </div>
                <p className="text-gray-400 text-lg mb-8">
                  Premiação em dinheiro para os melhores colocados
                </p>

                <div className="grid grid-cols-1 gap-4 mb-8">
                  <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-orange-500">
                    <div className="flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-500 mr-3"
                      >
                        <circle cx="12" cy="8" r="6"></circle>
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                      </svg>
                      <h4 className="font-bold text-2xl">CAMPEÃO</h4>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-orange-500 mb-2">
                        R$ 300
                      </p>
                      <p className="text-gray-400">
                        Premiação integral para a dupla vencedora
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inscrição Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-center font-[Orbitron]">
              <span className="text-white">INFORMAÇÕES DE </span>
              <span className="text-orange-500">INSCRIÇÃO</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="p-6">
                  <div className="flex items-center mb-4">
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
                      className="text-orange-500 mr-3"
                    >
                      <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                      <line x1="2" y1="20" x2="2" y2="20"></line>
                    </svg>
                    <h3 className="text-xl font-bold">Valor da Inscrição</h3>
                  </div>

                  <div className="text-3xl font-bold mb-4 text-orange-500">
                    R$ 30
                  </div>
                  <p className="text-gray-400 mb-4">
                    Por dupla (R$ 15 por jogador)
                  </p>

                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
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
                        className="text-orange-500 mr-2 mt-1"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Pagamento via PIX</span>
                    </li>
                    <li className="flex items-start">
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
                        className="text-orange-500 mr-2 mt-1"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Confirmação imediata</span>
                    </li>
                    <li className="flex items-start">
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
                        className="text-orange-500 mr-2 mt-1"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Acesso ao grupo do WhatsApp</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="p-6">
                  <div className="flex items-center mb-4">
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
                      className="text-orange-500 mr-3"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <h3 className="text-xl font-bold">Vagas Limitadas</h3>
                  </div>

                  <div className="text-3xl font-bold mb-4 text-orange-500">
                    16 Duplas
                  </div>
                  <p className="text-gray-400 mb-4">
                    Apenas 32 jogadores no total
                  </p>

                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
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
                        className="text-orange-500 mr-2 mt-1"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Vagas por ordem de inscrição</span>
                    </li>
                    <li className="flex items-start">
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
                        className="text-orange-500 mr-2 mt-1"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Confirmação após pagamento</span>
                    </li>
                    <li className="flex items-start">
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
                        className="text-orange-500 mr-2 mt-1"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Garanta sua vaga com antecedência</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Termos e Condições */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] mb-8">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
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
                      className="text-orange-500 mr-3"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <h3 className="text-xl font-bold">Termos e Condições</h3>
                  </div>
                  <button
                    onClick={() => setShowTerms(!showTerms)}
                    className="text-orange-500 hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    {showTerms ? "Ocultar" : "Mostrar"}
                  </button>
                </div>

                <div
                  className={`space-y-4 text-gray-300 ${
                    showTerms ? "block" : "hidden"
                  }`}
                >
                  <p>
                    Ao realizar sua inscrição e efetuar o pagamento, você
                    concorda com os seguintes termos:
                  </p>

                  <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold mb-2">Política de Reembolso</h4>
                    <p className="text-gray-400">
                      Após a confirmação do pagamento,{" "}
                      <span className="text-orange-500 font-bold">
                        não haverá reembolso
                      </span>{" "}
                      do valor da inscrição, exceto em caso de cancelamento do
                      torneio por parte da organização.
                    </p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold mb-2">
                      Substituição de Jogadores
                    </h4>
                    <p className="text-gray-400">
                      A substituição de jogadores só será permitida até 48 horas
                      antes do início do torneio, mediante comunicação prévia à
                      organização.
                    </p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold mb-2">Regras e Conduta</h4>
                    <p className="text-gray-400">
                      Todos os participantes devem seguir as regras do torneio e
                      manter conduta esportiva. Comportamentos tóxicos ou
                      antidesportivos podem resultar em desclassificação sem
                      reembolso.
                    </p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold mb-2">Direitos de Imagem</h4>
                    <p className="text-gray-400">
                      Ao participar do torneio, você autoriza o uso de sua
                      imagem e gameplay para divulgação em redes sociais e
                      transmissões do evento.
                    </p>
                  </div>
                </div>

                <div
                  className={`text-center mt-4 ${
                    showTerms ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-400 text-sm">
                    Ao se inscrever, você confirma que leu e concorda com todos
                    os termos acima.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-black font-[Orbitron]">
            PRONTO PARA COMPETIR?
          </h2>
          <p className="text-black/80 max-w-2xl mx-auto mb-8 text-lg">
            Garanta sua vaga agora mesmo. Apenas 16 duplas poderão participar
            deste torneio épico!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/+5511959358507?text=Olá,%20tenho%20interesse%20em%20participar%20da%20Copinha%202v2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-black text-white font-bold py-3 px-8 rounded-md 
                       transform hover:scale-105 transition-all duration-300 
                       border-2 border-black hover:border-white
                       shadow-[0_0_15px_rgba(0,0,0,0.3)] w-full md:w-fit max-w-[250px] cursor-pointer"
              >
                INSCREVA-SE AGORA
              </button>
            </a>
            <a
              href="/"
              className="bg-transparent text-black font-bold py-3 px-8 rounded-md 
                       transform hover:scale-105 transition-all duration-300 
                       border-2 border-black hover:bg-black/10 w-full md:w-fit max-w-[250px] mx-auto sm:mx-0"
            >
              VOLTAR PARA HOME
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default PrizePool;
