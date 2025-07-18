import React from 'react'
import HeroSection from './_components/HeroSection'
import AboutSection from './_components/AboutSection'
import SemestersSection from './_components/SemestersSection'
import ResourcesSection from './_components/ResourcesSection'
import ContactSection from './_components/ContactSection'
import EntranceComponent from './_components/EntranceComponent'

function Home() {
  
  return (
    <>
    <HeroSection />
    <AboutSection />
    <EntranceComponent />
    <SemestersSection />
      {/* <ResourcesSection />
      <ContactSection/> */}
    </>
  )
}

export default Home