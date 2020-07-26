import React, { useState, useEffect } from 'react'
import { Result } from '../index'
import { Wave } from '../../index'
import { ResponsiveBar } from '@nivo/bar'
import '../Calculations.scss'

function ChurnRate(props) {
  const [currentResult, setCurrentResult] = useState('')
  const [clear, setClear] = useState(false)

  useEffect(() => {
    document.querySelector('#churnResult').value = ''
  }, [])

  useEffect(() => {
    if (clear) document.querySelector('#churnResult').value = ''
  })

  const Divide = (e) => {
    e.preventDefault()
    if (clear) setClear(false)
    let currentNum1 = document.querySelector('#num1Churn').value
    let currentNum2 = document.querySelector('#num2Churn').value
    if (currentNum1 === '') return
    if (currentNum2 === '') return
    let result =
      (parseInt(currentNum1) - parseInt(currentNum2)) / parseInt(currentNum1)
    setCurrentResult(Math.floor(result * 100) + '%')
    document.querySelector('#num1Churn').value = currentNum1
    document.querySelector('#num2Churn').value = currentNum2
  }

  const Clear = (e) => {
    e.preventDefault()
    document.querySelector('#churnForm').reset()
    setClear(true)
    setCurrentResult('')
  }

  useEffect(() => {
    document.querySelector('#churnResult').value = ''
  }, [])

  let { resultMessage } = props

  if (parseInt(currentResult) >= 0 && parseInt(currentResult) <= 7) {
    resultMessage = <Result header="Exceptional" message="Exceptional job" />
  }
  if (parseInt(currentResult) > 7) {
    resultMessage = (
      <Result header="Below Average" message="Room for improvement" />
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
        <h2>Churn Rate</h2>

        <div className="section_wrapper">
          <div className="section_wrapper_contents_input">
            <form id="churnForm" className="calculation_form">
              <label>Customers at the Beginning of the Month</label>
              <input
                type="text"
                id="num1Churn"
                placeholder="Beginning Customers"
                autocomplet="off"
              />
              <label>Customers at the End of the Month</label>
              <input
                type="text"
                id="num2Churn"
                placeholder="End Customers"
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
                data={data}
                keys={['Percentage']}
                indexBy="rvr"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                defs={[
                  {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#fffff',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                ]}
                fill={[
                  {
                    match: {
                      id: 'fries',
                    },
                    id: 'dots',
                  },
                  {
                    match: {
                      id: 'sandwich',
                    },
                    id: 'lines',
                  },
                ]}
                borderColor={{ from: 'color', modifiers: [['brighter', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: '',
                  legendPosition: 'middle',
                  legendOffset: 32,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Rate of Returning Visitors',
                  legendPosition: 'middle',
                  legendOffset: -40,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                legends={[
                  {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
              />
            </div>
          </div>
          <div className="result_container">
            <h3>Your Result</h3>
            <p id="churnResult">{currentResult}</p>
            {resultMessage}
          </div>
        </div>
      </div>

      <div className="wave_container">
        <Wave />
      </div>

      <div className="section_wrapper_contents_info_4">
        <div className="section_wrapper_contents_info_col">
          <h3>What is Churn Rate?</h3>
          <p>
            Your churn rate is the percentage of your customers who cancel (or
            fail to renew) their subscription with your service.
          </p>
        </div>
        <div className="section_wrapper_contents_info_col">
          <h3>What does it indicate?</h3>
          <p>
            It's good for SaaS (or other sub-based) businesses looking to make a
            profit. If customers are canceling their sub before they hit your
            typical customer acquisition cost (CAC,) you’ve got a big problem.
          </p>
        </div>

        <div className="section_wrapper_contents_info_col">
          <h3>Why worry about it?</h3>
          <p>
            Churn rate is the perfect spot to start digging around. You need to
            figure out why customers are leaving. To do this, you can start
            sending out surveys, looking into customer particulars, analyzing
            your products, and reviewing competitors in your space. Churn rate
            can also give you some critical insights into overall market trends.
          </p>
        </div>
        <div className="section_wrapper_contents_info_col">
          <h3>Benchmark</h3>
          <p>1 - 7% monthly</p>
        </div>
      </div>
    </>
  )
}

export default ChurnRate
