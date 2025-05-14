import { useState } from "react";

const HallOfFameSection = () => {
  const [activeTab, setActiveTab] = useState("champion");

  // Hall of Fame data
  const hallOfFameData = {
    mvp: [
      {
        name: "iLord444",
        value: "8 MVPs",
        info1: "Especialista em clutches",
        info2: "Operador favorito: Ash",
        percent: "92%",
        image: "/assets/images/ilord.png",
      },
      {
        name: "THORWSKI",
        value: "7 MVPs",
        info1: "Rei da SMG-11",
        info2: "Operador favorito: Smoke",
        percent: "78%",
        image: "/assets/images/thorwski.png",
      },
      {
        name: "migueliito28",
        value: "6 MVPs",
        info1: "Promessa do cenário",
        info2: "Operador favorito: Ram",
        percent: "65%",
        image: "/assets/images/miguelito.png",
      },
    ],
    champion: [
      {
        name: "THORWSKI",
        value: "19 títulos",
        info1: "CEO lendário",
        info2: "Participou de todas as edições",
        percent: "95%",
        image: "/assets/images/thorwski.png",
      },
      {
        name: "iLord444",
        value: "15 títulos",
        info1: "Conhecido como 'O Cara'",
        info2: "Jogador mais versátil",
        percent: "80%",
        image: "/assets/images/ilord.png",
      },
      {
        name: "SwitxxClover",
        value: "13 títulos",
        info1: "Suporte impecável",
        info2: "Flexível",
        percent: "75%",
        image: "/assets/images/clover.png",
      },
    ],
    duo: [
      {
        name: "FalleN & coldzera",
        value: "2 títulos juntos",
        info1: "Dupla mais temida do Brasil",
        info2: "Invictos na edição 2023",
        percent: "85%",
        image: "/assets/images/ilord.png",
      },
      {
        name: "Nesk & Psycho",
        value: "1 título junto",
        info1: "Conhecidos como 'Dupla Dinâmica'",
        info2: "Especialistas em viradas",
        percent: "70%",
        image: "/assets/images/ilord.png",
      },
      {
        name: "TACO & fer",
        value: "1 título junto",
        info1: "Amigos desde a infância",
        info2: "Conhecidos pela comunicação perfeita",
        percent: "65%",
        image: "/assets/images/ilord.png",
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-8 text-center font-[Orbitron]">
          <span className="text-white">HALL DA </span>
          <span className="text-orange-500">FAMA</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("champion")}
              className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer ${
                activeTab === "champion"
                  ? "bg-orange-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              MAIORES CAMPEÕES
            </button>
            <button
              onClick={() => setActiveTab("mvp")}
              className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer ${
                activeTab === "mvp"
                  ? "bg-orange-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              MAIORES MVPs
            </button>
            {/* <button
              onClick={() => setActiveTab("duo")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "duo"
                  ? "bg-orange-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              DUPLAS CAMPEÃS
            </button> */}
          </div>
        </div>

        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hallOfFameData[activeTab as keyof typeof hallOfFameData].map(
            (item, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden 
                          border border-gray-800 hover:border-orange-500 
                          transition-all duration-300 transform hover:scale-105
                          shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={`Player ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div> */}
                  <div className="absolute top-2 right-2 bg-orange-500 text-black font-bold py-1 px-3 rounded-md text-sm">
                    {index === 0
                      ? "1º LUGAR"
                      : index === 1
                      ? "2º LUGAR"
                      : "3º LUGAR"}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-400 mb-4">{item.value}</p>

                  <div className="w-full bg-gray-800 h-4 rounded-full mb-4">
                    <div
                      className="bg-gradient-to-r from-orange-600 to-orange-400 h-4 rounded-full"
                      style={{ width: item.percent }}
                    ></div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-400">
                    <p>• {item.info1}</p>
                    <p>• {item.info2}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="mt-12 text-center">
          {/* <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-md 
                          border border-gray-700 hover:border-orange-500 transition-colors duration-300"
          >
            VER HALL DA FAMA COMPLETO
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default HallOfFameSection;
