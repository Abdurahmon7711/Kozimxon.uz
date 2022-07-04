import React from 'react'
import './MainTop.css'

// images
import imgCarousel from '../../assets/images/ImgCarous1.png'
import kursHaqida from '../../assets/images/kursHaqida.svg'
// images
function MainTop() {
  return (
    <div className='MainTopBlock'>
        <div className='TopTextBlock'>
            <h2>Qadriyatlarga asoslangan biznesni boshqarish bir oylik kouching dasturi</h2>
            <div className='TopBtn'>
                <button className='btnRoyhat'>Ro‘yxatdan o‘tish →</button>
                <a href='ss'><img className="kursHaqida" src={kursHaqida}/></a>
            </div>
            
        </div>
        <div className='TopCarouselBlock'>
            <img src={imgCarousel}/>
        </div>

      
    </div>
  )
}

export default MainTop
