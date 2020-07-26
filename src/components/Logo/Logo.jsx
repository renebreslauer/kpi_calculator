import React from 'react'
import './Logo.scss'
import BarGraph from '../Lotties/BarGraph.json'
import Lottie from 'react-lottie'

function Logo() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BarGraph,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <>
      <div className="logo_image_container">
        <div className="graph_container">
          <Lottie options={defaultOptions} id="BarGraph" />
        </div>
        <div className="logo_wrapper">
          <div className="logo_col_1">
            <span className="kpi_span">KPI</span>
          </div>
          <div className="logo_col_2">
            <span className="calc_span">Calculator</span>
            <span className="by_activator_span">from Activator Studios</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logo
