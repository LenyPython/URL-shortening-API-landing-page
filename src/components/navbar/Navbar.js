import React from 'react'
import logo from '../../images/logo.svg'
import './navbar.css'

const Navbar = () => {

  return (
    <section id='navbar'>
      <div className="menu">
        <img src={logo} alt ='logo' />
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
