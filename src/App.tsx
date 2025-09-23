import { useRef } from 'react'
import Hero from "./Sections/Hero"
import Kegiatan from './Sections/Kegiatan'
import Pengurus from './Sections/Pengurus'
import Kontak from './Sections/Kontak'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CompetitionsSection from './Sections/CompetitionsSection'

function App() {
  // Refs untuk smooth scrolling
  const competitionsRef = useRef<HTMLDivElement>(null)
  const kegiatanRef = useRef<HTMLDivElement>(null)
  const pengurusRef = useRef<HTMLDivElement>(null)
  const kontakRef = useRef<HTMLDivElement>(null)

  // Function untuk scroll ke section tertentu
  const scrollToSection = (sectionName: string) => {
    let targetRef;
    
    switch(sectionName) {
      case 'competitions':
        targetRef = competitionsRef;
        break;
      case 'kegiatan':
        targetRef = kegiatanRef;
        break;
      case 'pengurus':
        targetRef = pengurusRef;
        break;
      case 'kontak':
        targetRef = kontakRef;
        break;
      default:
        return;
    }
    
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      // Putih ke abu-abu gelap - Perfect untuk Taekwondo
      background: `
        linear-gradient(135deg, rgba(248, 248, 248, 0.8) 0%, rgba(248, 248, 248, 0.6) 20%, rgba(248, 248, 248, 0.8) 50%, rgba(248, 248, 248, 0.75) 100%),
        url('/photos/texture.jpg')
      `,
      backgroundSize: 'cover, 300px 300px',
      backgroundRepeat: 'no-repeat, repeat',
      backgroundPosition: 'center, 0 0'
    }}>
      {/* Additional subtle overlay untuk depth */}
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
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header onScrollTo={scrollToSection} />
        <Hero onScrollToCompetitions={() => scrollToSection('competitions')} />
        
        {/* Competitions Section */}
        <div ref={competitionsRef}>
          <CompetitionsSection />
        </div>
        
        {/* Pengurus Section */}
        <div ref={pengurusRef}>
          <Pengurus />
        </div>
        
        {/* Kegiatan Section */}
        <div ref={kegiatanRef}>
          <Kegiatan />
        </div>
        
        {/* Kontak Section */}
        <div ref={kontakRef}>
          <Kontak />
        </div>
        
        <Footer />
      </div>
    </div>
  )
}

export default App