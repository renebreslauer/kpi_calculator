import React, { useState, useEffect } from 'react'
import '../Calculations.scss'

function Rvr(props) {
  const [currentResult, setCurrentResult] = useState('')
  const [clear, setClear] = useState(false)

  useEffect(() => {
    document.querySelector('#result').value = ''
  }, [])

  useEffect(() => {
    if (clear) document.querySelector('#result').value = ''
  })

  const Divide = (e) => {
    e.preventDefault()
    if (clear) setClear(false)
    let currentNum1 = document.querySelector('#num1').value
    let currentNum2 = document.querySelector('#num2').value
    if (currentNum1 == '') return
    if (currentNum2 == '') return
    let result = parseInt(currentNum2) / parseInt(currentNum1)
    setCurrentResult(Math.floor(result * 100) + '%')
    document.querySelector('#num1').value = currentNum1
    document.querySelector('#num2').value = currentNum2
  }

  const Clear = (e) => {
    e.preventDefault()
    document.querySelector('#rvrForm').reset()
    setClear(true)
    setCurrentResult('')
  }

  useEffect(() => {
    document.querySelector('#result').value = ''
    document.querySelector('#message').value = ''
  }, [])

  let { resultMessage } = props
  if (currentResult > '25%') {
    resultMessage = 'great job'
  }
  if (currentResult > '40%') {
    resultMessage = 'Exceptional!'
  }
  if (currentResult <= '25%') {
    resultMessage = "There's some room for improvement"
  }
  if (currentResult <= '0%') {
    resultMessage = null
  }

  return (
    <div className="section_wrapper">
      <div className="section_wrapper_contents_input">
        <form id="rvrForm" className="calculation_form">
          <label>Total Visitors</label>
          <input type="text" id="num1" placeholder="Total Visitors" />
          <label>Returning Visitors</label>
          <input type="text" id="num2" placeholder="Returning Visitors" />
          <div className="form_buttons">
            <button onClick={Divide}>Submit</button>
            <button onClick={Clear}>Clear</button>
          </div>
          <div className="result_container" id="resultContainer">
            <p>Your Result</p>
            <p id="result">{currentResult}</p>
            <div className="result_message" id="message">
              {resultMessage}
            </div>
          </div>
        </form>
      </div>
      <div className="section_wrapper_contents_result">
        <h3>What is RVR?</h3>
        <p>
          Simply put, your RVR is how many repeat visitors you have. It is
          definitely one of those “hidden” KPIs that a ton of marketers like to
          ignore. But, honestly, RVR can give you a good look at how your
          overall content strategy is going. Return customers are 5x more
          valuable than new ones, so a high RVR % is huge.
        </p>
        <h3>What does it indicate?</h3>
        <p>
          Is your content engaging enough? Do customers want to buy more of your
          products? Returning visitors helps you figure out your strategy across
          verticals.
        </p>
        <p>Rate of Returning Visitors</p>
        <h3>Benchmark</h3>
        <p>Over 25% is ideal. If you’re over 40%, you’re killing it.</p>
      </div>
    </div>
  )
}

export default Rvr
