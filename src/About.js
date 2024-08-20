import React from 'react'
import './About.css'
import Footer from './Footer'


import NewNav from './NewNav'
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import { Link } from "react-router-dom";

function About() {
  return (
    <>
   
   <NewNav/>
    <body className='aboutbody'>
  
    
          <div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container bottomContainer">
    <div class="ultimateImg">
      <img class="mainImg" src="/assets/sir1.png"/>
      <AnimatedOnScroll animationIn='bounceInRight'>
      <div class="purpleBox">
      
        
        <p class="purpleText">
        Prof. Sushil Mishra is an esteemed Biology teacher known for his expertise in botany and zoology. With 18 years of experience at Mumbai's top institutes and accolades such as 'best academic mentor', he has inspired numerous NEET and MHTCET top scorers, including the all India ISC topper of 2019. His teaching methods include practicals, field trips, live demos, and mnemonic tricks to demystify complex concepts.
        </p>
        {/* <img class="stars" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"/> */}
      </div>
      </AnimatedOnScroll>
    </div>
   
    <div class="allText bottomText">
      <AnimatedOnScroll animationIn='bounceInLeft'>
      <p class="text-blk headingText">
        About Us
      </p>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn='bounceInLeft'>
      <p class="text-blk subHeadingText">
      Let’s make biology fascinating and your dreams a reality with Bio4u!
      </p>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn='bounceInLeft'>
      <p class="text-blk description">
      At Bio4U Biology Private Tuitions, we transform the way you understand and excel in biology! Under the expert guidance of the renowned Prof. Sushil Mishra, we make biology not just comprehensible, but genuinely fascinating.
    
      </p>
      </AnimatedOnScroll>
     
      <a class="explore">
       <Link to ={'/normal'}>Contact us</Link> 
      </a>
     
    </div>
    
  </div>
</div>
    </body>
    <Footer/>

    </>
  )
}

export default About
