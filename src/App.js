import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero/HeroSection'
import FastShorten from './components/shorten/FastShorten'
import Statistics from './components/stats/Statistics'
import Footer from './components/footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FastShorten />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;
