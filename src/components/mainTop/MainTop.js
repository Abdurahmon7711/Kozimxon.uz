import React from 'react'
import './MainTop.css'
import CarouselMain from '../CarouselMain/CarouselMain'
// images
import imgCarousel from '../../assets/images/ImgCarous1.png'
import kursHaqida from '../../assets/images/kursHaqida.svg'
// images
function MainTop() {
  return (
    <div className='MainTopBlock'>
        <div className='TopTextBlock'>
            <h2>Qadriyatlarga asoslangan biznesni boshqarish <span className="bir"> bir oylik kouching dasturi</span></h2>
            <div className='TopBtn'>
                <button className='btnRoyhat'>Ro‘yxatdan o‘tish →</button>
                <a href='ss'><img className="kursHaqida" src={kursHaqida}/></a>
            </div>
            
        </div>
        <div className='TopCarouselBlock'>
            {/* <img className="FirstImgCarousel" src={imgCarousel}/> */}
            <CarouselMain className="CarouselMainTop"/>
            <div className='CarouselLow'>
                <h3 className='CarouselLowText'>Kozimxon To‘rayevning treninglaridan lavhalar</h3>
                <h4 className='firstCarousel'>01<span className='allCarousel'>/03</span></h4>
            </div>
           
        </div>
    </div>
  )
}

export default MainTop
