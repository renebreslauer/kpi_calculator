import React from 'react'
import './Retention.scss'
import { Rvr, BounceRate } from '../../components/Calculations/index'
import { Accordion } from '../../components/index'

function Retention() {
  return (
    <>
      <div className="section_wrapper">
        <Accordion allowMultipleOpen>
          <div label="What is Retention?" isOpen class="accordion_label"></div>
          <div label="Rate of Returning" isOpen class="accordion_label">
            <h3>Rate of Returning Visitors</h3>
            <Rvr />
          </div>
          <div label="Bounce Rate">
            <h3>Bounce Rate</h3>
            <BounceRate />
          </div>
          <div label="Customer Churn Rate"></div>
          <div label="Net Promoter Score (NPS)"></div>
        </Accordion>
      </div>
    </>
  )
}

export default Retention
