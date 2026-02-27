import React from "react";

const logos = [
  "/sponsor1.png",
  "/sponsor2.png",
  "/sponsor3.png",
  "/sponsor4.png",
  "/sponsor5.png",
];

const SupportedBy = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Supported By
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[200px] mx-8"
              >
                <img
                  src={logo}
                  alt="Sponsor"
                  className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
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
