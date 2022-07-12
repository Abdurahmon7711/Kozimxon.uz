import React from "react";
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Sonnet from 'react-bootstrap'
import KouchDasturi from "../KouchDasturi/KouchDasturi";
import TabPanel from './TabPanel/TabPanel'
import TabsMenu from './TabsMenu.css'



function TabMenu() {
  return (
    <div className="VideoTabs">
      <div className="KouchLavhalar">
        <h2 className="VideoLavhalar">Kouching dasturidan video lavhalar</h2>
        <a  className="LinkRoyhat" href="#">Ro‘yxatdan o‘tish →</a>
      </div>
      <TabPanel/>
    </div>
  );
}

export default TabMenu;
