const Header = () => {

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return(<>
        <div className="w-full h-24 bg-white/30 backdrop-blur-2xl flex justify-between items-center fixed px-40 z-[100]">
            <button 
                onClick={() => scrollToSection('hero')} 
                className="font-anton text-[#97121A] text-4xl -skew-x-6 uppercase cursor-pointer"
            >
                pemuda berprestasi
            </button>
            <div className="flex items-center gap-10 text-black text-lg">
                <button 
                    onClick={() => scrollToSection('hero')}
                    className="hover:text-red transition-all duration-200 cursor-pointer"
                >
                    BERANDA
                </button>
                <button 
                    onClick={() => scrollToSection('kegiatan')}
                    className="hover:text-red transition-all duration-200 cursor-pointer"
                >  
                    KEGIATAN
                </button>
                <button 
                    onClick={() => scrollToSection('pengurus')}
                    className="hover:text-red transition-all duration-200 cursor-pointer"
                >
                    PENGURUS
                </button>
                <button 
                    onClick={() => scrollToSection('kontak')}
                    className="hover:text-red transition-all duration-200 cursor-pointer"
                >
                    KONTAK
                </button>
            </div>
        </div>
    </>)
}

export default Header