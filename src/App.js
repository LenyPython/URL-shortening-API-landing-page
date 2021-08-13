import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero/HeroSection'
import FastShorten from './components/shorten/FastShorten'
import Statistics from './components/stats/Statistics'
import CallToAction from './components/calltoaction/CallToAction'
import FooterNav from './components/footernav/FooterNav'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FastShorten />
      <Statistics />
      <CallToAction />
      <FooterNav />
    </div>
  );
}

export default App;
