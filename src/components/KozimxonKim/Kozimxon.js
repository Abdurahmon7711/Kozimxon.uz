import React from "react";

import "../WhoBlock/WhoBlock.css";

// import BlockCard1 from '../../assets/images/BlockCard1.png'
// import BlockCard2 from '../../assets/images/BlockCard2.png'
// import BlockCard3 from '../../assets/images/BlockCard3.png'
// import BlockCard4 from '../../assets/images/BlockCard4.png'
import Kozimxon1 from "../../assets/images/Kozimxon1.JPG";
import Kozimxon2 from "../../assets/images/Kozimxon2.JPG";
import Kozimxon3 from "../../assets/images/Kozimxon3.JPG";
import ustoz1 from "../../assets/images/ustoz1.svg";
import ustoz2 from "../../assets/images/ustoz2.svg";
import ustoz3 from "../../assets/images/ustoz3.svg";
import nonustoz1 from "../../assets/images/who1.svg";
import nonustoz2 from "../../assets/images/who2.svg";
import nonustoz3 from "../../assets/images/who3.svg";

const who1 =[
  {
    "color": ustoz1,
    "noncolor": nonustoz1
  }
]
const who2 =[
  {
    "color": ustoz2,
    "noncolor": nonustoz2
  }
]
const who3 =[
  {
    "color": ustoz3,
    "noncolor": nonustoz3
  }
]

function Kozimxon() {
  return (
    <div className="WhoBlock" id="WhoBlock">
      <div className="WhoTopBlock">
        <div className="WhoBlockText">Dastur ustozi Kozimxon Turayev kim?</div>
        <a className="LinkRoyhat" id="WhoLink" href="#Footer">
          Ro‘yxatdan o‘tish →
        </a>
      </div>

      <div className="WhoBlockBlocks">
        <div className="UstozBlocks">
          <div className="Complect">
            <div className="Card" id="BlockCard">
              <div id="empty"></div>
              <div className="iconCard">
 
                {who1.map(({ color, noncolor }, index) => {
                        return (
                            <div className='icons'
                                onMouseEnter={(e) => {
                                    e.target.src = color;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.src = noncolor;
                                }}><img className='icons' src={noncolor} />
                            </div>
                        )
                    })}





              </div>
              <div className="textCard">
                <p className="CardSecondText" id="CardSecondBlock">
                  Kozimxon Turayev xalqaro tajribaga ega biznes trener va
                  konsultant bo‘lib, AQSH, Yaponiya va Yevropada taʼlim olgan.
                  Procter & Gamble distribyutorlik kompaniyasida HR Menedjer
                  lavozimida ishlagan.
                </p>
              </div>
            </div>
            <img className="whoblockImg" src={Kozimxon2} />
          </div>

          <div className="Complect">
            <div className="Card" id="BlockCard">
              <div id="empty"></div>
              <div className="iconCard">
              {who2.map(({ color, noncolor }, index) => {
                        return (
                            <div className='icons'
                                onMouseEnter={(e) => {
                                    e.target.src = color;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.src = noncolor;
                                }}><img className='icons' src={noncolor} />
                            </div>
                        )
                    })}
              </div>
              <div className="textCard">
                <p className="CardSecondText" id="CardSecondBlock">
                  2012 – 2018 yillarda Saudiya Arabistonida joylashgan Islom
                  Taraqqiyot Bankida avval HR bo‘limida, so‘ngra Investitsiya
                  bo‘limida faoliyat olib borgan.
                </p>
              </div>
            </div>
            <img className="whoblockImg" src={Kozimxon1} />
          </div>

          <div className="Complect">
            <div className="Card" id="BlockCard">
              <div id="empty"></div>
              <div className="iconCard">
              {who3.map(({ color, noncolor }, index) => {
                        return (
                            <div className='icons'
                                onMouseEnter={(e) => {
                                    e.target.src = color;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.src = noncolor;
                                }}><img className='icons' src={noncolor} />
                            </div>
                        )
                    })}
              </div>
              <div className="textCard">
                <p className="CardSecondText" id="CardSecondBlock">
                  Hozirda IsBF kompaniyasining asoschilaridan biri va ko‘plab
                  mavzularda trening va konsalting hizmatlarini ko‘rsatib
                  kelmoqda.
                </p>
              </div>
            </div>
            <img className="whoblockImg" src={Kozimxon3} />
          </div>
        </div>
      </div>
      <a href="#Footer"><button className='btnRoyhat' id="WhoButton">Ro‘yxatdan o‘tish →</button></a>
    </div>
  );
}

export default Kozimxon;
