const BracketSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-center font-[Orbitron]">
          <span className="text-white">CHAVEAMENTO DO </span>
          <span className="text-orange-500">TORNEIO</span>
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Sistema de dupla eliminação: cada dupla tem duas chances. Perca uma
          vez e vá para a chave de losers. Perca duas vezes e está fora.
        </p>

        <div
          className="relative bg-gray-900 p-6 rounded-lg 
                      border border-gray-800 
                      shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <div className="overflow-x-auto">
            <div className="min-w-[900px] py-8">
              {/* Winners Bracket */}

              <div className="mb-12">
                <h3 className="text-center text-lg font-bold text-orange-500 mb-6">
                  WINNERS BRACKET
                </h3>

                <div className="grid grid-cols-4 gap-4">
                  {/* Round 1 */}
                  <div className="space-y-4">
                    <h4 className="text-center text-sm text-gray-400 mb-2">
                      ROUND 1
                    </h4>
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="bg-gray-800 p-2 rounded border-l-2 border-orange-500"
                      >
                        <div className="flex justify-between text-sm mb-1">
                          <span>Dupla {i * 2 - 1}</span>
                          <span className="font-bold">2</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>Dupla {i * 2}</span>
                          <span>0</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Semifinals */}
                  <div className="space-y-4 pt-8">
                    <h4 className="text-center text-sm text-gray-400 mb-2">
                      SEMIFINAIS
                    </h4>
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="bg-gray-800 p-2 rounded border-l-2 border-orange-500 mb-16"
                      >
                        <div className="flex justify-between text-sm mb-1">
                          <span>Dupla {i * 2 - 1}</span>
                          <span className="font-bold">2</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>Dupla {i * 2 + 1}</span>
                          <span>1</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Winners Final */}
                  <div className="space-y-4 pt-16">
                    <h4 className="text-center text-sm text-gray-400 mb-2">
                      FINAL WINNERS
                    </h4>
                    <div className="bg-gray-800 p-2 rounded border-l-2 border-orange-500">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Dupla 1</span>
                        <span className="font-bold">2</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Dupla 3</span>
                        <span>1</span>
                      </div>
                    </div>
                  </div>

                  {/* Grand Final */}
                  <div className="flex flex-col items-center justify-center">
                    <h4 className="text-center text-sm text-gray-400 mb-4">
                      GRANDE FINAL
                    </h4>

                    {/* Final bracket - traditional style */}
                    <div className="bg-gray-800 p-3 rounded-lg border-l-2 border-orange-500 w-full max-w-[200px] mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Dupla 1</span>
                        <span className="font-bold">3</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Dupla 5</span>
                        <span>1</span>
                      </div>
                    </div>

                    {/* Champion highlight - can be hidden initially with a className like "hidden" */}
                    <div className="relative mt-4" id="champion-highlight">
                      {/* Background glow effect */}
                      <div className="absolute -inset-3 bg-orange-500 opacity-30 blur-lg rounded-lg"></div>

                      {/* Card do campeão com troféu integrado */}
                      <div className="bg-gradient-to-r from-orange-600 to-orange-400 p-4 pt-6 rounded-lg shadow-[0_0_20px_rgba(255,102,0,0.5)] relative z-10 w-full max-w-[200px]">
                        {/* Troféu integrado */}
                        <div className="flex justify-center mb-2">
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
                            className="text-black/80"
                          >
                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                            <path d="M4 22h16"></path>
                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                          </svg>
                        </div>

                        <div className="text-center mb-2">
                          <p className="uppercase font-bold text-black text-xs tracking-wider">
                            Campeão
                          </p>
                        </div>

                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-bold text-black text-lg">
                              Dupla 1
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Losers Bracket */}
              <div>
                <h3 className="text-center text-lg font-bold text-gray-400 mb-6">
                  LOSERS BRACKET
                </h3>

                <div className="grid grid-cols-5 gap-4">
                  {/* Round 1 */}
                  <div className="space-y-4">
                    <h4 className="text-center text-sm text-gray-400 mb-2">
                      ROUND 1
                    </h4>
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="bg-gray-800 p-2 rounded border-l-2 border-gray-500"
                      >
                        <div className="flex justify-between text-sm mb-1">
                          <span>Dupla {i * 2 + 7}</span>
                          <span className="font-bold">2</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>Dupla {i * 2 + 8}</span>
                          <span>0</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Round 2 */}
                  <div className="space-y-4">
                    <h4 className="text-center text-sm text-gray-400 mb-2">
                      ROUND 2
                    </h4>
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="bg-gray-800 p-2 rounded border-l-2 border-gray-500"
                      >
                        <div className="flex justify-between text-sm mb-1">
                          <span>Dupla {i * 2 + 3}</span>
                          <span className="font-bold">2</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>Dupla {i * 2 + 7}</span>
                          <span>1</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Round 3 */}
                  <div className="space-y-4">
                    <h4 className="text-center text-sm text-gray-400 mb-2">
                      ROUND 3
                    </h4>
                    <div className="bg-gray-800 p-2 rounded border-l-2 border-gray-500">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Dupla 5</span>
                        <span className="font-bold">2</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Dupla 4</span>
                        <span>0</span>
                      </div>
                    </div>
                  </div>

                  {/* Losers Final */}
                  <div className="space-y-4">
                    <h4 className="text-center text-sm text-gray-400 mb-2">
                      FINAL LOSERS
                    </h4>
                    <div className="bg-gray-800 p-2 rounded border-l-2 border-gray-500">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Dupla 5</span>
                        <span className="font-bold">2</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Dupla 3</span>
                        <span>1</span>
                      </div>
                    </div>
                  </div>

                  {/* Placeholder to align with Grand Final */}
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-orange-500 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="text-center mt-10">
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-md 
                          border border-gray-700 hover:border-orange-500 transition-colors duration-300"
            >
              VER CHAVEAMENTO COMPLETO
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BracketSection;
