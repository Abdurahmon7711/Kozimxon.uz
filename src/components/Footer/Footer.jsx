import React,{useState, useEffect} from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import "./Footer.css"
import logo from '../../assets/navbarLogo/Logo.png'
import tg from '../../assets/images/f-tg.png'
import inst from '../../assets/images/f-inst.png'
import yout from '../../assets/images/f-yout.png'
import fb from '../../assets/images/f-fb.png'
import Axios from 'axios'
// Icons
import { RiTelegramLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";



function Footer() {
    

    const [headers, setHeaders] = useState({
        name:"",
        number: "",
        work_place: ""
    })
    function handle(e){
        const newheaders={...headers}
        newheaders[e.target.id] = e.target.value
        setHeaders(newheaders)
        // console.log(newheaders)

    }
    function submit(e){
        e.preventDefault();
        Axios.post("http://146.190.225.174:4000/register",{
            name: headers.name,
            number: headers.number,
            work_place: headers.work_place
        })
        .then(res=>{
            console.log(res.headers)
        })
        window.scrollTo(0,0)
        // window.location.reload();
    }

    return (
        <div className='Footer' id='Footer'>
            <div className='container'>
                <div className='upperFooter'>
                    <h3 className='partTitle' >Kozimxon Turaev bilan kelajakda o‘z <br /> o‘rniga ega biznesingizni yarating!</h3>
                    <div className='footerForm'>
                  
                        <div className='footerFormGrid'>
                            <div className='footerItem' >
                                <p>Ismingizni kiriting</p>
                                <form onSubmit={(e)=>submit(e)}>
                                    <input  onChange={(e)=>handle(e)} id="name" value={headers.name} className='msgInput'  placeholder='F.I.Sh ...' />
                                </form>

                                <sub className="errorTxt">F.I.Sh notog‘ri kiritilgan!</sub>
                            </div>
                            <div className='footerItem' >
                                <p>Raqamingizni kiriting</p>
                                <form onSubmit={(e)=>submit(e)}>
                                    <input onChange={(e)=>handle(e)} id="number" value={headers.number} className='msgInput'  type="number" placeholder='Raqamingiz ...' />
                                </form>

                                <sub className="errorTxt">Raqamingiz notog‘ri kiritilgan!</sub>
                            </div>
                        </div>

                        <div className='footerFormGrid'>
                            <div className='footerItem' >
                                <p>Biznes sohangizni kiriting</p>
                                <form onSubmit={(e)=>submit(e)}>
                                    <input onChange={(e)=>handle(e)} id="work_place" value={headers.work_place} className='msgInput'  placeholder='Biznesingiz ...' />
                                </form>

                                <sub className="errorTxt">Raqamingiz notog‘ri kiritilgan!</sub>

                            </div>
                            <div className='footerItem'>
                                {/* <p></p> */}
                                <form onSubmit={(e)=>submit(e)}>
                                <button className='footerbtn' >Ro‘yxatdan o‘tish →</button>
                                </form>
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
                                <a href="#"><img src={logo} /></a>
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