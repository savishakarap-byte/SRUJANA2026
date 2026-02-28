import { useEffect, useRef, useState } from "react";

const SupportedBy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sponsorRef = useRef<HTMLDivElement>(null);
  const academicRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<"sponsor" | "academic">("sponsor");

  useEffect(() => {
    let position = 0;
    let speed = 0.6;
    let animationFrame: number;

    const animate = () => {
      if (!containerRef.current) return;

      position -= speed;

      const totalWidth = containerRef.current.scrollWidth / 2;

      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }

      containerRef.current.style.transform = `translateX(${position}px)`;

      detectCenter();
      animationFrame = requestAnimationFrame(animate);
    };

    const detectCenter = () => {
      if (!containerRef.current) return;

      const parentRect =
        containerRef.current.parentElement?.getBoundingClientRect();

      const center = parentRect
        ? parentRect.left + parentRect.width / 2
        : window.innerWidth / 2;

      const sponsorRect = sponsorRef.current?.getBoundingClientRect();
      const academicRect = academicRef.current?.getBoundingClientRect();

      if (!sponsorRect || !academicRect) return;

      const sponsorCenter = sponsorRect.left + sponsorRect.width / 2;
      const academicCenter = academicRect.left + academicRect.width / 2;

      const sponsorDistance = Math.abs(center - sponsorCenter);
      const academicDistance = Math.abs(center - academicCenter);

      let newActive: "sponsor" | "academic";

      if (sponsorDistance < academicDistance) {
        newActive = "sponsor";
        speed = sponsorDistance < 150 ? 0.3 : 0.6;
      } else {
        newActive = "academic";
        speed = academicDistance < 150 ? 0.3 : 0.6;
      }

      setActive((prev) => (prev !== newActive ? newActive : prev));
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-24 overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 md:px-6">

        {/* ===== LABEL WITH FADE + UNDERLINE ===== */}
        <div className="text-center mb-10 relative h-10">

          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              active === "sponsor" ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-lg font-bold uppercase tracking-widest">
              Supported By
              <span className="block h-[2px] bg-foreground mt-1 animate-underline" />
            </span>
          </div>

          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              active === "academic" ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-lg font-bold uppercase tracking-widest">
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
              <img src="/sponsor1.png" className="h-20 object-contain" />
              <img src="/sponsor2.png" className="h-20 object-contain" />
              <img src="/sponsor3.png" className="h-20 object-contain" />
              <img src="/sponsor4.png" className="h-20 object-contain" />
              <img src="/sponsor5.png" className="h-20 object-contain" />
              <img src="/sponsor6.png" className="h-20 object-contain" />
            </div>

            {/* Academic */}
            <div
              ref={academicRef}
              className={`flex items-center mx-40 transition-transform duration-500 ${
                active === "academic" ? "scale-110" : "scale-100"
              }`}
            >
              <img
                src="/bits-logo.png"
                alt="BITS Visakhapatnam"
                className="h-20 object-contain"
              />
            </div>

            {/* Duplicate for seamless scroll */}
            <div className="flex items-center mx-40 space-x-8">
              <img src="/sponsor1.png" className="h-20 object-contain" />
              <img src="/sponsor2.png" className="h-20 object-contain" />
              <img src="/sponsor3.png" className="h-20 object-contain" />
              <img src="/sponsor4.png" className="h-20 object-contain" />
              <img src="/sponsor5.png" className="h-20 object-contain" />
              <img src="/sponsor6.png" className="h-20 object-contain" />
            </div>

            <div className="flex items-center mx-40">
              <img
                src="/bits-logo.png"
                alt="BITS Visakhapatnam"
                className="h-20 object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBy;
