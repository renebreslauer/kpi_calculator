import React from 'react'
import '../Calculations.scss'

function Result(props) {
  return (
    <div className="result_message_container">
      <div className="result_image">
        <img src={props.image} alt="score image" />
      </div>
      <div className="result_message_header">
        <h3>{props.header}</h3>
      </div>
      <div className="result_message" id="message">
        {props.message}
      </div>
    </div>
  )
}

export default Result
