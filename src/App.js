import React from 'react'
import Navbar from './COMPONENT/Navbar'
import Home from './COMPONENT/Pages/Home'
import About from './COMPONENT/Pages/About'
import Contact from './COMPONENT/Pages/Contact'
import AllProduct from './COMPONENT/Pages/AllProduct'
import { GlobalStyle } from './styles/Globalstyles';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './COMPONENT/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/allproducts" element={<AllProduct />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
