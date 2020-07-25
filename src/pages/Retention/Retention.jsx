import React from 'react'
import './Retention.scss'
import { Rvr, BounceRate } from '../../components/Calculations/index'
import { Accordion } from '../../components/index'

function Retention() {
  return (
    <>
      <div className="section_wrapper">
        <Accordion allowMultipleOpen>
          <div label=" " isOpen class="accordion_label">
            <div className="accordion_content">
              <h2>What is Retention?</h2>
              <p>
                These KPI's are all about retaining customers or figuring out
                why customers are abandoning your funnel.
              </p>
            </div>
          </div>
          <div label="Rate of Returning" isOpen class="accordion_label">
            <Rvr />
          </div>
          <div label="Bounce Rate">
            <div className="accordion_content">
              <h2>Bounce Rate</h2>
              <BounceRate />
            </div>
          </div>
          <div label="Customer Churn Rate"></div>

          <div label="Net Promoter Score (NPS)"></div>
        </Accordion>
      </div>
    </>
  )
}

export default Retention
