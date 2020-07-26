import React from 'react'
import { NavLink } from 'react-router-dom'
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
      <div className="section_wrapper">
        <Accordion allowMultipleOpen>
          <div label=" " isOpen class="accordion_label">
            <Intro />
          </div>
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
