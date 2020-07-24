import React from 'react'
import './ButtonBar.scss'
import { SectionButton } from '../index'
import { NavLink } from 'react-router-dom'

function ButtonBar() {
  return (
    <>
      <NavLink to="/Retention">
        <SectionButton button_text="Retention" />
      </NavLink>
      <NavLink to="/Growth">
        <SectionButton button_text="Growth" />
      </NavLink>
    </>
  )
}

export default ButtonBar
