import React from 'react'
import './CarouselTop.css'
import imgCarousel1 from "../../assets/images/ImgCarous1.png"

function CarouselTop() {
    // type="text/javascript"
    let counter = 2;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 2){
        counter = 1;
      }
    }, 4000);
  return (
    <div>
    <div className="slider">
      <div className="slides">
        <input type="radio" name="radio-btn" id="radio1"/>
        <input type="radio" name="radio-btn" id="radio2"/>
      
       <div className="slide first">
          <img className='imgCarousels' src={imgCarousel1} alt=""/>
        </div>
        <div className="slide">
          <img className='imgCarousels' src={imgCarousel1} alt=""/>
        </div>
       
 
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          
        </div>
   
      </div>
      <div className="navigation-manual">
        <label for="radio1" className="manual-btn"></label>
        <label for="radio2" className="manual-btn"></label>
   
      </div>
    </div>

  
    
    </div>
  )
}

export default CarouselTop
