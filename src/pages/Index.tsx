import { Link } from "react-router-dom";
import HeroSlider from "@/components/HeroSlider";
import ThemesSection from "../components/ThemesSection";
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
  <div className="absolute top-0 left-0 w-full z-20">
      <SupportedBy />
    </div>

  {/* ===== HERO CONTENT ===== */}
  <div className="relative z-10 flex items-center justify-center h-full px-4">
    <div className="text-center max-w-3xl mx-auto mt-16">

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
          SVPEC, Visakhapatnam
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
            SRUJANA 2026 is a State-Level Innovation and Technical Fest hosted at Sanketika Vidya Parishad Engineering College (SVPEC), Visakhapatnam.

Guided by the vision “From Innovation to Nation Building — Towards Viksit Bharat 2047,” SRUJANA 2026 brings together students, researchers, and young innovators from across Andhra Pradesh on a common platform to showcase ideas, exchange knowledge, and develop impactful technological solutions.

The event is organized by the Technical Cell Andhra Pradesh, Savishkar Andhra Pradesh, and Akhil Bharatiya Vidyarthi Parishad (ABVP), in association with Vidyarthi Vikas Samithi (VVS) and Sanketika Vidya Parishad Engineering College (SVPEC).

The program is supported by All India Council for Technical Education (AICTE), Andhra Pradesh State Council of Higher Education (APSCHE), Andhra Pradesh Micro, Small and Medium Enterprises Development Corporation (APMSME), Andhra Pradesh Innovation Society (APIS), Indian Society for Technical Education (ISTE), and Right to Information Foundation of India (RTIH).

SRUJANA 2026 promotes hands-on learning, interdisciplinary collaboration, and innovation-driven problem solving, encouraging participants to address real-world challenges and contribute to India’s journey toward a Viksit Bharat by 2047.

The fest features a variety of technical events, including:

⚙️ Working Model Exhibition

💻 Hackathon

📄 Paper Presentation

🖼 Poster Presentation

🤝 Industry–Institute Interaction

*Note: The domains for the Working Model Exhibition, Paper Presentation, and Poster Presentation are the same as those listed in the *Theme Section below. Please scroll down to view the complete list of domains.

Through these activities, SRUJANA 2026 aims to cultivate innovation, research culture, and practical implementation, enabling young minds to transform ideas into solutions that contribute to nation building and technological advancement.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="container mx-auto px-4 md:px-6 pb-20 md:pb-28">
        <EventsSection />
      </section>
{/* ThemeSection */}
      <section className="container mx-auto px-4 md:px-6 pb-20 md:pb-28">
<ThemesSection />
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
