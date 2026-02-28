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
  const [itemWidth, setItemWidth] = useState(280);
  const [isPaused, setIsPaused] = useState(false);

  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);

  /* ---------------- Responsive Width ---------------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemWidth(200);
      else if (window.innerWidth < 1024) setItemWidth(240);
      else setItemWidth(280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ---------------- Auto Scroll With Pause ---------------- */
  useEffect(() => {
    let animationFrame: number;
    let current = activeIndex;

    const animate = () => {
      if (!trackRef.current || !containerRef.current) return;

      if (!isPaused) {
        current += 0.01; // smooth speed

        if (current >= ITEMS.length) current = 0;

        const index = Math.round(current);
        setActiveIndex(index % ITEMS.length);

        const containerWidth = containerRef.current.offsetWidth;
        const centerOffset = containerWidth / 2 - itemWidth / 2;
        const offset = current * itemWidth - centerOffset;

        trackRef.current.style.transform = `translateX(${-offset}px)`;

        // Pause when near center snap
        if (Math.abs(current - index) < 0.01) {
          setIsPaused(true);
          pauseTimeout.current = setTimeout(() => {
            setIsPaused(false);
          }, 1200);
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrame);
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    };
  }, [itemWidth, isPaused]);

  /* ---------------- Swipe Support ---------------- */
  useEffect(() => {
    let startX = 0;
    let isDragging = false;

    const onStart = (e: TouchEvent | MouseEvent) => {
      isDragging = true;
      startX = "touches" in e ? e.touches[0].clientX : e.clientX;
    };

    const onMove = (e: TouchEvent | MouseEvent) => {
      if (!isDragging) return;
      const currentX =
        "touches" in e ? e.touches[0].clientX : e.clientX;
      const diff = startX - currentX;

      if (Math.abs(diff) > 50) {
        setActiveIndex((prev) =>
          diff > 0
            ? (prev + 1) % ITEMS.length
            : (prev - 1 + ITEMS.length) % ITEMS.length
        );
        isDragging = false;
      }
    };

    const onEnd = () => {
      isDragging = false;
    };

    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousedown", onStart);
    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseup", onEnd);
    container.addEventListener("touchstart", onStart);
    container.addEventListener("touchmove", onMove);
    container.addEventListener("touchend", onEnd);

    return () => {
      container.removeEventListener("mousedown", onStart);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseup", onEnd);
      container.removeEventListener("touchstart", onStart);
      container.removeEventListener("touchmove", onMove);
      container.removeEventListener("touchend", onEnd);
    };
  }, []);

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
            style={{ width: `${ITEMS.length * itemWidth}px` }}
          >
            {ITEMS.map((item, i) => {
              const isActive = i === activeIndex;

              return (
                <div
                  key={i}
                  style={{ width: `${itemWidth}px` }}
                  className="flex justify-center items-center transition-all duration-700"
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
