import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="NavBar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
    </div>
  )
}

export default Navbar
