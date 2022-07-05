import React from 'react'
import './WhoBlock.css'
import Kozimxon from '../../assets/images/Kozimxon.png'
import BlockCard1 from '../../assets/images/BlockCard1.png'
import BlockCard2 from '../../assets/images/BlockCard2.png'
import BlockCard3 from '../../assets/images/BlockCard3.png'
import BlockCard4 from '../../assets/images/BlockCard4.png'

function WhoBlock() {
  return (
    <div className='WhoBlock container'>
        <div className='WhoBlockText'>Dastur ustozi Kozimxon Turayev o‘zi kim?</div>
        <div className='WhoBlockBlocks'>
            <div className='WhoLeftBlocks'>
                <div className='WhoBLockCards'>
                    <div className="Card" id="BlockCard">
                        <div id="empty"></div>
                        <div className="iconCard"><img src={BlockCard1}/></div>
                        <div className="textCard">
                            <p className="CardSecondText" id="CardSecondBlock">
                            Kozimxon Turayev xalqaro tajribaga ega biznes trener va konsultant bo‘lib, AQSH, Yaponiya va Yevropada taʼlim olgan.
                            </p>
                        </div>
                    </div>

                    <div className="Card" id="BlockCard">
                        <div id="empty"></div>
                        <div className="iconCard"><img src={BlockCard2}/></div>
                        <div className="textCard">
                            <p className="CardSecondText" id="CardSecondBlock">
                                Procter & Gamble distribyutorlik kompaniyasida HR Menedjer lavozimida ishlagan.
                            </p>
                        </div>
                    </div>

                    <div className="Card" id="BlockCard">
                        <div id="empty"></div>
                        <div className="iconCard"><img src={BlockCard3}/></div>
                        <div className="textCard">
                            <p className="CardSecondText" id="CardSecondBlock">
                                2012 – 2018 yillarda Saudiya Arabistonida joylashgan Islom Taraqqiyot Bankida avval HR bo‘limida, so‘ngra Investitsiya bo‘limida faoliyat olib borgan.
                            </p>
                        </div>
                    </div>
                    
                    <div className="Card" id="BlockCard">
                        <div id="empty"></div>
                        <div className="iconCard"><img src={BlockCard4}/></div>
                        <div className="textCard">
                            <p className="CardSecondText" id="CardSecondBlock">
                                Hozirda IsBF kompaniyasining asoschilaridan biri va ko‘plab mavzularda trening va konsalting hizmatlarini ko‘rsatib kelmoqda.
                            </p>
                        </div>
                    </div>
                        

                </div>
                <button className='btnRoyhat' id="btnRoyhat">Ro‘yxatdan o‘tish →</button>
            </div>

            <div className='WhoImgBlock'>
                <img src={Kozimxon}/>
            </div>
        </div>
    </div>
  )
}

export default WhoBlock
