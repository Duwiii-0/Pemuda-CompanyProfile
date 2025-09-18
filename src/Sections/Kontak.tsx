// Kontak.tsx
const Kontak = () => {
  return (
    <section id="kontak">
      <div className="w-full min-h-screen flex flex-col justify-center items-center px-40 py-20">
        {/* Judul */}
        <div className="font-anton text-red text-8xl -skew-x-6 uppercase mb-10">
          Kontak Kami
        </div>
        
        {/* Content Kontak */}
        <div className="w-full max-w-4xl bg-white/20 backdrop-blur-xl rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Info Kontak */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#C1121F] mb-4">Hubungi Kami</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C1121F] rounded-full flex items-center justify-center">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-gray-700">Jl. Pemuda No. 123, Jakarta</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C1121F] rounded-full flex items-center justify-center">
                    <span className="text-white">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-gray-700">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C1121F] rounded-full flex items-center justify-center">
                    <span className="text-white">✉️</span>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-700">info@pemudaberprestasi.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form Kontak */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#C1121F] mb-4">Kirim Pesan</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nama" 
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                />
                <textarea 
                  placeholder="Pesan" 
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1121F] resize-none"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-[#C1121F] text-white p-3 rounded-lg hover:bg-[#A10E1A] transition-colors duration-200"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;