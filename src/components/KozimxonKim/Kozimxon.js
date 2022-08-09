import React from "react";

import "../WhoBlock/WhoBlock.css";

// import BlockCard1 from '../../assets/images/BlockCard1.png'
// import BlockCard2 from '../../assets/images/BlockCard2.png'
// import BlockCard3 from '../../assets/images/BlockCard3.png'
// import BlockCard4 from '../../assets/images/BlockCard4.png'
import Kozimxon1 from "../../assets/images/Kozimxon1.JPG";
import Kozimxon2 from "../../assets/images/Kozimxon2.JPG";
import Kozimxon3 from "../../assets/images/Kozimxon3.JPG";
import { ReactComponent as Ustoz1 } from "../../assets/images/ustoz1.svg";
import { ReactComponent as Ustoz2 } from "../../assets/images/ustoz2.svg";
import { ReactComponent as Ustoz3 } from "../../assets/images/ustoz3.svg";



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
                <Ustoz1 className='icons' />
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
                <Ustoz2 className='icons' />
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
                <Ustoz3 className='icons' />
              </div>
              <div className="textCard">
                <p className="CardSecondText" id="CardSecondBlock">
                  Hozirda qadriyatlar akademiyasining asoschisi. Ko'plab mavzularda trening va konsulting xizmatlarini ko'rsatib kelmoqda.
                </p>
              </div>
            </div>
            <img className="whoblockImg" src={Kozimxon3} />
          </div>
        </div>
      </div>
      <a href="#Footer" className="whoBtnLink"><button className='btnRoyhat' id="WhoButton">Ro‘yxatdan o‘tish →</button></a>
    </div>
  );
}

export default Kozimxon;
