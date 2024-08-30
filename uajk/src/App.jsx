import React from 'react'
import './App.css'
import Hero from './components/HeroSlider/HeroSlider'
import HeroSlider2 from './components/HeroSlider2/HeroSlider2'
import NavBar from './components/Navbar/Navbar'


const App = () => {
  return (
    <>
    <NavBar/>
    <HeroSlider2/>
    <Hero/>
    </>
  )
}

export default App