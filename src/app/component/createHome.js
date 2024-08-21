"use client"
import React, {useEffect, useState} from 'react'
import { Tabs, Tab, Accordion } from 'react-bootstrap'
import Banner from './home/Banner'
import AfterBanner from './home/AfterBanner'
import Services from './home/Services'
import Ads from './home/Ads'
import KnowMoreSection from './home/KnowMoreSection'
import Footer from './home/Footer'
import About from './home/About'

const home = () => {
  const [ userdata, setUserData]= useState('');
  // console.log(userdata?.data?.banner,"userdata")
  // console.log(userdata?.data?.afterBanner,"userdata")
  
  useEffect(()=>{
    handleGetbannerData();
  },[])
  
  const handleGetbannerData=async()=>{
    const response = await fetch('http://localhost:3000/api/admin/getadminmodule?id=66bcabaf1c3b7962e9311446',
    {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json();
    setUserData(data)
  }

  useEffect(()=>{
    handleGetAfterbannerData();
  },[])

  const handleGetAfterbannerData=async()=>{
    const response = await fetch('http://localhost:3000/api/admin/getadminmodule?id=66bcabaf1c3b7962e9311446',
    {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const result = await response.json();
    console.log("apicalling",result.data)
    setUserData(result.data)
  }


  useEffect(()=>{
    handleGetServicesData();
  },[])

  const handleGetServicesData=async()=>{
    const response = await fetch('http://localhost:3000/api/admin/getadminmodule?id=66bcabaf1c3b7962e9311446',
    {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const result = await response.json();
    console.log("apicalling",result.data)
    setUserData(result.data)
  }

  useEffect(()=>{
    handleGetAdsData();
  },[])

  const handleGetAdsData=async()=>{
    const response = await fetch('http://localhost:3000/api/admin/getadminmodule?id=66bcabaf1c3b7962e9311446',
    {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const result = await response.json();
    console.log("apicalling",result.data)
    setUserData(result.data)
  }


  useEffect(()=>{
    handleGetKnowMoreData();
  },[])

  const handleGetKnowMoreData=async()=>{
    const response = await fetch('http://localhost:3000/api/admin/getadminmodule?id=66bcabaf1c3b7962e9311446',
    {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const result = await response.json();
    console.log("apicalling",result.data)
    setUserData(result.data)
  }



  return (
    <>
        <div className='mas_main_wrapper'>
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="">
            <Tab eventKey="home" title="Home">
              <Accordion defaultActiveKey="0">
                <Banner bannerData={userdata?.banner}/>
                <AfterBanner afterBannerData={userdata?.after_banner}/>
                <Services ServicesData={userdata?.service}/>
                <Ads AdsData={userdata?.ads}/>
                <KnowMoreSection KnowMoreData={userdata?.knowmoresection}/>
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