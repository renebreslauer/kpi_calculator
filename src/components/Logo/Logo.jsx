import React from 'react'
import './Logo.scss'

function Logo() {
  return (
    <div className="logo_wrapper">
      <div className="logo_col_1">
        <span className="kpi_span">KPI</span>
      </div>
      <div className="logo_col_2">
        <span className="calc_span">Calculator</span>
        <span className="by_activator_span">from Activator Studios</span>
      </div>
    </div>
  )
}

export default Logo
