const Hero = () => {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/photos/background.png')" }}
      >
        {/* gambar dekorasi */}
        <img
          src="/photos/hero.png"
          className="absolute left-0 top-0 h-full -scale-x-100"
          alt="hero"
        />

        {/* gradient bawah */}
        <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-white to-transparent" />

        {/* konten */}
        <div className="-skew-x-6 font-anton text-white pl-140 pb-40 relative flex items-end justify-start h-full text-8xl">
          Mencetak atlet berprestasi, membangun persahabatan, dan mendidik karakter.
        </div>
      </div>
    </>
  );
};

export default Hero;
