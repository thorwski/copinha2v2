const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-black font-[Orbitron]">
          PRONTO PARA A BATALHA?
        </h2>
        <p className="text-black/80 max-w-2xl mx-auto mb-8 text-lg">
          As inscrições estão abertas. Forme sua dupla, prepare suas
          estratégias e mostre seu valor na Copinha 2v2.
        </p>

        <a
          href="https://wa.me/+5511959358507?text=Olá,%20tenho%20interesse%20em%20participar%20da%20Copinha%202v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="bg-black text-white cursor-pointer font-bold py-3 px-8 rounded-md 
             transform hover:scale-105 transition-all duration-300 
             border-2 border-black hover:border-white
             shadow-[0_0_15px_rgba(0,0,0,0.3)]"
          >
            INSCREVA-SE AGORA
          </button>
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
