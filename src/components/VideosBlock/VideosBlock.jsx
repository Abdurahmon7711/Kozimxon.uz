import React, { useState } from "react";
import "./Videos.css";
import play from "../../assets/images/play.svg";
import stop from "../../assets/images/stop.svg";


function VideosBlock() {

    // const [isAcctive, setAcctive] = useState(true);
    // function onTab() {
    //     setAcctive(!isAcctive);
    // }

    function createDataAcc(icon, name, ssilka) {
        return { icon, name, ssilka };
    }

    const Tabmenu = [
        createDataAcc(play, 'Qadriyatlarga asoslangan biznesni boshqarish kursi ', 'https://www.youtube.com/embed/32si5cfrCNc?controls=1'),
        createDataAcc(play, 'HR meneger kim? ', 'https://www.youtube.com/embed/jvrDXVNEHwQ'),
        createDataAcc(play, 'Yaponiyaning KAIZEN sistemasi ', 'https://www.youtube.com/embed/jvrDXVNEHwQ'),
        createDataAcc(play, 'Moliya boshqaruvi ', 'https://www.youtube.com/embed/jvrDXVNEHwQ'),
        createDataAcc(play, 'Ko‘p yillik tajribaga ega ustoz ', 'https://www.youtube.com/embed/jvrDXVNEHwQ'),

    ]


    return (
        <div className="BigVideoTab">
            <div className="FonVideos">
                <div className="VideosBlock">
                    <div className="VideoTabs">
                        <div className="KouchLavhalar">
                            <h2 className="VideoLavhalar">
                                Kouching dasturidan video lavhalar
                            </h2>
                            <a className="LinkRoyhat" href="#">
                                Ro‘yxatdan o‘tish →
                            </a>
                        </div>
                        <div className="Videoss">
                            <div className="NavVideos">

                                {Tabmenu.map((cont, i) => {
                                    return (
                                        <div className="Tabmeuvd" >
                                            <button className='videosName' onClick={(e, element) => {
                                                if( e.currentTarget.className == 'videosName'){
                                                    e.currentTarget.className = 'videosName2';
                                                    e.currentTarget.querySelector('img').src = play;
                                                    document.getElementById('myplayer').innerHTML = `<iframe class='firstVideo' if='videoiframe' src=${cont.ssilka}></iframe>`;

                                                } else {
                                                    e.currentTarget.className = 'videosName';
                                                    e.currentTarget.querySelector('img').src = stop;
                                                    document.getElementById('myplayer').innerHTML = "";
                                                }
                                            }}>
                                                <img src={stop} />
                                                <p className="VideosText">{cont.name}</p>
                                            </button>
                                        </div>
                                    )
                                })
                                }
                            </div>
                            <div className='player' id='myplayer'  >
                                <iframe className='firstVideo' if='videoiframe' src='https://www.youtube.com/embed/jvrDXVNEHwQ'>

                                </iframe>
                            </div>
                            

                        </div>
                    </div>




                    {/* 
                    <button className="videosName">
                        
                      
                    </button>
                    <button className="videosName2">
                        <img src={stop} />
                        <p className="VideosText">HR meneger kim?</p>
                    </button>
                    <button className="videosName2">
                        <img src={stop} />
                        <p className="VideosText">Yaponiyaning KAIZEN sistemasi</p>
                    </button>
                    <button className="videosName2">
                        <img src={stop} />
                        <p className="VideosText">Moliya boshqaruvi</p>
                    </button>
                    <button className="videosName2">
                        <img src={stop} />
                        <p className="VideosText">Ko‘p yillik tajribaga ega ustoz</p>
                    </button>
                    </div>
                    
                 */}
                </div>
            </div>

        </div>
        // </div >
    );
}

export default VideosBlock;
