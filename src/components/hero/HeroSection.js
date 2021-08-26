
import React from 'react'
import './hero.css'

const HeroSection = ({img}) => {

  return (
    <div id='hero'>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights
          on how your links are performing.
        </p>
        <button id="hero-btn">Get Started</button>
      </div>
      <img id='illustration' src={img} alt='illustration' />
    </div>
  )
}

export default HeroSection;
