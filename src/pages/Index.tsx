import { Link } from "react-router-dom";
import HeroSlider from "@/components/HeroSlider";
import EventsSection from "@/components/EventsSection";
import HighlightsSection from "@/components/HighlightsSection";
import Footer from "@/components/Footer";
import useScrollReveal from "@/hooks/useScrollReveal";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import SupportedBy from "@/components/SupportedBy";
import { CalendarDays, MapPin } from "lucide-react";

const Index = () => {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      {/* ===== HERO SECTION ===== */}
<section className="relative h-screen overflow-hidden">

  {/* Background Slider */}
  <HeroSlider images={[hero1, hero2, hero3]} />

  {/* ===== SUPPORTED STRIP (Overlay, Transparent) ===== */}
  <div className="absolute top-0 left-0 w-full z-20 bg-transparent backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 py-3">
      <SupportedBy />
    </div>
  </div>

  {/* ===== HERO CONTENT ===== */}
  <div className="relative z-10 flex items-center justify-center h-full px-4">
    <div className="text-center max-w-3xl mx-auto mt-20">

      <p className="text-accent text-sm md:text-base font-semibold uppercase tracking-[0.3em] mb-4">
        Innovation → Impact → Nation
      </p>

      <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-extrabold mb-4 glow-text-orange text-foreground">
        SRUJANA <span className="gradient-text">2026</span>
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-muted-foreground text-sm md:text-base mb-8">
        <span className="flex items-center gap-1.5">
          <CalendarDays size={16} className="text-primary" />
          3rd – 5th April 2026
        </span>
        <span className="hidden sm:block text-border">|</span>
        <span className="flex items-center gap-1.5">
          <MapPin size={16} className="text-primary" />
          BITS, Visakhapatnam
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/register"
          className="px-8 py-3 rounded-lg font-semibold bg-primary text-primary-foreground glow-button text-base"
        >
          Register Now
        </Link>

        <a
          href="#about"
          className="px-8 py-3 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors duration-200 text-base"
        >
          Learn More
        </a>
      </div>

    </div>
  </div>

</section>
       

      {/* About */}
      <section id="about" className="section-fade-in container mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">About the Fest</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">What is SRUJANA?</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            SRUJANA 2026 is a state-level innovation fest hosted at Baba Institute of Technology & Sciences (BITS), Visakhapatnam, organized by Savishkar Andhra Pradesh.
Driven by the core motto “From Innovation to Nation Building — Towards Viksit Bharat 2047”
SRUJANA 2026 brings together students, researchers, and young innovators from across Andhra Pradesh on a single platform to transform ideas into real-world impact.
The fest features:
⚙️ Working Model Exhibitions
💻 Hackathons
📄 Paper Presentations
🖼 Poster Presentations
🤝 Industry–Institute Interactions
SRUJANA is built to promote hands-on learning, practical problem solving, and collaborative innovation aligned with India’s vision for a developed nation by 2047.
Whether you build, code, research, or create —
SRUJANA is your stage to turn innovation into nation-building.
          </p>
        </div>
      </section>

    
      {/* Events */}
      <section className="container mx-auto px-4 md:px-6 pb-20 md:pb-28">
        <EventsSection />
      </section>

      {/* Highlights */}
      <section className="container mx-auto px-4 md:px-6 pb-20 md:pb-28">
        <HighlightsSection />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
