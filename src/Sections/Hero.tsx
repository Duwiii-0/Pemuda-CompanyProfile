const Hero = () => {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      >
        <img src="/photos/logo.png" className="w-90 h-90" />
        {/* konten */}
        <div className="-skew-x-6 font-anton text-[#C1121F] pl-140 pb-40 relative flex items-end justify-start h-full text-8xl uppercase">
          Pemuda berprestasi
        </div>
      </div>
    </>
  );
};

export default Hero;
