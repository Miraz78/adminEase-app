import React from 'react'
import { NavLink } from 'react-router-dom'
import logoImage from '../assets/images/logoImage.png';


function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <NavLink to='/'>
          <img src={logoImage} className='logo' alt='logo-image'/>
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink  to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/Register'>Register</NavLink>
        </div>
      </nav>
    </>
  )
}

export default NavBar
