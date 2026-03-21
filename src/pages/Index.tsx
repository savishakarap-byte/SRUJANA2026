import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);
 return (
  <>
    {showPopup && (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full text-center p-8 relative">

          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>

        <h2 className="text-2xl font-bold text-red-600 mb-4">
🚨 SRUJANA 2026 Update
</h2>

          <p className="text-lg text-gray-700">
            Prize Pool Revised to
          </p>

         <p className="text-5xl font-extrabold text-orange-600 mt-2">
₹2LAKHS
</p>
<p className="text-lg font-extrabold text-orange-600 mt-2">
& Participants of any event automatically get access to the Industry–Institute Interaction, while others must register separately.</p>
          <p className="text-sm text-gray-500 mt-3">
            Participate in SRUJANA 2026 and win exciting prizes!
          </p>

        </div>
      </div>
    )}


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
      <section id="note" className="section-fade-in container mx-auto px-4 py-8">
  <div className="max-w-xl mx-auto text-center">

    <p className="text-red-600 text-base font-medium">
      <strong>
        Note: Domains for the Working Model Exhibition, Paper Presentation, and Poster Presentation 
        are the same as those listed in the Theme Section below.
      </strong>
    </p>

  </div>
</section>
     {/* About */}
<section id="about" className="section-fade-in container mx-auto px-4 md:px-6 py-20 md:py-28">
  <div className="max-w-4xl mx-auto text-center">

    <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
About SRUJANA 2026
    </p>

    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
      What is SRUJANA?
    </h2>

    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
      <strong>SRUJANA 2026</strong> is a State-Level Innovation and Technical Fest hosted at 
      Sanketika Vidya Parishad Engineering College (SVPEC), Visakhapatnam.
      Guided by the vision <em>“From Innovation to Nation Building — Towards Viksit Bharat 2047,”</em> 
      the fest brings together students, researchers, and young innovators from across Andhra Pradesh 
      to showcase ideas, exchange knowledge, and build solutions for real-world challenges.
    </p>

    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
      The event is organized by <strong>Technical Cell Andhra Pradesh, Savishkar Andhra Pradesh, 
      and ABVP</strong>, in association with <strong>VVS and SVPEC</strong>, with support from 
      AICTE, APSCHE, APMSME, APIS, ISTE, and RTIH.
    </p>

    {/* Events */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base text-foreground font-medium">
      <div className="bg-secondary p-4 rounded-lg">⚙️ Working Model Exhibition</div>
      <div className="bg-secondary p-4 rounded-lg">💻 Hackathon</div>
      <div className="bg-secondary p-4 rounded-lg">📄 Paper Presentation</div>
      <div className="bg-secondary p-4 rounded-lg">🖼 Poster Presentation</div>
      <div className="bg-secondary p-4 rounded-lg col-span-2 md:col-span-1">
        🤝 Industry–Institute Interaction
      </div>
    </div>

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
  </>
);
};

export default Index;
