import { useState, useEffect, useCallback } from "react";

const LingkupCard = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cards = [
    {
      title: "Pelatihan Olahraga",
      subtitle: "Training Excellence",
      image: "/photos/bertanding.webp",
      description: "Program pelatihan intensif dengan kurikulum World Taekwondo Federation. Teknik dasar hingga advanced, sparring, dan persiapan kompetisi.",
      features: ["Latihan Teknik Dasar", "Sparring Practice", "Kondisi Fisik", "Mental Training"]
    },
    {
      title: "Pendidikan Karakter", 
      subtitle: "Character Building",
      image: "/photos/olahraga.webp",
      description: "Mengintegrasikan nilai-nilai taekwondo dalam kehidupan sehari-hari. Disiplin, hormat, integritas, dan kepemimpinan.",
      features: ["Etika Taekwondo", "Kepemimpinan", "Disiplin Diri", "Kerja Tim"]
    },
    {
      title: "Kegiatan Sosial",
      subtitle: "Community Impact", 
      image: "/photos/sosial.webp",
      description: "Program pengabdian masyarakat melalui demo taekwondo, pelatihan gratis, dan bakti sosial untuk komunitas sekitar.",
      features: ["Demo Sekolah", "Pelatihan Gratis", "Bakti Sosial", "Community Outreach"]
    },
  ];

  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = cards.map((card, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setImagesLoaded(prev => new Set(prev).add(index));
            resolve();
          };
          img.onerror = () => resolve();
          img.src = card.image;
        });
      });

      await Promise.allSettled(loadPromises);
    };

    preloadImages();
  }, [cards]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setActiveIndex(current => {
          if (current === null) return 0;
          return (current + 1) % cards.length;
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning, cards.length]);

  const handleCardClick = useCallback((index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex(current => current === index ? null : index);
    
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);
  
  return (
    <div className="w-full">
      {/* Desktop/Tablet View */}
      <div className="hidden md:flex justify-center gap-4 lg:gap-6 px-4">
        {cards.map((card, index) => {
          const isActive = activeIndex === index;
          const isLoaded = imagesLoaded.has(index);

          return (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`relative overflow-hidden transition-all duration-700 ease-out rounded-2xl cursor-pointer group
                ${isActive ? "flex-[3] lg:flex-[2.5]" : "flex-1"}
                h-80 lg:h-96 xl:h-[28rem]`}
            >
              {/* Background Image */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                } ${isActive ? 'scale-105' : 'scale-100 group-hover:scale-105'}`}
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              />
              
              {/* Loading placeholder */}
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-2xl" />
              )}

              {/* Overlay */}
              <div className={`absolute inset-0 transition-all duration-700 ${
                isActive 
                  ? 'bg-gradient-to-t from-black/80 via-black/30 to-transparent' 
                  : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80'
              }`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 text-white">
                <div className={`transform transition-all duration-700 ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'
                }`}>
                  
                  {/* Subtitle - Only show when active */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    isActive ? 'max-h-10 opacity-100 mb-2' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-sm font-medium text-white/80 uppercase tracking-wider">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold leading-tight mb-3 transition-all duration-500 ${
                    isActive 
                      ? 'text-2xl lg:text-3xl xl:text-4xl' 
                      : 'text-xl lg:text-2xl xl:text-3xl'
                  }`}>
                    {card.title}
                  </h3>

                  {/* Description - Only show when active */}
                  <div className={`overflow-hidden transition-all duration-500 delay-100 ${
                    isActive ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-sm lg:text-base text-white/90 leading-relaxed mb-4">
                      {card.description}
                    </p>
                  </div>

                  {/* Features - Only show when active */}
                  <div className={`overflow-hidden transition-all duration-500 delay-200 ${
                    isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="grid grid-cols-2 gap-2">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs lg:text-sm">
                          <div className="w-2 h-2 bg-[#C1121F] rounded-full mr-2 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Active indicator */}
              <div className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-300 ${
                isActive ? 'bg-[#C1121F] scale-100' : 'bg-white/50 scale-75'
              }`} />
            </div>
          );
        })}
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4 px-4">
        {cards.map((card, index) => {
          const isLoaded = imagesLoaded.has(index);

          return (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="relative overflow-hidden rounded-2xl cursor-pointer h-64 sm:h-72"
            >
              {/* Background Image */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              />
              
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-2xl" />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <p className="text-xs font-medium text-white/80 uppercase tracking-wider mb-1">
                  {card.subtitle}
                </p>
                <h3 className="text-2xl font-bold leading-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed mb-3">
                  {card.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {card.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation dots for desktop */}
      <div className="hidden md:flex justify-center mt-8 space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-[#C1121F] scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LingkupCard;