import React from 'react'
import './MainTop.css'
import CarouselTop from '../CarouselTop/CarouselTop'

// images
import imgCarousel from '../../assets/images/ImgCarous1.png'
import kursHaqida from '../../assets/images/kursHaqida.svg'
import CarouselMain from '../CarouselMain/CarouselMain'
// images

// setInterval(function(){
//     document.querySelector('#MainBlockText').style.top = '-120%';
//     document.querySelector('#MainBlockText2').style.top = '0px';
//     document.querySelector("#span01").style.display = 'none'
//     document.querySelector("#span02").style.display = 'block'
// },4000)
// setInterval(function(){
//     document.querySelector('#MainBlockText').style.top = '0px';
//     document.querySelector('#MainBlockText2').style.top = '-120%';
//     document.querySelector("#span01").style.display = 'block'
//     document.querySelector("#span02").style.display = 'none'
// },8000)

// let textIndex = 1 ;
// function NewsRotator(){
//     (".MainBlockText").hide();
//     (".MainBlockText"+textIndex).show();
//     let newsCount = 5;
//     textIndex++;
//     if(textIndex > newsCount){
//         textIndex = 1;
//     }
// }
// (document).ready(function(){
//     NewsRotator();
//     setInterval(NewsRotator, 2200)
// });




function MainTop() {
  return (
    <div className='MainTopBlock'>
        <div className='TopTextBlock'>
            <h2 className='MainBlockText MainBlockText1 ' id='MainBlockText'>Qadriyatlarga asoslangan biznesni <br /> boshqarish kursi <span className="bir"> bir oylik dastur</span></h2>

            <div className='TopBtn'>
                <a href="#Footer"><button className='btnRoyhat'>Ro‘yxatdan o‘tish →</button></a>
                <div className='tochka'></div>
                <a href='#BigVideoTab'><img className="kursHaqida" src={kursHaqida}/></a>
            </div>
            
        </div>
        <div className='TopCarouselBlock'>
            {/* <CarouselMain/> */}
            <CarouselTop/>
            <div className='CarouselLow'>
                <h3 className='CarouselLowText'>Kozimxon To‘rayevning treninglaridan <br className='lavhalar'/>lavhalar</h3>
                <h4 className='firstCarousel'><span id="span01">01</span><span id='span02'>02</span><span className='allCarousel'>/02</span></h4>
            </div>
           
        </div>
    </div>
  )
}

export default MainTop
