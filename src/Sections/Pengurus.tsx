// Pengurus.tsx
const Pengurus = () => {
  const pengurusData = [
    {
      name: "Charly Junicef Pratama",
      role: "Pendiri Yayasan Pemuda Berprestasi",
      photo: "/photos/biru.png",
      rotation: -2,
    },
    {
      name: "Emilia Nur Hayani",
      role: "Ketua Yayasan Pemuda Berprestasi",
      photo: "/photos/kuning.png",
      rotation: 2,
    },
    {
      name: "Lita haryana sari",
      role: "Sekertaris Yayasan Pemuda Berprestasi",
      photo: "/photos/pink.png",
      rotation: -1,
    },
    {
      name: "Rounnisa Aminy",
      role: "Bendahara Yayasan Pemuda Berprestasi",
      photo: "/photos/putih.png",
      rotation: -1,
    },
  ]


  return (
    <section id="pengurus" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-transparent to-white/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-20 sm:mb-24 lg:mb-28">
          <h2 className="font-anton text-5xl sm:text-6xl lg:text-7xl text-[#C1121F] -skew-x-3 uppercase mb-8">
            Susunan Pengurus
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C1121F] to-[#97121A] mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Kepemimpinan berpengalaman yang memadukan passion olahraga dengan visi jangka panjang 
            pengembangan taekwondo Indonesia
          </p>
        </div>

        {/* Kata Pengantar Pendiri */}
        <div className="relative mb-24 sm:mb-28">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C1121F]/5 via-transparent to-[#97121A]/5 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/60">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              
              {/* Foto Pendiri */}
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#C1121F] to-[#97121A] rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-8 border-white/80">
                    <img 
                      src="/photos/biru.png" 
                      alt="Ahmad Suryadi - Pendiri Yayasan"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Kata Pengantar */}
              <div className="lg:col-span-3 text-center lg:text-left">
                <div className="mb-6">
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#97121A] mb-3">
                    Visi Pendiri
                  </h3>
                  <h4 className="text-xl sm:text-2xl text-gray-600 font-medium">
                    Ahmad Suryadi, Dan VII
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Pendiri Yayasan Restasi Banyuasin</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-4 -top-2 text-6xl text-[#C1121F]/20 font-serif">"</div>
                  <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed pl-8 pr-4 italic font-light">
                    Taekwondo mengajarkan lebih dari sekadar teknik bertarung. Sejak mendirikan yayasan ini pada 2009, 
                    kami berkomitmen menciptakan wadah pembentukan karakter generasi muda. Setiap atlet yang kami bina 
                    tidak hanya dilatih untuk meraih medali, tetapi untuk menjadi individu yang berintegritas, 
                    disiplin, dan pantang menyerah dalam menghadapi tantangan hidup.
                  </blockquote>
                  <div className="absolute -right-4 -bottom-2 text-6xl text-[#C1121F]/20 font-serif">"</div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-center sm:text-right">
                    <div className="text-[#97121A] font-bold text-lg">Ahmad Suryadi</div>
                    <div className="text-sm text-gray-500">Sabuk Hitam Dan VII</div>
                  </div>
                  <div className="text-center sm:text-left mt-4 sm:mt-0">
                    <div className="text-2xl font-bold text-[#C1121F]">25+</div>
                    <div className="text-sm text-gray-600">Tahun Pengabdian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pengurus Cards */}
        <div className="space-y-16 sm:space-y-20">
          {pengurusData.map((pengurus, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                pengurus.alignment === 'right' ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              
              {/* Content Card */}
              <div className={`${pengurus.alignment === 'right' ? 'lg:col-start-2' : ''}`}>
                <div className="group relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl blur-2xl group-hover:from-white/60 group-hover:to-white/20 transition-all duration-500"></div>
                  <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/40 group-hover:border-white/60 transition-all duration-500">
                    
                    <div className="mb-6">
                      <h3 className="text-3xl sm:text-4xl font-bold text-[#C1121F] mb-3 leading-tight">
                        {pengurus.nama}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="bg-gradient-to-r from-[#C1121F] to-[#97121A] text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {pengurus.jabatan}
                        </span>
                        <span className="bg-white/70 text-[#97121A] px-4 py-2 rounded-full text-sm font-medium border border-white/40">
                          {pengurus.prestasi}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6 font-light">
                      {pengurus.deskripsi}
                    </p>
                    
                    <div className="w-20 h-1.5 bg-gradient-to-r from-[#C1121F] to-[#97121A] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Image Container */}
              <div className={`flex justify-center ${pengurus.alignment === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#C1121F]/20 via-transparent to-[#97121A]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/30 to-transparent rounded-2xl p-6 sm:p-8 shadow-xl">
                    <img 
                      src={pengurus.image} 
                      alt={`${pengurus.nama} - ${pengurus.jabatan}`}
                      className="w-72 h-96 sm:w-80 sm:h-[28rem] object-cover rounded-xl group-hover:scale-105 transition-all duration-700 shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-24 sm:mt-28">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C1121F] to-[#97121A] rounded-3xl blur-2xl opacity-10"></div>
            <div className="relative bg-gradient-to-r from-[#C1121F] to-[#97121A] rounded-2xl p-12 sm:p-16 text-white text-center shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Komitmen Bersama Membangun Prestasi
              </h3>
              <p className="text-xl sm:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed font-light">
                Dengan pengalaman gabungan lebih dari 60 tahun di dunia taekwondo, tim pengurus 
                berkomitmen penuh mengantarkan atlet Indonesia ke podium tertinggi kejuaraan dunia
              </p>
              <div className="mt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm opacity-80">Atlet Dibina</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-sm opacity-80">Medali Diraih</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">15</div>
                  <div className="text-sm opacity-80">Tahun Dedikasi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pengurus;