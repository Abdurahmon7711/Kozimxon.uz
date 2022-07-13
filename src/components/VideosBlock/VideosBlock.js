import React, { useState } from "react";
import "./Videos.css";
import play from "../../assets/images/play.svg";
import stop from "../../assets/images/stop.svg";
const fetch = require('sync-fetch');
// import fetch from "sync-fetch";


function VideosBlock() {
    /**
     * @return {Array}
     */

    function getVideos() {
        const headers = new Headers({
          "Content-Type": "x-www-form-urlencoded",
          "X-CSRFToken": "{{csrf_token}}",
        });
    
            const res = fetch("/videos");
            
            return res.json().data;
    //         return [
    //                 {
    //                     name: 'Qadriyatlarga asoslangan biznesni boshqarish kursi',
    //                     url: 'https://www.youtube.com/embed/XsBil1zbVOc'
    //                 },
    //                 {
    //                     name: 'HR meneger kim?',
    //                     url: 'https://www.youtube.com/embed/Zra33_gCgxQ'
    //                 },
    //                 {
    //                     name: 'Yaponiyaning KAIZEN sistemasi',
    //                     url: 'https://www.youtube.com/embed/tk_2n-mZGNc'
    //                 },
    //                 {
    //                     name: 'Moliya boshqaruvi',
    //                     url: 'https://www.youtube.com/embed/Evfj7JMjR1Q'
    //                 },
    //                 {
    //                     name: 'Ko‘p yillik tajribaga ega ustoz',
    //                     url: 'https://www.youtube.com/embed/0nZnBncSkZE'
    //                 }
    //             ]
            
    }

    function createDataAcc(icon, name, ssilka) {
        return { icon, name, ssilka };
    }

    // const Tabmenu = [
    //     createDataAcc(play, 'Qadriyatlarga asoslangan biznesni boshqarish kursi ', 'https://www.youtube.com/embed/XsBil1zbVOc?controls=1'),
    //     createDataAcc(play, 'HR meneger kim? ', 'https://www.youtube.com/embed/Zra33_gCgxQ'),
    //     createDataAcc(play, 'Yaponiyaning KAIZEN sistemasi ', 'https://www.youtube.com/embed/tk_2n-mZGNc'),
    //     createDataAcc(play, 'Moliya boshqaruvi ', 'https://www.youtube.com/embed/Evfj7JMjR1Q'),
    //     createDataAcc(play, 'Ko‘p yillik tajribaga ega ustoz ', 'https://www.youtube.com/embed/0nZnBncSkZE'),

    // ]
    const Tabmenu = [];
    const videos = getVideos();
    // console.log(videos);
    // const videos = await getVideos();
    // console.log(videos)
    // videos.forEach((video, i) => {
    //     console.log(video)
    //     Tabmenu.push(createDataAcc(
    //         play, video.title,
    //         video.url
    //     ))
    // });


    return (
        <div className="BigVideoTab" id="BigVideoTab">
            <div className="FonVideos">
                <div className="VideosBlock">
                    <div className="VideoTabs">
                        <div className="KouchLavhalar">
                            <h2 className="VideoLavhalar">
                                Kouching dasturidan video lavhalar
                            </h2>
                            <a className="LinkRoyhat" href="#Footer">
                                Ro‘yxatdan o‘tish →
                            </a>
                        </div>
                        <div className="Videoss">
                            <div className="NavVideos">

                                {videos.map((cont, i) => {
                                    return (
                                        <div className="Tabmeuvd" >
                                            <button className='videosName' onClick={(e, element) => {
                                                if( e.currentTarget.className == 'videosName'){
                                                    e.currentTarget.className = 'videosName2';
                                                    e.currentTarget.querySelector('img').src = play;
                                                    document.getElementById('myplayer').innerHTML = `<iframe class='firstVideo' if='videoiframe' src=${cont.url} frameBorder="0" allowFullScreen></iframe>`;

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
                                  <a className="LinkRoyhat" id="LinkRoyhat" href="#Footer">
                                    Ro‘yxatdan o‘tish →
                                </a>
                            </div>
                            <div className='player' id='myplayer'  >
                                <iframe className='firstVideo'  if='videoiframe' src='https://www.youtube.com/embed/XsBil1zbVOc' frameBorder="0" allowFullScreen>

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
