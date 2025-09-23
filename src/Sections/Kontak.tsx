// Kontak.tsx
const Kontak = () => {
  return (
    <section id="kontak" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-transparent to-white/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-20 sm:mb-24 lg:mb-28">
          <h2 className="font-anton text-5xl sm:text-6xl lg:text-7xl text-[#C1121F] -skew-x-3 uppercase mb-8">
            Kontak Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C1121F] to-[#97121A] mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Hubungi kami untuk informasi lebih lanjut tentang program pelatihan dan 
            pendaftaran atlet taekwondo
          </p>
        </div>

        {/* Contact Panel */}
        <div className="relative mb-24 sm:mb-28">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C1121F]/5 via-transparent to-[#97121A]/5 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/60">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Info Kontak */}
              <div className="space-y-8">
                <div className="mb-8">
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#97121A] mb-3">
                    Hubungi Kami
                  </h3>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-[#C1121F] to-[#97121A] rounded-full"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="group relative">
                    <div className="absolute -inset-3 bg-gradient-to-br from-white/40 to-white/10 rounded-2xl blur-xl group-hover:from-white/60 group-hover:to-white/20 transition-all duration-300"></div>
                    <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/40 group-hover:border-white/60 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#C1121F] to-[#97121A] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white text-xl">📍</span>
                        </div>
                        <div>
                          <p className="font-semibold text-[#97121A] text-lg">Alamat</p>
                          <p className="text-gray-700">Jl. Lingkar RT/RW 021/005, Kelurahan Kedondong Raye, Kecamatan Banyuasin III, Kabupaten Banyuasin, Provinsi Sumatera Selatan.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-3 bg-gradient-to-br from-white/40 to-white/10 rounded-2xl blur-xl group-hover:from-white/60 group-hover:to-white/20 transition-all duration-300"></div>
                    <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/40 group-hover:border-white/60 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#C1121F] to-[#97121A] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white text-xl">📞</span>
                        </div>
                        <div>
                          <p className="font-semibold text-[#97121A] text-lg">Telepon</p>
                          <p className="text-gray-700">+62 821-7782-2224</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-3 bg-gradient-to-br from-white/40 to-white/10 rounded-2xl blur-xl group-hover:from-white/60 group-hover:to-white/20 transition-all duration-300"></div>
                    <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/40 group-hover:border-white/60 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#C1121F] to-[#97121A] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white text-xl">✉️</span>
                        </div>
                        <div>
                          <p className="font-semibold text-[#97121A] text-lg">Email</p>
                          <p className="text-gray-700">pemudaberprestasibanyuasin1@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form Kontak */}
              <div className="space-y-6">
                <div className="mb-8">
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#97121A] mb-3">
                    Kirim Pesan
                  </h3>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-[#C1121F] to-[#97121A] rounded-full"></div>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-white/60 to-white/30 rounded-2xl blur-xl group-hover:from-white/80 group-hover:to-white/50 transition-all duration-300"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-xl p-8 border border-white/80 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <form className="space-y-6">
                      <div>
                        <input 
                          type="text" 
                          placeholder="Nama Lengkap" 
                          className="w-full p-4 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-[#C1121F] transition-all duration-300 placeholder-gray-400 text-gray-700"
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          placeholder="Alamat Email" 
                          className="w-full p-4 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-[#C1121F] transition-all duration-300 placeholder-gray-400 text-gray-700"
                        />
                      </div>
                      <div>
                        <input 
                          type="tel" 
                          placeholder="Nomor Telepon" 
                          className="w-full p-4 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-[#C1121F] transition-all duration-300 placeholder-gray-400 text-gray-700"
                        />
                      </div>
                      <div>
                        <textarea 
                          placeholder="Pesan Anda..." 
                          rows={5}
                          className="w-full p-4 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-[#C1121F] transition-all duration-300 resize-none placeholder-gray-400 text-gray-700"
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-[#C1121F] to-[#97121A] text-white p-4 rounded-xl hover:from-[#A10E1A] hover:to-[#7D0F15] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        Kirim Pesan
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Kontak;