import React from 'react'
import './stats.css'
import records from '../../images/icon-detailed-records.svg'
import brand from '../../images/icon-brand-recognition.svg'
import custom from '../../images/icon-fully-customizable.svg'

const Statistics = () => {

  return (
    <section id='stats'>
      <div id='statistics'>
        <div className="title">
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our
          advanced statistics dashboard.
        </p>
        </div>
        <div className="stats-description">
          <div>
            <img src={brand} alt='brand img' />
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your content.
          </p>
          </div>
          <div>
            <img src={records} alt='recodrs img' />
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and where
              people engage with your content helps inform better decisions.
          </p>
          </div>
          <div>
            <img src={custom} alt='custom img' />
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through customizable
              links, supercharging audience engagement.
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics;
