import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
// import swal from '@sweetalert/with-react'
import swal from "sweetalert";

import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Footer.css";
import logo from "../../assets/navbarLogo/Logo.png";
import Axios from "axios";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Icons
import tg from "../../assets/images/f-tg.png";
import inst from "../../assets/images/f-inst.png";
import yout from "../../assets/images/f-yout.png";
import fb from "../../assets/images/f-fb.png";
import { RiTelegramLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";






const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function Footer() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function registeramocrm(name, number, work_place) {
    const headers = new Headers({
      "Content-Type": "x-www-form-urlencoded",
      "X-CSRFToken": "{{csrf_token}}",
    });

    const res = await fetch("/register", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        name,
        number,
        work_place,
      }),
    });
  }

  const [headers, setHeaders] = useState({
    name: "",
    number: "",
    work_place: "",
  });
  function handle(e) {
    const newheaders = { ...headers };
    newheaders[e.target.id] = e.target.value;
    setHeaders(newheaders);
    // console.log(newheaders)
  }
  async function submit(e) {
    e.preventDefault();
    await registeramocrm(headers.name, headers.number, headers.work_place);

    // swal({
    //   title: "Siz Muvaffaqiyatli ro'yxatdan o'tdingiz!",
    //   icon: "success",
    //   button: "Rahmat!",
    // });

  }

  function Top() {
    // window.scrollTo(0, 0);
    if (document.querySelector('#work_place').value != ' ' && document.querySelector('#name').value != ' ' && document.querySelector('#number').value != "") {
      swal({
        title: "Siz Muvaffaqiyatli ro'yxatdan o'tdingiz!",
        icon: "success",
        button: "Rahmat!",
      });
    }

  }

  return (
    <div className="Footer" id="Footer">
      <div className="container">
        <div className="upperFooter">
          <h3 className="partTitle">
            {/* Kozimxon Turaev bilan kelajakda o‘z o‘rniga ega biznesingizni */}
            {/* yarating! */}
            Kozimxon Turayev bilan  muvaffaqiyatli <br /> va barakali biznesingizni yarating
          </h3>

          <div className="footerForm">
            <form className="footerFormData" onSubmit={async (e) => {
              e.preventDefault();
              let data = {
                name: headers.name,
                number: headers.number,
                work_place: headers.work_place,
              }


              let url = new URL('/register');
              for (let k in data) {
                url.searchParams.append(k, data[k]);
              }
              console.log(url.href)
              const res = fetch(url.href);
              console.log((await res).status);
            }}>

              <div className="footerFormGrid">
                <div className="footerItem">
                  <p>Ismingizni kiriting</p>
                  <input
                    onChange={(e) => handle(e)}
                    id="name"
                    name="name"
                    value={headers.name}
                    className="msgInput"
                    placeholder="F.I.Sh ..."
                    required
                  />

                  <sub className="errorTxt">F.I.Sh notog‘ri kiritilgan!</sub>
                </div>
                <div className="footerItem">
                  <p>Raqamingizni kiriting</p>
                  <input
                    onChange={(e) => handle(e)}
                    id="number"
                    name="number"
                    value={headers.number}
                    className="msgInput"
                    type="phone"
                    placeholder="Raqamingiz ..."
                    required

                    onKeyDown={(e) => {
                      // console.log(e.key);
                      // return false if key is not a number
                      if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter'].indexOf(e.key) !== -1) {
                        return;
                      }
                      if (!e.key.match(/[0-9]/)) {
                        e.preventDefault();
                      }

                    }}

                  />

                  <sub className="errorTxt">Raqamingiz notog‘ri kiritilgan!</sub>
                </div>
              </div>

              <div className="footerFormGrid">
                <div className="footerItem">
                  <p>Biznes sohangizni kiriting</p>
                  <input
                    onChange={(e) => handle(e)}
                    id="work_place"
                    name="work_place"
                    value={headers.work_place}
                    className="msgInput"
                    placeholder="Biznesingiz ..."
                    required

                  />

                  <sub className="errorTxt">Raqamingiz notog‘ri kiritilgan!</sub>
                </div>

                <div className="footerItem">
                  {/* <p></p> */}
                  <button className="footerbtn" onClick={Top} type="submit"  >Ro‘yxatdan o‘tish →</button>
                  <sub></sub>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
      <div className="bigBox">
        <div className="container">
          <div className="underFooter">
            <div className="Navbar" id="footerNav">
              <div className="logo">
                <a href="#">
                  <img src={logo} />
                </a>
              </div>

              <div className="MainNav">
                <ul className="MainNavLi">
                  <a href="#KouchDasturiBlock">
                    <li>Kurs haqida</li>
                  </a>
                  <a href="#bigBox">
                    <li>Kurs o‘quv dasturi</li>
                  </a>
                  <a href="#carVid">
                    <li>O‘quvchilar fikri</li>
                  </a>
                  <a href="#WhoBlock">
                    <li>Ustoz haqida</li>
                  </a>
                </ul>
              </div>

              <div className="NumberNav">
                <a className="telPhone" href="tel:+998333837313">
                  <h2>+998 33 383 73 13</h2>
                </a>
                <p className="kursgaYozilish">KURSGA YOZILISH UCHUN</p>
              </div>
            </div>
            <hr className="footerNavHR" />
            {/* <span className='underRow'></span> */}
            <div className="footerLink">
              <p className="copyBrand" id="copyBrand">by
                <a target="_blank" className="copyBrand" id="copyBrand" href="">{" "}QWERTY al-Fajr</a>&
                <a target="_blank" className="copyBrand" id="copyBrand" href="">Socially Agency</a></p>
              <p className="copyName">© Kozimxon Turaev barcha huquqlar himoyalangan</p>
              <hr className="footerHR" />
              <p className="copyBrand">{" "}by{" "}
                <a target="_blank" className="copyBrand" href="https://instagram.com/afshon_official">{" "}QWERTY al-Fajr</a>{" "}&{" "}
                <a target="_blank" className="copyBrand" href="">Socially Agency</a>{" "}</p>
              <ul>
                <li>
                  <a target="_blank" href="https://t.me/KozimxonTuraev">
                    {" "}
                    <RiTelegramLine />{" "}
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/kozimxon_turaev">
                    {" "}
                    <RiInstagramLine />{" "}
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.youtube.com/channel/UCsAjvumJ1T_5EW0792YQHTQ">
                    {" "}
                    <RiYoutubeLine />{" "}
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.facebook.com/kozimhon">
                    {" "}
                    <RiFacebookCircleLine />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;