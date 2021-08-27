import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero/HeroSection'
import FastShorten from './components/shorten/FastShorten'
import Statistics from './components/stats/Statistics'
import Footer from './components/footer/Footer'
import imgHero from './images/illustration-working.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div role='main' className='content'>
        <Navbar />
        <HeroSection img={imgHero} />
        <FastShorten />
        <Statistics />
      </div>
      <Footer />
    </div>
  );
}

export default App;
