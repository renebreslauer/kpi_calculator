import React, { useState, useEffect } from 'react'
import '../Calculations.scss'
import { ResponsiveBar } from '@nivo/bar'
import { Wave } from '../../index'
import { Result } from '../index'
import Arrow from '../../../assets/arrow.svg'

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
    if (currentNum1 === '') return
    if (currentNum2 === '') return
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
  }, [])

  let { resultMessage } = props
  if (parseInt(currentResult) >= 100) {
    resultMessage = <Result header="Exceptional" message="Exceptional job" />
  }
  if (parseInt(currentResult) >= 40) {
    resultMessage = <Result header="Exceptional" message="Exceptional job" />
  }
  if (parseInt(currentResult) <= 39 && parseInt(currentResult) >= 25) {
    resultMessage = <Result header="Good" message="Good job" />
  }
  if (parseInt(currentResult) <= 24 && parseInt(currentResult) > 0) {
    resultMessage = (
      <Result header="Average" message="Average job" image={Arrow} />
    )
  }
  if (parseInt(currentResult) <= 0) {
    resultMessage = <Result message="Enter your metrics to see your results" />
  }
  if (parseInt(currentResult) == null) {
    resultMessage = <Result message="Enter your metrics to see your results" />
  }
  if (!(parseInt(currentResult) > 0) && !(parseInt(currentResult) < 0)) {
    resultMessage = (
      <Result message="Enter your metrics to see your results" image={Arrow} />
    )
  }

  let newResult = parseFloat(currentResult)
  let data = [
    {
      rvr: 'Exceptional',
      Percentage: 40,
      PercentageColor: 'hsl(330, 70%, 50%)',
    },
    {
      rvr: 'Good',
      Percentage: 25,
      PercentageColor: 'hsl(79, 70%, 50%)',
    },
    {
      rvr: 'Your Results',
      Percentage: newResult,
      PercentageColor: 'hsl(267, 70%, 50%)',
    },
  ]

  return (
    <>
      <div className="accordion_content">
        <h2>Rate of Returning Visitors</h2>

        <div className="section_wrapper">
          <div className="section_wrapper_contents_input">
            <form id="rvrForm" className="calculation_form">
              <label>Total Visitors</label>
              <input
                type="text"
                id="num1"
                placeholder="Total Visitors"
                autocomplet="off"
                pattern="[0-9]*"
              />
              <label>Returning Visitors</label>
              <input
                type="text"
                pattern="[0-9]*"
                id="num2"
                placeholder="Returning Visitors"
                autocomplet="off"
              />
              <div className="form_buttons">
                <button onClick={Divide} className="submit_button">
                  Submit
                </button>
                <button onClick={Clear} className="clear_button">
                  Clear
                </button>
              </div>
            </form>
          </div>
          <div className="section_wrapper_contents_result">
            <div className="chart_container">
              <ResponsiveBar
                colors="#A2FF00"
                data={data}
                keys={['Percentage']}
                indexBy="rvr"
                margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
                padding={0.3}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: '',
                  legendPosition: 'middle',
                  legendOffset: 32,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor="#000"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                theme={{
                  axis: {
                    fontSize: '14px',
                    tickColor: '#eee',
                    ticks: {
                      line: {
                        stroke: '#555555',
                      },
                      text: {
                        fill: '#FFFFFF',
                      },
                    },
                    legend: {
                      text: {
                        fill: '#aaaaaa',
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="result_container">
            <h3>Your Result</h3>
            <p id="result">{currentResult}</p>
            {resultMessage}
          </div>
        </div>
      </div>
      <div className="wave_container">
        <Wave />
      </div>

      <div className="section_wrapper_contents_info">
        <div className="section_wrapper_contents_info_col">
          <h3>What is RVR?</h3>
          <p>
            Simply put, your RVR is how many repeat visitors you have. It is
            definitely one of those “hidden” KPIs that a ton of marketers like
            to ignore. But, honestly, RVR can give you a good look at how your
            overall content strategy is going. Return customers are 5x more
            valuable than new ones, so a high RVR % is huge.
          </p>
        </div>

        <div className="section_wrapper_contents_info_col">
          <h3>What does it indicate?</h3>
          <p>
            Is your content engaging enough? Do customers want to buy more of
            your products? Returning visitors helps you figure out your strategy
            across verticals.
          </p>
          <p>Rate of Returning Visitors</p>
        </div>

        <div className="section_wrapper_contents_info_col">
          <h3>Benchmark</h3>
          <p>Over 25% is ideal. If you’re over 40%, you’re killing it.</p>
        </div>
      </div>
    </>
  )
}

export default Rvr
