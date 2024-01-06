import React from 'react'

import Hero from '../components/Hero'
import Feature from '../components/Feature'
// import Stats from '../components/stats'
import Testimonials from '../components/Testimonials'
import Leader from '../components/Leader'
import Footer from '../components/Footer'



const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Feature />
      {/* <Stats/> */}
      <Testimonials />
      <Leader />
      <Footer />
    </>
  )
}

export default HomeScreen
