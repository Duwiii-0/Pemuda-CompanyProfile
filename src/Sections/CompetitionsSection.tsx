import React from 'react';
import CompetitionCard from '../Components/CompetitionCard';

const CompetitionsSection: React.FC = () => {
  const competitions = [
    {
      id: 1,
      title: "Sriwijaya International Taekwondo Championship 2025",
      description: "Kompetisi taekwondo internasional bergengsi yang menggabungkan tradisi dan inovasi, menghadirkan standar kompetisi kelas dunia untuk para atlet berprestasi.",
      logoUrl: "/photos/sriwijaya.png",
      logoAlt: "Sriwijaya Taekwondo Championship Logo",
      proposalLink: "https://drive.google.com/file/d/1vA7Rc6scIsrEHVjajt3WIagbhx_9i_po/view?usp=sharing",
      websiteLink: "https://cjvmanagementevent.com"
    }
  ];

  return (
    <section 
      id="competitions"
      className="relative"
      style={{
        minHeight: '100vh',
        background: `
          linear-gradient(135deg, rgba(248, 248, 248, 0.6) 0%, rgba(248, 248, 248, 0.6) 20%, rgba(248, 248, 248, 0.6) 50%, rgba(248, 248, 248, 0.6) 100%),
          url('/photos/texture.jpg')
        `,
        backgroundSize: 'cover, 300px 300px',
        backgroundRepeat: 'no-repeat, repeat',
        backgroundPosition: 'center, 0 0'
      }}
    >
      {/* Background overlay untuk depth - sama dengan Hero */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(50, 50, 50, 0.1)',
        opacity: 0.3,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      
      {/* Content wrapper */}
      <div style={{ position: 'relative', zIndex: 1 }} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="font-anton text-[#C1121F] -skew-x-3 uppercase leading-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-8">
              Kejuaraan & Kompetisi
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#97121A] mb-6">
              YAYASAN PRESTASI BANYUASIN
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed px-4">
              Forum Yayasan Pemuda Berprestasi menyelenggarakan berbagai kompetisi berkualitas tinggi 
              untuk mengembangkan potensi dan bakat generasi muda Indonesia.
            </p>
            
            {/* Divider */}
            <div className="mt-10 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-[#C1121F] to-[#97121A] rounded-full"></div>
            </div>
          </div>

          {/* Competitions Grid */}
          <div className="space-y-16 lg:space-y-20">
            {competitions.map((competition, index) => (
              <div 
                key={competition.id}
                className="transform transition-all duration-500"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <CompetitionCard
                  title={competition.title}
                  description={competition.description}
                  logoUrl={competition.logoUrl}
                  logoAlt={competition.logoAlt}
                  proposalLink={competition.proposalLink}
                  websiteLink={competition.websiteLink}
                  className="animate-fade-in-up"
                />
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto border border-white/50">
              <h2 className="font-anton text-[#C1121F] -skew-x-3 uppercase text-3xl sm:text-4xl lg:text-5xl mb-6">
                Bergabunglah dengan Kami!
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                Jadilah bagian dari komunitas pemuda berprestasi dan kembangkan potensi terbaikmu 
                melalui berbagai kompetisi dan kegiatan yang kami selenggarakan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const element = document.getElementById('kontak');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#C1121F] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#97121A] transition-all duration-300 hover:scale-105 shadow-lg transform hover:shadow-xl"
                >
                  Hubungi Kami
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('pengurus');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-transparent border-2 border-[#C1121F] text-[#C1121F] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#C1121F] hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Tentang Kami
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;