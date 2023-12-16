import React from 'react';
import HeroSection from '../HeroSection';
import { useProductContext } from '../../context/ProductContext'

function About() {
  const {myName} = useProductContext();


  return (
    <div>
      { myName }
       <HeroSection name="Meer Ecommmerce" />
    </div>
  )
}

export default About
