import { useState,useEffect, useCallback } from "react";

const LingkupCard = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cards = [
    {
      title: "Bertanding",
      image: "photos/bertanding.webp",
    },
    {
      title: "Olahraga",
      image: "photos/olahraga.webp",
    },
    {
      title: "Sosial",
      image: "photos/sosial.webp",
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
          img.onerror = () => resolve(); // Continue even if image fails
          img.src = card.image;
          
        });
      });

      await Promise.allSettled(loadPromises);
    };

    preloadImages();
  }, []);

  // Debounced click handler untuk mencegah spam click
  const handleCardClick = useCallback((index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex(current => current === index ? null : index);
    
    // Reset transitioning state setelah animasi selesai
    setTimeout(() => setIsTransitioning(false), 500);
  }, [activeIndex, isTransitioning]);
  
  return (
    <div className="transition-all overflow-hidden duration-300 flex flex-col xl:flex-row justify-center px-4 xl:px-32 gap-4 xl:gap-3 items-stretch w-full">
      {cards.map((card, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`relative overflow-hidden transition-all duration-500 ease-out rounded-2xl text-white flex flex-col justify-end px-6 sm:px-6 xl:px-10 py-8 cursor-pointer
              w-full xl:h-[23rem] 2xl:h-[30rem] xl:py-10 
              ${isActive ? "xl:flex-[3]" : "xl:flex-[1]"}`}
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              // Optimasi: gunakan transform untuk hardware acceleration
              transform: 'translateZ(0)',
              // Pre-load untuk mencegah lag saat hover
              willChange: 'flex-grow'
            }}
          >
            {/* Gunakan single overlay yang lebih efisien */}
            <div 
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)`,
              }}
            />
            
            <h1
              className={`relative font-bold leading-tight z-10 mb-2 transition-all duration-500 ease-out
                ${
                  isActive
                    ? "text-3xl sm:text-4xl xl:text-5xl"
                    : "text-2xl sm:text-3xl xl:text-4xl"
                }`}
              style={{
                // Hardware acceleration untuk text
                transform: 'translateZ(0)',
                willChange: 'font-size'
              }}
            >
              {card.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default LingkupCard;