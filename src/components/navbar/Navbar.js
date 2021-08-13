import React from 'react'

const Navbar = () => {

  return (
    <div id='navbar'>
      <div className="menu">
        <h2>Shortly</h2>
        Features
        Pricing
        Resources
      </div>
      <div className='login'>
        Login
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar;
