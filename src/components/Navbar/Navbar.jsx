import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { Logo } from '../index'

function Navbar() {
  return (
    <div className="NavBar">
      <div className="nav_wrapper">
        <div className="nav_logo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className="nav_links">
          <NavLink to="/About">About</NavLink>
          <NavLink to="/About">Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
