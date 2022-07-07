import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import "./Footer.css"
import logo from '../../assets/navbarLogo/Logo.png'
import tg from '../../assets/images/f-tg.png'
import inst from '../../assets/images/f-inst.png'
import yout from '../../assets/images/f-yout.png'
import fb from '../../assets/images/f-fb.png'

// Icons
import { RiTelegramLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";


function Footer() {

    return (
        <div className='Footer' id='Footer'>
            <div className='container'>
                <div className='upperFooter'>
                    <h3 className='partTitle' >Kozimxon Turaev bilan kelajakda o‘z <br /> o‘rniga ega biznesingizni yarating!</h3>
                    <div className='footerForm'>
                        <div className='footerFormGrid'>
                            <div className='footerItem' >
                                <p>Ismingizni kiriting</p>
                                <input className='msgInput ' placeholder='F.I.Sh ...' />
                                <sub className="errorTxt">F.I.Sh notog‘ri kiritilgan!</sub>
                            </div>
                            <div className='footerItem' >
                                <p>Raqamingizni kiriting</p>
                                <input className='msgInput ' type="number" placeholder='Raqamingiz ...' />
                                <sub className="errorTxt">Raqamingiz notog‘ri kiritilgan!</sub>
                            </div>
                        </div>

                        <div className='footerFormGrid'>
                            <div className='footerItem' >
                                <p>Biznes sohangizni kiriting</p>
                                <input className='msgInput ' placeholder='Biznesingiz ...' />
                                <sub className="errorTxt">Raqamingiz notog‘ri kiritilgan!</sub>

                            </div>
                            <div className='footerItem'>
                                {/* <p></p> */}
                                <button className='footerbtn' >Ro‘yxatdan o‘tish →</button>
                                <sub></sub>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bigBox'>
                <div className="container">
                    <div className='underFooter'>
                        <div className='Navbar'>
                            <div className='logo'>
                                <img src={logo} />
                            </div>

                            <div className='MainNav'>
                                <ul className='MainNavLi'>
                                    <li className='footerLi'>Kurs haqida</li>
                                    <li className='footerLi'>Kurs o‘quv dasturi</li>
                                    <li className='footerLi'>O‘quvchilar fikri</li>
                                    <li className='footerLi'>Ustoz haqida</li>
                                </ul>
                            </div>

                            <div className='NumberNav'>
                                <h2>+998 33 383 73 13</h2>
                                <p className='kursgaYozilish'>KURSGA YOZILISH UCHUN</p>
                            </div>
                        </div>
                        <hr />
                        {/* <span className='underRow'></span> */}
                        <div className='footerLink'>
                            <p className='copyName'>© {' '} Kozimxon Turaev barcha huquqlar himoyalangan</p>
                            <p className='copyBrand'> by <a className='copyBrand' href=""> QWERTY al-Fajr</a> & <a className='copyBrand' href="">Socially Agency</a> </p>
                            <ul>
                                <li><a href="https://t.me/KozimxonTuraev"> <RiTelegramLine/> </a></li>
                                <li><a href="https://www.instagram.com/kozimxon_turaev"> <RiInstagramLine/> </a></li>
                                <li><a href="https://www.youtube.com/channel/UCsAjvumJ1T_5EW0792YQHTQ"> <RiYoutubeLine/> </a></li>
                                <li><a href="https://www.facebook.com/kozimhon"> <RiFacebookCircleLine/> </a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer