import React from 'react'
import './Retention.scss'
import {
  Intro,
  Rvr,
  BounceRate,
  ChurnRate,
  NPS,
} from '../../components/Calculations/index'
import { Accordion } from '../../components/index'

function Retention() {
  return (
    <>
      <Intro />
      <div className="section_wrapper">
        <Accordion allowMultipleOpen>
          <div label="Rate of Returning" isOpen class="accordion_label">
            <Rvr />
          </div>
          <div label="Bounce Rate">
            <BounceRate />
          </div>
          <div label="Customer Churn Rate">
            <ChurnRate />
          </div>
          <div label="Net Promoter Score (NPS)">
            <NPS />
          </div>
        </Accordion>
      </div>
    </>
  )
}

export default Retention
