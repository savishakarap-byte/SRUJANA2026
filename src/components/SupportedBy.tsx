const SupportedBy = () => {
  return (
    <div className="overflow-hidden bg-white py-10">
      <h2 className="text-center text-2xl font-bold mb-6">
        Supported By
      </h2>

      <div className="flex animate-scroll whitespace-nowrap">
        <img src="/sponsor1.png" className="h-16 mx-10" />
        <img src="/sponsor2.png" className="h-16 mx-10" />
        <img src="/sponsor3.png" className="h-16 mx-10" />

        {/* duplicate for smooth scroll */}
        <img src="/sponsor1.png" className="h-16 mx-10" />
        <img src="/sponsor2.png" className="h-16 mx-10" />
        <img src="/sponsor3.png" className="h-16 mx-10" />
      </div>
    </div>
  );
};

export default SupportedBy;
