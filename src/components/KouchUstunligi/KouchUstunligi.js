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
          <div className="Card" id="ustunlikCard">
              <div id="empty"></div>
              <div className="iconCard"><img src={Ustunlik1}/></div>
              <div className="textCard">
              {/* <h2 className="CardFirstText">Xodimlarni boshqarishda muammoga uchrayapsizmi?</h2> */}
              <p className="CardSecondText">
              - Amerika, Yaponiya, Evropa mamlakatlaridan olingan zamonaviy ilm va Saudia Arabistonidagi Islom Taraqqiyot Bankidan olingan Islomiy Moliya bilimlari jamlangan. 
Hozirgi kunda biznesda muvaffaqiyatli bo'lish uchun zamonaviy va qadriyatlarga asoslangan ilmlarni bilish lozim.
              </p>
              </div>
          </div>
          
          <div className="Card">
              <div id="empty"></div>
              <div className="iconCard"><img src={Ustunlik2}/></div>
              <div className="textCard">
              {/* <h2 className="CardFirstText">Xodimlarni boshqarishda muammoga uchrayapsizmi?</h2> */}
              <p className="CardSecondText">
              Dasturda kompaniyangizda qo'llashingiz mumkin bo'lgan instrumentlar va shablonlar, muammoli masalalar uchun mentorlar yordami mavjud.
              </p>
              </div>
          </div>

          <div className="Card">
              <div id="empty"></div>
              <div className="iconCard"><img src={Ustunlik3}/></div>
              <div className="textCard">
              {/* <h2 className="CardFirstText">Xodimlarni boshqarishda muammoga uchrayapsizmi?</h2> */}
              <p className="CardSecondText">
              Har bir narsani mutaxasisdan o'rganish afzal! Kozimxon Turaev Aynan siz qidirgan xalqaro darajadagi mutaxasis! Xodimlar bilan ishlash va moliya sohalarida 20 yillik tajribaga egadir. Procter &Gamble distributorlik kompaniyasida, Islom Taraqqiyot Bankida HR menejer lavozimlarida faoliyat yuritgan.
              </p>
              </div>
          </div>
      </div>
      <a href="#Footer"><p className="LinkRoyhat" id="LinkRoyhat">Ro‘yxatdan o‘tish →</p></a>

    </div>
  );
}

export default KouchUstunligi;
