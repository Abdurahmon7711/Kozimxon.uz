import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/images/Icon.png';
import { CgMenuGridO } from "react-icons/cg";
import { FaAngleLeft } from 'react-icons/fa';
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

function Navbar() {

  const [isAcctive, setAcctive] = useState(true);
  function onMenu() {
    setAcctive(!isAcctive);
  }
  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
  }


  return (
    <div className='NavFon'>
    <div className='Navbar'id='Navbar' 
    style={scrollY > 10 ? { marginTop: "112px" } : {}}>
      <div className='logo'>
        <a href="#"><img src={logo} /></a>
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
        <a className='telPhone' href="tel:+998333837313"><h2>+998 33 383 73 13</h2></a>
        <p className='kursgaYozilish'>kursga yozilish uchun</p>
      </div>

      <div className="menuGridTemp" onClick={onMenu}>
        <MdOutlineMenu className={isAcctive ? "MenuGrid" : "CloseMenuGrid"} />
        <MdOutlineClose className={isAcctive ? "CloseMenuGrid" : "MenuGrid"} />
      </div>
      <div className={isAcctive ? 'menu' : 'menuMob'}>
        <div className="innerMenuMob">
          <div className="topMenuLinks">
            <div className={ isAcctive ? 'MainNav' : 'MainNavActive '}>
              <ul className={ isAcctive ? 'MainNavLi': 'MainNavLiActive' }>
              
                <a href="#KouchDasturiBlock"><li>Kurs haqida</li></a>
              
                <a href="#bigBox"><li>Kurs o‘quv dasturi</li></a>
              
                <a href="#carVid"><li>O‘quvchilar fikri</li></a>
              
                <a href="#WhoBlock"><li>Ustoz haqida</li></a>
              </ul>
            </div>

            <div className={isAcctive ? 'NumberNav' : 'NumberNavActive'} 

            >
              <a className='telPhone' href="tel:+998333837313"><h2>+998 33 383 73 13</h2></a>
              <p className='kursgaYozilish'>kursga yozilish uchun</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Navbar
