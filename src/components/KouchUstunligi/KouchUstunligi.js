import React from "react";
import "./KouchUstun.css";
import Ustunlik1 from '../../assets/images/Ustunlik1.png'
import Ustunlik2 from '../../assets/images/Ustunlik2.png'
import Ustunlik3 from '../../assets/images/Ustunlik3.png'

function KouchUstunligi() {
  return (
    <div className="KouchUstunligi">
      <div className="TopCards">
        <h2 className="TopCardsText">Kouching dasturining ustunligi nimada?</h2>
        <a href="#Footer"><p className="LinkRoyhat">Ro‘yxatdan o‘tish →</p></a>
      </div>
        
      <div className="Cards">
          <div className="Card">
              <div id="empty"></div>
              <div className="iconCard"><img src={Ustunlik1}/></div>
              <div className="textCard">
              <h2 className="CardFirstText">Xodimlarni boshqarishda muammoga uchrayapsizmi?</h2>
              <p className="CardSecondText">
                Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.
              </p>
              </div>
          </div>
          
          <div className="Card">
              <div id="empty"></div>
              <div className="iconCard"><img src={Ustunlik2}/></div>
              <div className="textCard">
              <h2 className="CardFirstText">Xodimlarni boshqarishda muammoga uchrayapsizmi?</h2>
              <p className="CardSecondText">
                Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.
              </p>
              </div>
          </div>

          <div className="Card">
              <div id="empty"></div>
              <div className="iconCard"><img src={Ustunlik3}/></div>
              <div className="textCard">
              <h2 className="CardFirstText">Xodimlarni boshqarishda muammoga uchrayapsizmi?</h2>
              <p className="CardSecondText">
                Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.
              </p>
              </div>
          </div>
      </div>
      <a href="#Footer"><p className="LinkRoyhat" id="LinkRoyhat">Ro‘yxatdan o‘tish →</p></a>

    </div>
  );
}

export default KouchUstunligi;
