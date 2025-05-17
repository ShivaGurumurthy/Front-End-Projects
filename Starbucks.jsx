import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import HandcraftedCurations from './HandcraftedCurations'
import BaristaRecommendations from './BaristaRecommendations'
import ArtOfBrewingCoffee from './ArtOfBrewingCoffee'
import Footer from './Footer'

const Starbucks = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <HandcraftedCurations/>
      <BaristaRecommendations/>
      <ArtOfBrewingCoffee/>
      <Footer/>
    </>
  )
}

export default Starbucks