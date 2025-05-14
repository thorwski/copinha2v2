const TournamentSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-center md:text-left text-orange-500 font-[Orbitron]">
          SOBRE O CAMPEONATO
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full">
            <p className="text-gray-300 mb-4">
              A Copinha 2v2 é o maior torneio de Rainbow Six Siege no formato
              duplas do Brasil. Competição intensa, estratégia refinada e
              habilidade pura definem esta experiência única.
            </p>
            <p className="text-gray-300 mb-6">
              Com premiações exclusivas e transmissão ao vivo para milhares de
              espectadores, este é o palco perfeito para mostrar suas
              habilidades e conquistar seu espaço no cenário competitivo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-xl mb-2">16 DUPLAS</h3>
                <p className="text-gray-400">
                  Vagas limitadas para os melhores
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-xl mb-2">PREMIAÇÃO</h3>
                <p className="text-gray-400">Prêmios exclusivos</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-xl mb-2">LIVE STREAM</h3>
                <p className="text-gray-400">Transmissão completa</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="relative mt-10 mx-auto max-w-4xl">
          <div className="bg-orange-500 text-black font-bold py-2 px-4 rounded-md transform rotate-3 inline-block absolute -top-4 right-4 z-10">
            EDIÇÃO 2025
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TournamentSection;
