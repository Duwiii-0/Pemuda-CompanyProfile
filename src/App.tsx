import { useState } from 'react'
import Hero from "./Sections/Hero"
import Kegiatan from './Sections/Kegiatan'
import Pengurus from './Sections/Pengurus'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return <>
    <Header />
    <Hero />
    <Pengurus />
    <Kegiatan />
    <Footer />
  </>
  
}

export default App
