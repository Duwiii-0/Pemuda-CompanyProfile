import { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu after clicking
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Header */}
            <div className="w-full h-16 sm:h-20 lg:h-24 bg-[#97121A]/60 backdrop-blur-2xl flex justify-between items-center fixed px-4 sm:px-6 lg:px-40 z-[100]">
                {/* Logo */}
                <button 
                    onClick={() => scrollToSection('hero')} 
                    className="font-anton text-white text-lg sm:text-xl md:text-2xl lg:text-4xl -skew-x-6 uppercase cursor-pointer"
                >
                    pemuda berprestasi
                </button>

                {/* Desktop Navigation - Hidden on mobile and tablet */}
                <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-white text-lg">
                    {[
                        { name: 'BERANDA', id: 'hero' },
                        { name: 'PENGURUS', id: 'pengurus' },
                        { name: 'KEGIATAN', id: 'kegiatan' },
                        { name: 'KONTAK', id: 'kontak' }
                    ].map((item) => (
                        <button 
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="hover:text-[#97121A] transition-all duration-200 cursor-pointer font-semibold relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#97121A] transition-all duration-200 group-hover:w-full"></span>
                        </button>
                    ))}
                </nav>

                {/* Mobile Hamburger Button */}
                <button 
                    onClick={toggleMenu}
                    className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 cursor-pointer group"
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-[#97121A] rounded-full transition-all duration-300 ${
                        isMenuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-7'
                    }`}></span>
                    <span className={`w-6 h-0.5 bg-[#97121A] rounded-full transition-all duration-300 ${
                        isMenuOpen ? 'opacity-0' : 'group-hover:w-5'
                    }`}></span>
                    <span className={`w-6 h-0.5 bg-[#97121A] rounded-full transition-all duration-300 ${
                        isMenuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-7'
                    }`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[99] bg-black/50" onClick={() => setIsMenuOpen(false)} />
            )}

            {/* Mobile Navigation Menu - Slide from right */}
            <div className={`lg:hidden fixed top-0 right-0 h-full w-80 sm:w-96 bg-white/95 backdrop-blur-3xl z-[100] transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } shadow-2xl`}>
                
                {/* Close button */}
                <div className="flex justify-end p-4 sm:p-6">
                    <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#97121A]/10 hover:bg-[#97121A]/20 transition-colors"
                    >
                        <span className="text-[#97121A] text-xl">×</span>
                    </button>
                </div>

                {/* Logo in mobile menu */}
                <div className="px-4 sm:px-6 mb-8">
                    <h2 className="font-anton text-[#97121A] text-xl sm:text-2xl -skew-x-6 uppercase">
                        Pemuda Berprestasi
                    </h2>
                </div>

                {/* Navigation Links */}
                <nav className="px-4 sm:px-6 space-y-2">
                    {[
                        { name: 'BERANDA', id: 'hero' },
                        { name: 'PENGURUS', id: 'pengurus' },
                        { name: 'KEGIATAN', id: 'kegiatan' },
                        { name: 'KONTAK', id: 'kontak' }
                    ].map((item, index) => (
                        <button 
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            style={{ 
                                animationDelay: `${index * 100}ms`
                            }}
                            className={`w-full flex items-center gap-4 p-4 text-left text-[#97121A] font-semibold text-lg rounded-xl hover:bg-[#97121A]/10 transition-all duration-200 group ${
                                isMenuOpen ? 'animate-slideIn' : ''
                            }`}
                        >
                            <span className="group-hover:translate-x-2 transition-transform">
                                {item.name}
                            </span>
                        </button>
                    ))}
                </nav>

                {/* Footer info in mobile menu */}
                <div className="absolute bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <div className="text-center text-sm text-gray-600">
                        <p className="font-medium">Pemuda Banyuasin</p>
                        <p>Yayasan Restasi</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header