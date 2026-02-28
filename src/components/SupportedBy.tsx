import { useEffect, useRef, useState } from "react";

const ITEMS = [
  { label: "Supported By", src: "/sponsor1.png" },
  { label: "Supported By", src: "/sponsor2.png" },
  { label: "Supported By", src: "/sponsor3.png" },
  { label: "Supported By", src: "/sponsor4.png" },
  { label: "Supported By", src: "/sponsor5.png" },
  { label: "Supported By", src: "/sponsor6.png" },
  { label: "Academic Partner", src: "/bits-logo.png" },
];

const SupportedBy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const itemWidthRef = useRef(280);

  const currentRef = useRef(0);
  const pauseRef = useRef(false);
  const pauseTimer = useRef<NodeJS.Timeout | null>(null);

  /* -------- Responsive Width -------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) itemWidthRef.current = 200;
      else if (window.innerWidth < 1024) itemWidthRef.current = 240;
      else itemWidthRef.current = 280;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* -------- Animation Loop -------- */
  useEffect(() => {
    let frame: number;

    const animate = () => {
      if (!trackRef.current || !containerRef.current) return;

      if (!pauseRef.current) {
        currentRef.current += 0.006; // smooth speed

        if (currentRef.current >= ITEMS.length) {
          currentRef.current = 0;
        }
      }

      const index = Math.round(currentRef.current) % ITEMS.length;

      if (index !== activeIndex) {
        setActiveIndex(index);
      }

      // Pause exactly when aligned
      if (
        !pauseRef.current &&
        Math.abs(currentRef.current - index) < 0.002
      ) {
        pauseRef.current = true;

        pauseTimer.current = setTimeout(() => {
          pauseRef.current = false;
        }, 1200);
      }

      const containerWidth = containerRef.current.offsetWidth;
      const centerOffset =
        containerWidth / 2 - itemWidthRef.current / 2;

      const offset =
        currentRef.current * itemWidthRef.current - centerOffset;

      trackRef.current.style.transform = `translateX(${-offset}px)`;

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
    };
  }, [activeIndex]);

  return (
    <section className="py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* -------- Dynamic Label -------- */}
        <div className="text-center mb-10 h-10">
          <span className="text-lg font-bold uppercase tracking-widest">
            {ITEMS[activeIndex].label}
            <span className="block h-[2px] bg-foreground mt-2 animate-underline" />
          </span>
        </div>

        {/* -------- Carousel -------- */}
        <div
          ref={containerRef}
          className="relative overflow-hidden perspective-1000"
        >
          <div
            ref={trackRef}
            className="flex items-center transition-transform duration-700 ease-out"
            style={{ width: `${ITEMS.length * 300}px` }}
          >
            {ITEMS.map((item, i) => {
              const isActive = i === activeIndex;

              return (
                <div
                  key={i}
                  style={{ width: `${itemWidthRef.current}px` }}
                  className="flex justify-center items-center"
                >
                  <div
                    className={`relative transition-all duration-700 ${
                      isActive
                        ? "scale-110 z-20"
                        : "scale-90 opacity-40"
                    }`}
                    style={{
                      transform: isActive
                        ? "rotateY(0deg)"
                        : i < activeIndex
                        ? "rotateY(20deg)"
                        : "rotateY(-20deg)",
                    }}
                  >
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-white/30 blur-2xl scale-150 -z-10" />
                    )}

                    <img
                      src={item.src}
                      className="h-16 md:h-20 object-contain"
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBy;
