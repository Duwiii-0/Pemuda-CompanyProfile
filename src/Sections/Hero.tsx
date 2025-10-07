// Hero.tsx
interface HeroProps {
  onScrollToCompetitions: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToCompetitions }) => {
  return (
    <section id="hero" className="relative">
      <div className="relative w-full h-screen flex items-center overflow-hidden">
        {/* Background overlay untuk readability - TETAP z-10 tapi NON-INTERACTIVE */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/30 z-10 pointer-events-none"></div>
        
        {/* Main Content Container - z-20 untuk konten interaktif */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 pt-20 sm:pt-24 lg:pt-0 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Main Title */}
              <div>
                <h1 className="font-anton text-[#C1121F] -skew-x-3 uppercase leading-tight">
                  <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                  Membentuk Juara Taekwondo Indonesia
                  </span>
                </h1>
              </div>

              {/* Subtitle & Description */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#97121A]">
                  YAYASAN PRESTASI BANYUASIN
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-xl">
                  Yayasan yang berdedikasi untuk mengembangkan potensi pemuda melalui 
                  <span className="font-bold text-[#97121A]"> seni bela diri Taekwondo</span>. 
                  Kami menyelenggarakan kejuaraan tingkat nasional dan internasional.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button 
                  onClick={onScrollToCompetitions}
                  className="bg-[#C1121F] text-white px-6 py-3 rounded-xl font-bold text-sm sm:text-base hover:bg-[#97121A] transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:ring-opacity-50"
                >
                  Lihat Kejuaraan Kami
                </button>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-anton text-[#C1121F] mb-2">500+</div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-700">Atlet Binaan</div>
                </div>
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-anton text-[#C1121F] mb-2">50+</div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-700">Kejuaraan</div>
                </div>
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-anton text-[#C1121F] mb-2">15+</div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-700">Tahun Pengalaman</div>
                </div>
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-anton text-[#C1121F] mb-2">100+</div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-700">Medali Emas</div>
                </div>
              </div>

              {/* Decorative Taekwondo Element */}
              <div className="flex justify-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;