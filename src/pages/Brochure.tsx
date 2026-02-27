import Footer from "@/components/Footer";
import { Download, FileText } from "lucide-react";

const BROCHURE_URL = "/brochure/SRUJANA2026.pdf";

const Brochure = () => {
  return (
    <div className="min-h-screen pt-24 pb-0">
      <div className="container mx-auto px-4 md:px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              Event Brochure
            </p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              SRUJANA 2026 Brochure
            </h1>
          </div>

          <div className="glass-card p-6 md:p-10">

            {/* PDF Preview */}
            <iframe
              src={BROCHURE_URL}
              className="w-full aspect-[3/4] rounded-lg border mb-6"
            />

            {/* Download Button */}
            <a
              href={BROCHURE_URL}
              download
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold glow-button text-base"
            >
              <Download size={18} />
              Download Brochure
            </a>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brochure;