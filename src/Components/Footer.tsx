const Footer = () => {
  return (
    <footer className="bg-[#97121A]/60 text-white py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Pemuda Berprestasi</h3>
            <p className="text-gray-200 text-sm">
              Membangun generasi muda Indonesia yang berprestasi dan berkarakter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="#beranda" className="hover:text-[#C1121F] transition-colors">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-[#C1121F] transition-colors">Tentang Kami</a></li>
              <li><a href="#program" className="hover:text-[#C1121F] transition-colors">Program</a></li>
              <li><a href="#kontak" className="hover:text-[#C1121F] transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-sm text-gray-200">
              <p>Jl. Pemuda No. 123, Jakarta</p>
              <p>+62 812-3456-7890</p>
              <p>info@pemudaberprestasi.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Pemuda Berprestasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;