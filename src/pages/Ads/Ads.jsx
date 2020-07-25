import React from 'react'
import './Ads.scss'
import { Rvr, BounceRate } from '../../components/Calculations/index'
import { Accordion } from '../../components/index'

function Ads() {
  return (
    <>
      <div className="section_wrapper">
        <Accordion allowMultipleOpen>
          <div label="What is Ads?" isOpen class="accordion_label">
            <p>
              These KPI's are all about retaining customers or figuring out why
              customers are abandoning your funnel.
            </p>
          </div>
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

export default Ads
