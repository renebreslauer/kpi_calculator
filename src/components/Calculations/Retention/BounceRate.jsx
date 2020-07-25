import React, { useState, useEffect } from 'react'
import '../Calculations.scss'

function BounceRate() {
  const [currentResult, setCurrentResult] = useState(0)
  const [clear, setClear] = useState(false)

  useEffect(() => {
    document.querySelector('#bounceResult').value = ''
  }, [])

  useEffect(() => {
    if (clear) document.querySelector('#bounceResult').value = ''
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
    document.querySelector('#BounceRateForm').reset()
    setClear(true)
    setCurrentResult(0)
  }

  useEffect(() => {
    document.querySelector('#bounceResult').value = ''
  }, [])

  return (
    <div className="section_wrapper">
      <div className="section_wrapper_contents_input">
        <form id="BounceRateForm">
          <input type="text" id="num1" placeholder="Total Visitors" />
          <input type="text" id="num2" placeholder="Visitors Who Bounce" />
          <p id="bounceResult">{currentResult}</p>
          <button onClick={Divide}>Submit</button>
          <button onClick={Clear}>Clear</button>
        </form>
      </div>
      <div className="section_wrapper_contents_result">
        <p>{currentResult}</p>
      </div>
    </div>
  )
}

export default BounceRate
