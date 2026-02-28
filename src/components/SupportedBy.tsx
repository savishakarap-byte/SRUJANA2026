import { useEffect, useRef, useState } from "react";

const SupportedBy = () => {
  const sponsorRef = useRef(null);
  const academicRef = useRef(null);
  const [activeLabel, setActiveLabel] = useState("Supported By");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === academicRef.current) {
              setActiveLabel("Academic Partner");
            } else {
              setActiveLabel("Supported By");
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    if (sponsorRef.current) observer.observe(sponsorRef.current);
    if (academicRef.current) observer.observe(academicRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 md:px-6">

        {/* Dynamic Top Label */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest transition-all duration-500">
            {activeLabel}
          </h2>
        </div>

        {/* Scroll Container */}
        <div className="relative overflow-hidden">

          <div className="flex items-center animate-scroll whitespace-nowrap">

            {/* Sponsor Block */}
            <div ref={sponsorRef} className="flex items-center mx-32 space-x-8">
              <img src="/sponsor1.png" className="h-20" />
              <img src="/sponsor2.png" className="h-20" />
              <img src="/sponsor3.png" className="h-20" />
              <img src="/sponsor4.png" className="h-20" />
              <img src="/sponsor5.png" className="h-20" />
              <img src="/sponsor6.png" className="h-20" />
            </div>

            {/* Academic Block */}
            <div ref={academicRef} className="flex items-center mx-32">
              <img src="/bits-logo.png" className="h-20" />
            </div>

            {/* Duplicate */}
            <div className="flex items-center mx-32 space-x-8">
              <img src="/sponsor1.png" className="h-20" />
              <img src="/sponsor2.png" className="h-20" />
              <img src="/sponsor3.png" className="h-20" />
              <img src="/sponsor4.png" className="h-20" />
              <img src="/sponsor5.png" className="h-20" />
              <img src="/sponsor6.png" className="h-20" />
            </div>

            <div className="flex items-center mx-32">
              <img src="/bits-logo.png" className="h-20" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBy;
