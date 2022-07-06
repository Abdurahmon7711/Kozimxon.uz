import React from 'react'
import './navbar.css'
import logo from '../../assets/images/Icon.png'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='logo'>
        <a href="#"><img src={logo}/></a>
        <a href="#"><div className='LogoTextBlock'>
          <h3 className='LogoText'>Kozimxon Turaev</h3>
          <p className='LogoLowText'>BIZNES BOSHQARUV</p>
          </div>
        </a>
      </div>
      
      <div className='MainNav'>
            <ul className='MainNavLi'>
              <a href="#KouchDasturiBlock"><li>Kurs haqida</li></a>
              <a href="#bigBox"><li>Kurs o‘quv dasturi</li></a>
              <a href="#carVid"><li>O‘quvchilar fikri</li></a>
              <a href="#WhoBlock"><li>Ustoz haqida</li></a>
            </ul>
      </div>

      <div className='NumberNav'>
        <h2>+998 33 383 73 13</h2>
        <p className='kursgaYozilish'>kursga yozilish uchun</p>
      </div>
    </div>
  )
}

export default Navbar
