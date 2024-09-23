import React from 'react'
import Landing from '../components/Landing'
import About from '../components/About'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <div>
      <Landing />
      <About />
      <Services />
      <Reviews />
      <Contact />
    </div>
  )
}

export default HomePage
