import { useEffect, useRef, useState } from "react";

const SupportedBy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sponsorRef = useRef<HTMLDivElement>(null);
  const academicRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<"sponsor" | "academic">("sponsor");

  useEffect(() => {
    let position = 0;
    let speed = 0.6;

    const animate = () => {
      if (!containerRef.current) return;

      position -= speed;

      // Loop
      if (Math.abs(position) >= containerRef.current.scrollWidth / 2) {
        position = 0;
      }

      containerRef.current.style.transform = `translateX(${position}px)`;

      detectCenter();
      requestAnimationFrame(animate);
    };

    const detectCenter = () => {
      if (!containerRef.current) return;

      const center = window.innerWidth / 2;

      [sponsorRef, academicRef].forEach((ref) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const elementCenter = rect.left + rect.width / 2;

        if (Math.abs(center - elementCenter) < 120) {
          if (ref === sponsorRef) {
            setActive("sponsor");
            speed = 0.3; // slow near center
          } else {
            setActive("academic");
            speed = 0.3;
          }
        } else {
          speed = 0.6;
        }
      });
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="py-24 overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 md:px-6">

        {/* ===== DYNAMIC LABEL ===== */}
        <div className="text-center mb-10 relative h-8">
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              active === "sponsor" ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-lg font-bold uppercase tracking-widest relative">
              Supported By
              <span className="block h-[2px] bg-foreground mt-1 animate-underline" />
            </span>
          </div>

          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              active === "academic" ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-lg font-bold uppercase tracking-widest relative">
              Academic Partner
              <span className="block h-[2px] bg-foreground mt-1 animate-underline" />
            </span>
          </div>
        </div>

        {/* ===== SCROLL STRIP ===== */}
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className="flex items-center whitespace-nowrap will-change-transform"
          >

            {/* Sponsors */}
            <div
              ref={sponsorRef}
              className={`flex items-center mx-40 space-x-8 transition-transform duration-500 ${
                active === "sponsor" ? "scale-110" : "scale-100"
              }`}
            >
              <img src="/sponsor1.png" className="h-20" />
              <img src="/sponsor2.png" className="h-20" />
              <img src="/sponsor3.png" className="h-20" />
              <img src="/sponsor4.png" className="h-20" />
              <img src="/sponsor5.png" className="h-20" />
              <img src="/sponsor6.png" className="h-20" />
            </div>

            {/* Academic */}
            <div
              ref={academicRef}
              className={`flex items-center mx-40 transition-transform duration-500 ${
                active === "academic" ? "scale-110" : "scale-100"
              }`}
            >
              <img src="/bits-logo.png" className="h-20" />
            </div>

            {/* Duplicate for seamless */}
            <div className="flex items-center mx-40 space-x-8">
              <img src="/sponsor1.png" className="h-20" />
              <img src="/sponsor2.png" className="h-20" />
              <img src="/sponsor3.png" className="h-20" />
              <img src="/sponsor4.png" className="h-20" />
              <img src="/sponsor5.png" className="h-20" />
              <img src="/sponsor6.png" className="h-20" />
            </div>

            <div className="flex items-center mx-40">
              <img src="/bits-logo.png" className="h-20" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBy;
