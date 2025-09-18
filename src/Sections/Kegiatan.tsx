// Kegiatan.tsx
import LingkupCard from "../Components/LingkupCard"; 

const Kegiatan = () => {
  return (
    <section id="kegiatan" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white/30 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#C1121F] -skew-x-3 uppercase mb-6">
            <span className="block">Program</span>
            <span className="block ml-8 sm:ml-12 lg:ml-16">Kegiatan</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C1121F] to-[#97121A] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Berbagai program komprehensif yang menggabungkan pelatihan taekwondo, 
            pengembangan karakter, dan kontribusi sosial untuk membentuk generasi yang berprestasi
          </p>
        </div>

        {/* Cards Section */}
        <LingkupCard />

        {/* Additional Info */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/40">
              <h3 className="text-xl font-bold text-[#C1121F] mb-2">Program Rutin</h3>
              <p className="text-gray-700 text-sm">Latihan terstruktur 5x seminggu dengan kurikulum bertaraf internasional</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/40">
              <h3 className="text-xl font-bold text-[#C1121F] mb-2">Kejuaraan</h3>
              <p className="text-gray-700 text-sm">Menyelenggarakan dan mengikuti 20+ turnamen tingkat nasional setiap tahun</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/40">
              <h3 className="text-xl font-bold text-[#C1121F] mb-2">Pembinaan</h3>
              <p className="text-gray-700 text-sm">Bimbingan holistik dari atlet pemula hingga tingkat profesional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kegiatan;