import { useEffect, useRef, useState } from "react";

const ITEMS = [
  { type: "sponsor", label: "Supported By", src: "/sponsor1.png" },
  { type: "sponsor", label: "Supported By", src: "/sponsor2.png" },
  { type: "sponsor", label: "Supported By", src: "/sponsor3.png" },
  { type: "sponsor", label: "Supported By", src: "/sponsor4.png" },
  { type: "sponsor", label: "Supported By", src: "/sponsor5.png" },
  { type: "sponsor", label: "Supported By", src: "/sponsor6.png" },
  { type: "academic", label: "Academic Partner", src: "/bits-logo.png" },
];

const SupportedBy = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(280);

  // Responsive width detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemWidth(180); // mobile
      } else if (window.innerWidth < 1024) {
        setItemWidth(220); // tablet
      } else {
        setItemWidth(280); // desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation
  useEffect(() => {
    let animationFrame: number;
    let current = 0;

    const animate = () => {
      if (!trackRef.current) return;

      current += 0.004; // speed
      const total = ITEMS.length;

      if (current >= total) current = 0;

      const index = Math.floor(current);
      setActiveIndex(index);

      const offset = current * itemWidth;
      trackRef.current.style.transform = `translateX(${-offset}px)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [itemWidth]);

  return (
    <section className="py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* ===== Dynamic Label ===== */}
        <div className="text-center mb-8 md:mb-12 relative h-8 md:h-10">
          <span className="text-base md:text-lg font-bold uppercase tracking-widest transition-all duration-500">
            {ITEMS[activeIndex].label}
            <span className="block h-[2px] bg-foreground mt-2 animate-underline" />
          </span>
        </div>

        {/* ===== Logo Track ===== */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center transition-transform duration-500 ease-out"
            style={{ width: `${ITEMS.length * itemWidth}px` }}
          >
            {ITEMS.map((item, i) => (
              <div
                key={i}
                style={{ width: `${itemWidth}px` }}
                className={`flex justify-center transition-all duration-500 ${
                  activeIndex === i
                    ? "scale-110 opacity-100"
                    : "scale-90 opacity-40"
                }`}
              >
                <img
                  src={item.src}
                  className="h-14 sm:h-16 md:h-20 object-contain"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SupportedBy;
