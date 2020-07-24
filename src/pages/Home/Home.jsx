import React from 'react'
import './Home.scss'
import { SectionButtons } from '../../components/index'
import { Intro, Retention, Growth } from '../index'

function Home() {
  return (
    <div className="content_wrapper">
      <SectionButtons>
        <div label="Retention">
          <Retention />
        </div>
        <div label="Growth">
          <Growth />
        </div>
      </SectionButtons>
    </div>
  )
}

export default Home
