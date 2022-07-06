import React from 'react'
import './KouchDasturi.css'
import KouchD1 from '../../assets/images/KouchD1.png'
import KouchD2 from '../../assets/images/KouchD2.png'
import KouchD3 from '../../assets/images/KouchD3.png'
function KouchDasturi() {
  return (
    <div className='KouchDasturiBlock' id="KouchDasturiBlock">
        <div className='KouchDasturiText'>
           <h2 className='KouchDText'> Kouching dasturi kimlar uchun?</h2>
        </div>
        <div className='KouchDasturiMini'>
            <div className='KouchMiniBlocks'>
                <img className='DasturImg' src={KouchD1}/>
                <p className='DasturText'>Biznesini zamonaviy va qadriyatlarga asoslangan holda boshqarmoqchi bo‘lgan biznes egalari uchun.</p>
            </div>

            <div className='KouchMiniBlocks'>
                <img className='DasturImg'src={KouchD2}/>
                <p className='DasturText'>Biznes egalari, o‘rta pog‘onadagi rahbarlar HR menejerlar va sherikchilikda ish yuritayotgan tadbirkorlar uchun.</p>
            </div>
            
            <div className='KouchMiniBlocks'>
                <img className='DasturImg' src={KouchD3}/>
                <p className='DasturText'>Xizmat ko‘rsatish tizimini rivojlantirish orqali savdoni oshirmoqchi bo‘lgan har bir tadbirkor uchun.</p>
            </div>
        </div>
      
    </div>
  )
}

export default KouchDasturi
