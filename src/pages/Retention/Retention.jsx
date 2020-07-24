import React, { useState, useEffect } from 'react'
import './Retention.scss'
import { Rvr, BounceRate } from '../../components/Calculations/index'

function Retention() {
  return (
    <div className="section_wrapper">
      <h1>Retention</h1>
      <div className="section_wrapper_contents">
        <div className="section_wrapper_contents_input">
          <h3>Rate of Returning Visitors</h3>
          <Rvr />
          <h3>Bounce Rate</h3>
          <BounceRate />
        </div>
        <div className="section_wrapper_contents_result"></div>
      </div>
    </div>
  )
}

export default Retention
