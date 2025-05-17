import { useState } from "react";
import Footer from "../../components/Footer/Footer";

const Rules = () => {
  const [activeTab, setActiveTab] = useState("formato");

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
              <span className="text-white">REGRAS DO </span>
              <span className="text-orange-500">TORNEIO</span>
            </h2>

            <div className="h-1 w-40 bg-orange-500 mx-auto mb-8"></div>

            <p className="text-xl md:text-2xl font-medium mb-8 max-w-2xl mx-auto text-gray-300">
              Todas as regras e diretrizes que devem ser seguidas durante a
              competição.
            </p>
          </div>
        </div>
      </section>

      {/* Regras Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Aviso */}
            <div className="bg-orange-500/20 border border-orange-500 rounded-lg p-4 mb-10">
              <div className="flex items-start">
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
                  className="text-orange-500 mr-3 mt-1"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-orange-500 mb-1">
                    Atenção
                  </h3>
                  <p className="text-gray-300">
                    A organização se reserva o direito de alterar qualquer regra
                    durante o torneio, caso seja necessário para garantir a
                    melhor experiência competitiva. Todas as alterações serão
                    comunicadas previamente.
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-col md:flex-row justify-center mb-10 gap-2">
              <button
                onClick={() => setActiveTab("formato")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === "formato"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                FORMATO DO JOGO
              </button>
              <button
                onClick={() => setActiveTab("operadores")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === "operadores"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                OPERADORES
              </button>
              <button
                onClick={() => setActiveTab("restricoes")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === "restricoes"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                RESTRIÇÕES
              </button>
              <button
                onClick={() => setActiveTab("penalidades")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === "penalidades"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                PENALIDADES
              </button>
            </div>

            {/* Formato do Jogo */}
            <div
              className={`space-y-6 ${
                activeTab === "formato" ? "block" : "hidden"
              }`}
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="bg-gradient-to-r from-orange-600 to-orange-400 p-4">
                  <h3 className="text-xl font-orbitron font-bold text-black font-[Orbitron]">
                    FORMATO DO JOGO
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
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
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          ></rect>
                        </svg>
                        <h4 className="font-bold">Mapa</h4>
                      </div>
                      <p className="text-gray-300">Oregon</p>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
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
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <h4 className="font-bold">Modo</h4>
                      </div>
                      <p className="text-gray-300">Bomba</p>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
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
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                        </svg>
                        <h4 className="font-bold">Duração</h4>
                      </div>
                      <p className="text-gray-300">
                        12 rounds (alternando lados a cada round)
                      </p>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
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
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <h4 className="font-bold">Tempo</h4>
                      </div>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Fase de preparação: 30 segundos</li>
                        <li>• Duração do round: 3 minutos</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
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
                        <line x1="4" y1="21" x2="4" y2="14"></line>
                        <line x1="4" y1="10" x2="4" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="3"></line>
                        <line x1="20" y1="21" x2="20" y2="16"></line>
                        <line x1="20" y1="12" x2="20" y2="3"></line>
                        <line x1="1" y1="14" x2="7" y2="14"></line>
                        <line x1="9" y1="8" x2="15" y2="8"></line>
                        <line x1="17" y1="16" x2="23" y2="16"></line>
                      </svg>
                      <h4 className="font-bold">Banimentos</h4>
                    </div>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Cada dupla tem direito a 2 banimentos</li>
                      <li>
                        • Cada jogador bane 1 operador defensor e 1 operador
                        atacante
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
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
                      <h4 className="font-bold">Bombsite</h4>
                    </div>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Escolha livre de bombsite</li>
                      <li>
                        • Os jogadores só podem permanecer no andar do bombsite
                        escolhido
                      </li>
                      <li>
                        • Sair do andar do bombsite resultará em penalidade
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Operadores */}
            <div
              className={`space-y-6 ${
                activeTab === "operadores" ? "block" : "hidden"
              }`}
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="bg-gradient-to-r from-orange-600 to-orange-400 p-4">
                  <h3 className="text-xl font-orbitron font-bold text-black font-[Orbitron]">
                    OPERADORES
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
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
                        className="text-red-500 mr-2"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                      </svg>
                      <h4 className="font-bold">Operadores Proibidos</h4>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                      <div className="bg-gray-900 p-3 rounded border border-gray-700">
                        <p className="text-red-400 font-medium">
                          Fuze (com escudo)
                        </p>
                      </div>
                      <div className="bg-gray-900 p-3 rounded border border-gray-700">
                        <p className="text-red-400 font-medium">Montagne</p>
                      </div>
                      <div className="bg-gray-900 p-3 rounded border border-gray-700">
                        <p className="text-red-400 font-medium">Blackbeard</p>
                      </div>
                      <div className="bg-gray-900 p-3 rounded border border-gray-700">
                        <p className="text-red-400 font-medium">Blitz</p>
                      </div>
                      <div className="bg-gray-900 p-3 rounded border border-gray-700">
                        <p className="text-red-400 font-medium">Clash</p>
                      </div>
                      <div className="bg-gray-900 p-3 rounded border border-gray-700">
                        <p className="text-red-400 font-medium">
                          Qualquer escudo
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
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
                        className="text-green-500 mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <h4 className="font-bold">Operadores Permitidos</h4>
                    </div>
                    <p className="text-gray-300">
                      Todos os outros operadores não listados acima são
                      permitidos e podem ser utilizados livremente durante o
                      torneio, respeitando os banimentos de cada partida.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Restrições */}
            <div
              className={`space-y-6 ${
                activeTab === "restricoes" ? "block" : "hidden"
              }`}
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="bg-gradient-to-r from-orange-600 to-orange-400 p-4">
                  <h3 className="text-xl font-orbitron font-bold text-black font-[Orbitron]">
                    RESTRIÇÕES E PERMISSÕES
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
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
                        className="text-red-500 mr-2"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      <h4 className="font-bold">Restrições</h4>
                    </div>
                    <ul className="text-gray-300 space-y-2">
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
                          className="text-red-500 mr-2 mt-1"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line
                            x1="4.93"
                            y1="4.93"
                            x2="19.07"
                            y2="19.07"
                          ></line>
                        </svg>
                        <span>
                          <strong>Limite de andar:</strong> Os jogadores devem
                          permanecer exclusivamente no andar do bombsite
                          escolhido. Sair deste andar resultará em penalidade.
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
                          className="text-red-500 mr-2 mt-1"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line
                            x1="4.93"
                            y1="4.93"
                            x2="19.07"
                            y2="19.07"
                          ></line>
                        </svg>
                        <span>
                          <strong>Tempo de espera:</strong> As equipes têm 15
                          minutos para entrar no lobby. Após esse período, a
                          equipe será desclassificada da partida.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
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
                        className="text-green-500 mr-2"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <h4 className="font-bold">Permissões</h4>
                    </div>
                    <ul className="text-gray-300 space-y-2">
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
                          className="text-green-500 mr-2 mt-1"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>
                          <strong>Reforçar:</strong> É permitido reforçar
                          paredes, pisos e escotilhas dentro do andar do
                          bombsite.
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
                          className="text-green-500 mr-2 mt-1"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>
                          <strong>Zagueirar:</strong> É permitido utilizar
                          táticas defensivas e segurar ângulos.
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
                          className="text-green-500 mr-2 mt-1"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>
                          <strong>Dronar:</strong> É permitido utilizar drones
                          para reconhecimento.
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
                          className="text-green-500 mr-2 mt-1"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>
                          <strong>Bombsite:</strong> Livre escolha de bombsite
                          em cada round.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Penalidades */}
            <div
              className={`space-y-6 ${
                activeTab === "penalidades" ? "block" : "hidden"
              }`}
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="bg-gradient-to-r from-orange-600 to-orange-400 p-4">
                  <h3 className="text-xl font-orbitron font-bold text-black font-[Orbitron]">
                    PENALIDADES
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
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
                        className="text-red-500 mr-2"
                      >
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                      <h4 className="font-bold">Infrações e Consequências</h4>
                    </div>
                    <ul className="text-gray-300 space-y-4 mt-4">
                      <li className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                        <h5 className="font-bold mb-1">
                          Violação das Regras de Andar
                        </h5>
                        <p>
                          Sair do andar do bombsite escolhido resultará em
                          desclassificação da partida atual. Equipes na winners
                          bracket terão uma segunda chance na losers bracket.
                        </p>
                      </li>
                      <li className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                        <h5 className="font-bold mb-1">
                          Uso de Operadores Proibidos
                        </h5>
                        <p>
                          Utilizar qualquer operador proibido resultará em
                          desclassificação da partida atual. Equipes na winners
                          bracket terão uma segunda chance na losers bracket.
                        </p>
                      </li>
                      <li className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                        <h5 className="font-bold mb-1">Atraso</h5>
                        <p>
                          Equipes que não entrarem no lobby dentro do prazo de
                          15 minutos serão desclassificadas da partida. Equipes
                          na winners bracket serão movidas para a losers
                          bracket.
                        </p>
                      </li>
                      <li className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                        <h5 className="font-bold mb-1">
                          Comportamento Antidesportivo
                        </h5>
                        <p>
                          Comportamentos tóxicos, ofensivos ou antidesportivos
                          podem resultar em desclassificação do torneio sem
                          direito a segunda chance.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
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
                      <h4 className="font-bold">Decisões da Organização</h4>
                    </div>
                    <p className="text-gray-300">
                      A organização do torneio tem a palavra final em todas as
                      disputas e pode aplicar penalidades adicionais conforme
                      necessário para garantir a integridade da competição.
                    </p>
                  </div>
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
            Agora que você conhece as regras, forme sua dupla e mostre suas
            habilidades na Copinha 2v2!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/premiacao"
              className="bg-black text-white font-bold py-3 px-8 rounded-md 
                       transform hover:scale-105 transition-all duration-300 
                       border-2 border-black hover:border-white
                       shadow-[0_0_15px_rgba(0,0,0,0.3)] w-full max-w-[250px] mx-auto sm:mx-0"
            >
              VER PREMIAÇÃO
            </a>
            <a
              href="/"
              className="bg-transparent text-black font-bold py-3 px-8 rounded-md 
                       transform hover:scale-105 transition-all duration-300 
                       border-2 border-black hover:bg-black/10 w-full max-w-[250px] mx-auto sm:mx-0"
            >
              VOLTAR PARA HOME
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Rules;
