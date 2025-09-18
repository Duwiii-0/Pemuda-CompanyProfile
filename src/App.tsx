import { useState } from 'react'
import Hero from "./Sections/Hero"
import Kegiatan from './Sections/Kegiatan'
import Pengurus from './Sections/Pengurus'
import Kontak from './Sections/Kontak'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      // Putih ke abu-abu gelap - Perfect untuk Taekwondo
      background: `
        linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 248, 248, 0.9) 20%, rgba(220, 220, 220, 0.85) 50%, rgba(70, 70, 70, 0.9) 100%),
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
        <Header />
        <Hero />
        <Pengurus />
        <Kegiatan />
        <Kontak />
        <Footer />
      </div>
    </div>
  )
}

export default App