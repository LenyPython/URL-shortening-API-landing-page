import React from 'react'
import './navbar.css'

const Navbar = () => {

  return (
    <section id='navbar'>
      <div className="menu">
        <h2>Shortly</h2>
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
      </div>
      <div className='login'>
        <p>Login</p>
        <button>Sign Up</button>
      </div>
    </section>
  )
}

export default Navbar;
