"use client"
import React from 'react'
import { Tabs, Tab, Accordion } from 'react-bootstrap'
import Banner from './home/Banner'
import AfterBanner from './home/AfterBanner'
import Services from './home/Services'
import Ads from './home/Ads'
import KnowMoreSection from './home/KnowMoreSection'
import Footer from './home/Footer'
import About from './home/About'

const home = () => {
  return (
    <>
        <div className='mas_main_wrapper'>
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="">
            <Tab eventKey="home" title="Home">
              <Accordion defaultActiveKey="0">
                <Banner/>
                <AfterBanner/>
                <Services/>
                <Ads/>
                <KnowMoreSection/>
                <Footer/>
              </Accordion>
            </Tab>
            <Tab eventKey="about" title="About">
              <About/>
            </Tab>
          </Tabs>
        </div>
    </>
  )
}

export default home