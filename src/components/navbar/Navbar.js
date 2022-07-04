import React from 'react'
import './navbar.css'
import logo from '../../assets/images/Logo.png'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='logo'>
        <img src={logo}/>
      </div>
      
      <div className='MainNav'>
            <ul className='MainNavLi'>
                <li>Kurs haqida</li>
                <li>Kurs o‘quv dasturi</li>
                <li>O‘quvchilar fikri</li>
                <li>Ustoz haqida</li>
            </ul>
      </div>

      <div className='NumberNav'>
        <h2>+998 33 383 73 13</h2>
        <p>KURSGA YOZILISH UCHUN</p>
      </div>
    </div>
  )
}

export default Navbar
