import React, { useState, useRef ,useEffect} from 'react';
import './Banner.css'
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Banner = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderListRef = useRef(null);

  const updateSlide = (index) => {
    sliderRadios.current[currentSlideIndex].checked = false;
    sliderListRef.current.style.backgroundImage = 
    setCurrentSlideIndex(index);
    sliderRadios.current[index].checked = true;
  };

  const handlePrevClick = () => {
    const newIndex = currentSlideIndex === 0 ? sliderListRef.current.children.length - 1 : currentSlideIndex - 1;
    updateSlide(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentSlideIndex + 1) % sliderListRef.current.children.length;
    updateSlide(newIndex);
  };

  const sliderRadios = useRef(null);

  useEffect(() => {
    sliderRadios.current = document.querySelectorAll('input[type="radio"]');
  }, []);

  return (
    <>
    
    <div className='bannerdiv'>
      <AnimatedOnScroll
      animationIn='fadeIn'
      >

      <div  className='reviewclass' id='reviews'><span className='spanreview'>FEEDBACKS</span></div>
      </AnimatedOnScroll>
    
<AnimatedOnScroll
 animationIn="fadeIn"
>
<div className="section mx-auto text-center slider-height-padding">
<input className="checkbox frst" type="radio" id="slide-1" name="slider" checked={currentSlideIndex === 0} />
<input className="checkbox scnd" type="radio" name="slider" id="slide-2" checked={currentSlideIndex === 1} />
<input className="checkbox thrd" type="radio" name="slider" id="slide-3" checked={currentSlideIndex === 2} />
<input className="checkbox foth" type="radio" name="slider" id="slide-4" checked={currentSlideIndex === 3} />

<ol ref={sliderListRef} className="slider-list">
  <menu>
   
  </menu>
  <menu>
    
  </menu>
  <menu>
    
  </menu>
  <menu>
  
  </menu>
</ol>

<button className="arrow prev" aria-label="Previous Slide" onClick={handlePrevClick}>&lt;</button>
<button className="arrow next" aria-label="Next Slide" onClick={handleNextClick}>&gt;</button>
</div>
</AnimatedOnScroll>
</div>
</>
   

  )
}

export default Banner
