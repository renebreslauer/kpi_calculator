import React from 'react'
import './Retention.scss'
import { Rvr, BounceRate } from '../../components/Calculations/index'
import { Accordion } from '../../components/index'

function Retention() {
  return (
    <div className="section_wrapper">
      <h1>Retention</h1>

      <Accordion allowMultipleOpen>
        <div label="Rate of Returning">
          <h3>Rate of Returning Visitors</h3>
          <Rvr />
        </div>
        <div label="bounce Rate">
          <h3>Bounce Rate</h3>
          <BounceRate />
        </div>
      </Accordion>
    </div>
  )
}

export default Retention
