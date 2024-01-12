import React from "react";
import "./KouchDasturi.css";
import KouchD1 from "../../assets/images/KouchD1.png";
import KouchD2 from "../../assets/images/KouchD2.png";
import KouchD3 from "../../assets/images/KouchD3.png";
function KouchDasturi() {
  return (
    <div className="KouchDasturiBlock" id="KouchDasturiBlock">
      <div className="KouchDasturiText">
        <h2 className="KouchDText">Bu kurs kimlar uchun</h2>
      </div>
      <div className="KouchDasturiMini">
        <div className="KouchMiniBlocks">
          <img className="DasturImg" src={KouchD1} />
          <p className="DasturText">
            Kompaniyada HR tizimini joriy qilib, yuqori samaraga olib chiqishni
            istagan biznes egalari uchun.
          </p>
        </div>

        <div className="KouchMiniBlocks">
          <img className="DasturImg" src={KouchD2} />
          <p className="DasturText">
            Kompaniyada o'z qiymatini oshirmoqchi bo'lgan HR menejerlar uchun
          </p>
        </div>

        <div className="KouchMiniBlocks">
          <img className="DasturImg" src={KouchD3} />
          <p className="DasturText">
            Jamoani samarali boshqarishni xoxlagan ijrochi derektor (SEO) va top
            menejerlar uchun.
          </p>
        </div>
      </div>
      <hr className="hrDasturblock" />
    </div>
  );
}

export default KouchDasturi;
