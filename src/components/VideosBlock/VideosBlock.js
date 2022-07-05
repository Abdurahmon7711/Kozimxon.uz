import React from "react";
import "./Videos.css";
import play from "../../assets/images/play.svg";
import stop from "../../assets/images/stop.svg";
import { useState } from "react";



function VideosBlock() {

    const [isAcctive, setAcctive] = useState(true);
    function change() {
    setAcctive(!isAcctive);
    }
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
                    <button className="videosName">
                        <img src={play} />
                        <p className="VideosText">
                        Qadriyatlarga asoslangan biznesni boshqarish kursi
                        </p>
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
                    <div className="player">
                        <iframe
                            className="firstVideo"
                            src="https://www.youtube.com/embed/jvrDXVNEHwQ"
                        />
                    </div>
            </div>
            </div>
        </div>

        </div>
    </div>
  );
}

export default VideosBlock;
