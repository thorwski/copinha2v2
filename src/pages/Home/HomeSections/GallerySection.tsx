import { useEffect, useState } from "react";

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // galleryData.ts (pode ser outro arquivo ou no topo do mesmo)
  const gallerySlides = [
    // {
    //   src: "/assets/images/bagre.png",
    //   caption:
    //     'Jogador atinge marca histórica e é eleito o "Bagre de Ouro" 5 vezes pela Copinha 2v2',
    // },
    {
      src: "/assets/images/tutu.png",
      caption: "Tutu decepciona fãs e é criticado na final da Copinha 2v2",
    },
    {
      src: "/assets/images/abandona.png",
      caption:
        "THORWSKI abandona iLord444 após fracasso na 17ª edição da Copinha 2v2",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === gallerySlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [gallerySlides.length]);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-center font-[Orbitron]">
          <span className="text-white">MOMENTOS </span>
          <span className="text-orange-500">ÉPICOS</span>
        </h2>

        <div className="relative overflow-hidden">
          {/* Slides container com transform centralizado */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {gallerySlides.map((item, index) => (
              <div key={index} className="min-w-full">
                <div
                  className="relative h-[300px] md:h-[500px] mx-auto max-w-4xl 
            border-2 border-orange-500 rounded-lg overflow-hidden
            shadow-[0_0_30px_rgba(255,102,0,0.2)]"
                >
                  <img
                    src={item.src}
                    alt={`Momento épico ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm md:text-base text-gray-300 bg-black/50 p-2 md:p-3 rounded">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botões de navegação: permanecem os mesmos */}
          <div className="flex justify-center mt-6 gap-2">
            {gallerySlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-orange-500" : "bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
