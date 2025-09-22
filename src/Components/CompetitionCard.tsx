import React from 'react';

interface CompetitionCardProps {
  title: string;
  description: string;
  logoUrl: string;
  logoAlt: string;
  proposalLink?: string;
  websiteLink?: string;
  className?: string;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({
  title,
  description,
  logoUrl,
  logoAlt,
  proposalLink,
  websiteLink,
  className = ""
}) => {
  return (
    <div className={`bg-white/90 backdrop-blur-sm border border-white/50 shadow-2xl rounded-3xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 ease-in-out 
                    flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-12 
                    p-6 sm:p-8 lg:p-10 xl:p-12
                    w-full max-w-6xl mx-auto ${className}`}>      
      
      {/* Image Container */}
      <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
        <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 flex items-center justify-center bg-white/80 rounded-2xl p-4 shadow-lg">
          <img 
            src={logoUrl} 
            alt={logoAlt} 
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105" 
          />
        </div>
      </div>      

      {/* Content Container */}
      <div className="flex-1 flex flex-col gap-6 w-full text-center lg:text-left">        
        
        {/* Title + Description Container */}
        <div className="flex flex-col gap-4">
          <h3 className="font-anton text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 
                         text-[#C1121F] leading-tight -skew-x-3 uppercase">
            {title}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl 
                        text-gray-700 leading-relaxed max-w-4xl">
            {description}
          </p>
        </div>        

        {/* Button Container */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          
          {/* Website Button (Optional) */}
          {websiteLink && (
            <a 
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#C1121F] 
                         text-[#C1121F] rounded-2xl font-bold text-base lg:text-lg hover:bg-[#C1121F] hover:text-white 
                         transition-all duration-300 transform hover:scale-105 hover:shadow-xl no-underline min-w-[180px]"
            >
              Kunjungi Website
            </a>
          )}
          
          {/* Download Proposal Button (Optional) */}
          {proposalLink && (
            <a 
              href={proposalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#97121A] text-white rounded-2xl 
                         font-bold text-base lg:text-lg hover:bg-[#771317] transition-all duration-300 
                         transform hover:scale-105 hover:shadow-xl no-underline min-w-[180px]"
            >
              Download Proposal
            </a>
          )}
        </div>      
      </div> 
    </div>
  );
};

export default CompetitionCard;