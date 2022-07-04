import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Footer.css"
import logo from '../../assets/navbarLogo/Logo.png'

function Footer() {
    return (
        <div className='container'>
            <div className='upperFooter'>
                <h3 className='partTitle' >Kozimxon Turaev bilan kelajakda o‘z o‘rniga ega biznesingizni yarating!</h3>
                <div className='footerForm'>
                    <div className='footerItem' >
                        <p>Ismingizni kiriting</p>
                        <input placeholder='Ismingiz ...' />
                    </div>
                    <div className='footerItem' >
                        <p>Raqamingizni kiriting</p>
                        <input type="number" placeholder='Raqamingiz ...' />
                    </div>
                    <div className='footerItem' >
                        <p>Biznes sohangizni kiriting</p>
                        <input placeholder='Biznesingiz ...' />
                    </div>
                    <div className='footerItem'>
                        <p></p>
                        <button className='footerbtn' >Ro‘yxatdan o‘tish →</button>
                    </div>
                </div>
            </div>
            <div className='underFooter'>
                
            </div>
        </div>
    )
}
export default Footer