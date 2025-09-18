const Hero = () => {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center overflow-hidden flex flex-col pt-24 items-center"
      >
        <div className="w-full h-1/3 bg-red flex items-center justify-center text-7xl">Pemuda Berprestasi</div>
        <div className="w-full h-2/3 flex items-center">
          <div className="w-1/3 h-full text-2xl flex flex-col items-center justify-start pt-40 pl-20 gap-12">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc in scelerisque iaculis, elit ligula aliquet massa, vel luctus lacus lorem at lacus.
            </h1>
            <div className="w-full flex justify-start pl-6">
              <button>Contact Us</button>
            </div>
          </div>
          <div className="w-1/3 h-full flex items-center justify-center ">
            <img src="/photos/logo.png" className="w-140 h-140" />
          </div>
          <div className="w-1/3 h-full text-2xl flex flex-col items-end justify-end text-end pb-30 pr-20 gap-12">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc in scelerisque iaculis, elit ligula aliquet massa, vel luctus lacus lorem at lacus.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
