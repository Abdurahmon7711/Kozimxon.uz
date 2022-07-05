import React from 'react'
import './CarouselMain.css'
import Carousel from 'framer-motion-carousel'
import imgCarousel from '../../assets/images/ImgCarous1.png'
import Kozimxon from '../../assets/images/Kozimxon.png'

function CarouselMain() {
  return (
    <div className='CarouselMain'>
        <div  className="CarouselSize" style={{ width: "786px", height: "450px"}}>
    <Carousel>
        {[imgCarousel,imgCarousel].map((item, i) => (
        <img
            draggable="false"
            src={`${item}`}
            key={i}
            width="100%"
            height="100%"
            alt=""
        />
        ))}
    </Carousel>
    </div>
  
</div>
  )
}

export default CarouselMain
