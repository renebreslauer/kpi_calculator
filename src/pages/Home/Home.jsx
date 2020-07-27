import React from 'react'
import './Home.scss'
import { SectionButtons } from '../../components/index'
import { Retention, Growth, Ads, Seo, Social } from '../index'

function Home() {
  return (
    <>
      <div className="content_wrapper">
        <SectionButtons>
          <div label="Retention">
            <Retention />
          </div>
          <div label="Growth">
            <Growth />
          </div>
          <div label="Ads">
            <Ads />
          </div>
          <div label="Seo">
            <Seo />
          </div>
          <div label="Social">
            <Social />
          </div>
        </SectionButtons>
      </div>
    </>
  )
}

export default Home
