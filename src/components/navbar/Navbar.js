import React from 'react'
import './navbar.css'
import logo from '../../assets/images/Logo.png'
import logoImg from '../../assets/images/LogoImg.svg'
import KouchDasturi from '../KouchDasturi/KouchDasturi'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='logo'>
        <img src={logoImg}/>
        <div className='LogoBlock'>
          <h2 className='LogoText'>KOZIMXON TURAEV</h2>
          <p className='LogoLowText'>BIZNES BOSHQARUV</p>
        </div>
      </div>
      
      <div className='MainNav'>
            <ul className='MainNavLi'>
                <a href="#KouchDasturiBlock"><li>Kurs haqida</li></a>
                <a href="#KouchAccor"><li>Kurs o‘quv dasturi</li></a>
                <a href="#CarouselVideos"><li>O‘quvchilar fikri</li></a>
                <a href="#WhoBlock"><li>Ustoz haqida</li></a>
            </ul>
      </div>

      <div className='NumberNav'>
        <h2>+998 33 383 73 13</h2>
        <p className='kursgaYozilish'>KURSGA YOZILISH UCHUN</p>
      </div>
    </div>
  )
}

export default Navbar
