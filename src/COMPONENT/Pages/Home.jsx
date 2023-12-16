import React from 'react'
import HeroSection from '../HeroSection'
import ServiceSection from '../ServiceSection'
import Trusted from '../Trusted'
import FeatureProduct from '../FeatureProduct'

function Home() {
  return (
    <div>
      <HeroSection name="Meer Store" />
      <FeatureProduct />
      <ServiceSection />
      <Trusted />
    </div>
  )
}

export default Home
