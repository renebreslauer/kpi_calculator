import React, { useState, useEffect } from 'react'
import { Result } from '../index'
import { Wave } from '../../index'
import { ResponsiveBar } from '@nivo/bar'
import '../Calculations.scss'

function BounceRate(props) {
  const [currentResult, setCurrentResult] = useState('')
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
    let currentNum1 = document.querySelector('#num1Bounce').value
    let currentNum2 = document.querySelector('#num2Bounce').value
    if (currentNum1 === '') return
    if (currentNum2 === '') return
    let result = parseInt(currentNum2) / parseInt(currentNum1)
    setCurrentResult(Math.floor(result * 100) + '%')
    document.querySelector('#num1Bounce').value = currentNum1
    document.querySelector('#num2Bounce').value = currentNum2
  }

  const Clear = (e) => {
    e.preventDefault()
    document.querySelector('#bounceForm').reset()
    setClear(true)
    setCurrentResult('')
  }

  useEffect(() => {
    document.querySelector('#bounceResult').value = ''
  }, [])

  let { resultMessage } = props

  if (parseInt(currentResult) >= 0) {
    resultMessage = <Result header="Exceptional" message="Exceptional job" />
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
        <h2>Bounce Rate</h2>

        <div className="section_wrapper">
          <div className="section_wrapper_contents_input">
            <form id="bounceForm" className="calculation_form">
              <label>Total Visitors</label>
              <input
                type="text"
                id="num1Bounce"
                placeholder="Total Visitors"
                autocomplet="off"
              />
              <label>Visitors Who Bounce</label>
              <input
                type="text"
                id="num2Bounce"
                placeholder="Visitors Who Bounce"
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
            <p id="bounceResult">{currentResult}</p>
            {resultMessage}
          </div>
        </div>
      </div>

      <div className="wave_container">
        <Wave />
      </div>

      <div className="section_wrapper_contents_info_5">
        <div className="section_wrapper_contents_info_row_1">
          <div className="section_wrapper_contents_info_col">
            <h3>What is Bounce Rate?</h3>
            <p>
              Google defines bounce rate as “a single page session on your
              site“. Bounce rate is a measurement of how many people are viewing
              one “page” (landing page, site, blog content, etc.) and then
              leaving.
            </p>
          </div>
          <div className="section_wrapper_contents_info_col">
            <h3>What does it indicate?</h3>
            <p>
              Stopping conversion loss. Also, bounce rate can give you some key
              insights into how you’re layering your site content. If your
              prospects are leaving after one page, you need to figure out why.
            </p>
          </div>
          <div className="section_wrapper_contents_info_col">
            <h3>Benchmark</h3>
            <p>Depends on the content type.</p>
          </div>
        </div>
        <div className="section_wrapper_contents_info_row_2">
          <div className="section_wrapper_contents_info_col">
            <h3>What's the difference between bounce rate and RVR?</h3>
            <p>
              Your bounce rate is how many people leave after visiting a single
              action on your website. RVR doesn’t take how many pages they
              viewed before leaving into account.
            </p>
          </div>
          <div className="section_wrapper_contents_info_col">
            <h3>A Poor Bounce Rate</h3>
            <p>
              Also, important side note: A high bounce rate isn’t necessarily
              indicative of poor customer experience. In fact, blogs with high
              bounce rates are typically offering a good experience (they
              probably got the information they came for.) However, even on
              blogs, high bounce rates should be investigated. Try fooling
              around with your CTAs, create some killer pillar content, or think
              about your blogs overall architecture.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BounceRate
