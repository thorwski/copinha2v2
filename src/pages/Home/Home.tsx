import HeroSection from "./HomeSections/HeroSection";
import GallerySection from "./HomeSections/GallerySection";
import TournamentSection from "./HomeSections/TournamentSection";
import HallOfFameSection from "./HomeSections/HallOfFameSection";
import BracketSection from "./HomeSections/BracketSection";
import CtaSection from "./HomeSections/CtaSection";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <main className="min-h-screen bg-black text-white font-barlow">
      {/* Hero Section with R6S Background */}
      <HeroSection />

      {/* About Tournament Section */}
      <TournamentSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Hall of Fame Section */}
      <HallOfFameSection />

      {/* Tournament Brackets Section - Double Elimination */}
      <BracketSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
