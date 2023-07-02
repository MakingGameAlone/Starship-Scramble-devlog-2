import React from 'react'
import HeroSection from '../Component/HeroSection'
import Overview from '../Component/Overview'
import Features from '../Component/Features'
import ScreenShots from '../Component/ScreenShots'
import Footer from '../Component/Footer'

function Home() {
  return (
    <div>
    <HeroSection />
    <Overview />
    <Features />
    <ScreenShots />
    <Footer />
    </div>
  )
}

export default Home