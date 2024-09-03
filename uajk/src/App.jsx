import React from 'react'
import './App.css'
// import Hero from './components/HeroSlider/HeroSlider'
import HeroSlider2 from './components/HeroSlider2/HeroSlider2'
import NavBar from './components/Navbar/Navbar'
import Marquee from './components/Marquee/Marquee'
import StatsCounter from './components/StatsCounter/StatsCounter'
import EventCards from './components/Events/EventCards'
import Notifications from './components/Notifications/Notifications'
import CampusesSection from './components/CampusesSection/CampusesSection'


const App = () => {
  return (
    <>
    <NavBar />
    <HeroSlider2 />
    <Marquee />
    {/* <Hero /> */}
    <EventCards />
    <StatsCounter />
    <Notifications/>
    <CampusesSection />
    </>
  )
}

export default App