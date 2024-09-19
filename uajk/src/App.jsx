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
import Introduction from './components/Introduction/Introduction'
import Footer from './components/Footer/Footer'
import ScrollingVideo from './components/ScrollingVideo/ScrollingVideo'


const App = () => {
  return (
    <>
    <NavBar />
    <HeroSlider2 />
    <Marquee />
    {/* <Hero /> */}
    <div className='video-animation'>
    <EventCards />
    <StatsCounter />
    <Notifications/>
    <CampusesSection />
    </div>
    <div className="video">
    <ScrollingVideo/>
    </div>
    <Introduction/>
    <Footer/>
    </>
  )
}

export default App