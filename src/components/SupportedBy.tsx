const SupportedBy = () => {
  return (
    <section className="py-24 bg-background overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Supported By
          </h2>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative overflow-hidden bg-muted/30 rounded-xl py-8">

          {/* Fade Left */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />

          {/* Fade Right */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Logos */}
          <div className="flex animate-scroll whitespace-nowrap
            {/* Academic Partner */}
    <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
      Academic Partner
    </p>
    <img
      src="/bits-logo.png"
      alt="BITS Visakhapatnam"
      className="h-24 mx-auto object-contain"
    />
    <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
BITS Visakhapatnam
    </p>
  </div>
</section>
            <img src="/sponsor1.png" className="h-24 mx-16 opacity-80 hover:opacity-100 transition duration-300" />
            <img src="/sponsor2.png" className="h-24 mx-16 opacity-80 hover:opacity-100 transition duration-300" />
            <img src="/sponsor3.png" className="h-24 mx-16 opacity-80 hover:opacity-100 transition duration-300" />
             <img src="/sponsor4.png" className="h-24 mx-16 opacity-80 hover:opacity-100 transition duration-300" />
             <img src="/sponsor5.png" className="h-24 mx-16 opacity-80 hover:opacity-100 transition duration-300" />
             <img src="/sponsor6.png" className="h-24 mx-16 opacity-80 hover:opacity-100 transition duration-300" />


            {/* Duplicate for seamless scroll */}
   {/* Academic Partner */}
    <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
      Academic Partner
    </p>
    <img
      src="/bits-logo.png"
      alt="BITS Visakhapatnam"
      className="h-24 mx-auto object-contain"
    />
    <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
BITS Visakhapatnam
    </p>
  </div>
</section>
            <img src="/sponsor1.png" className="h-24 mx-16 opacity-80 hover:opacity-100 transition duration-300" />
            <img src="/sponsor2.png" className="h-24 mx-16 opacity-80 hover:opacity-100 transition duration-300" />
            <img src="/sponsor3.png" className="h-24 mx-16 opacity-80 hover:opacity-100 transition duration-300" />
             <img src="/sponsor4.png" className="h-24 mx-16 opacity-80 hover:opacity-100 transition duration-300" />
             <img src="/sponsor5.png" className="h-24 mx-16 opacity-80 hover:opacity-100 transition duration-300" />
             <img src="/sponsor6.png" className="h-24 mx-16 opacity-80 hover:opacity-100 transition duration-300" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SupportedBy;
