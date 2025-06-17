import React from 'react'
import Hero from '../components/Hero'
import Marque from '../components/Marque'
import Token from '../components/Token'
import Memes from '../components/Memes'
import Footer from '../components/Footer'
import BorderSec from '../components/BorderSec'
import AboutUs from '../components/AboutUs'

import Contarct from '../components/Contarct'
function Home() {
  return (
    <div>
        <Hero />
      <BorderSec/>
      <AboutUs/>
      <Contarct/>
      <div className=" my-10 w-full  h-[1px] bg-black border-black "></div>   
        <Token />
        <div className=" my-10 w-full  h-[1px] bg-black border-black "></div>
    
        <Memes />
        <Footer />
        </div>
  )
}

export default Home