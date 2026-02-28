const SupportedBy = () => {
  return (
    <section className="py-24 overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 md:px-6">

        <div className="relative overflow-hidden rounded-xl py-8">

          {/* Fade edges (transparent style) */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-transparent to-transparent z-10 pointer-events-none" />

          <div className="flex items-center animate-scroll whitespace-nowrap">

            {/* FIRST LOOP */}
            <div className="flex items-center mx-16 space-x-6">
              <span className="text-sm font-bold uppercase tracking-widest">
                Supported By
              </span>
              <img src="/sponsor1.png" className="h-20 object-contain" />
              <img src="/sponsor2.png" className="h-20 object-contain" />
              <img src="/sponsor3.png" className="h-20 object-contain" />
              <img src="/sponsor4.png" className="h-20 object-contain" />
              <img src="/sponsor5.png" className="h-20 object-contain" />
              <img src="/sponsor6.png" className="h-20 object-contain" />
            </div>

            <div className="flex items-center mx-16 space-x-6">
              <span className="text-sm font-bold uppercase tracking-widest">
                Academic Partner
              </span>
              <img
                src="/bits-logo.png"
                alt="BITS Visakhapatnam"
                className="h-20 object-contain"
              />
            </div>

            {/* DUPLICATE */}
            <div className="flex items-center mx-16 space-x-6">
              <span className="text-sm font-bold uppercase tracking-widest">
                Supported By
              </span>
              <img src="/sponsor1.png" className="h-20 object-contain" />
              <img src="/sponsor2.png" className="h-20 object-contain" />
              <img src="/sponsor3.png" className="h-20 object-contain" />
              <img src="/sponsor4.png" className="h-20 object-contain" />
              <img src="/sponsor5.png" className="h-20 object-contain" />
              <img src="/sponsor6.png" className="h-20 object-contain" />
            </div>

            <div className="flex items-center mx-16 space-x-6">
              <span className="text-sm font-bold uppercase tracking-widest">
                Academic Partner
              </span>
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
