import Footer from "@/components/Footer";
import { Download } from "lucide-react";

const POSTER_URL = "/posters/SRUJANA2026.jpg";

const Poster = () => {
  return (
    <div className="min-h-screen pt-24 pb-0">
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
              Event Poster
            </p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              SRUJANA 2026 Poster
            </h1>
          </div>

          <div className="glass-card p-6 md:p-10">

            {/* Poster Preview */}
            <img
              src={POSTER_URL}
              alt="SRUJANA 2026 Poster"
              className="w-full rounded-lg border mb-6"
            />

            {/* Download Button */}
            <a
              href={POSTER_URL}
              download
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold glow-button text-base"
            >
              <Download size={18} />
              Download Poster
            </a>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Poster;