import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./CarouselLogo.css";

// import Logos
import artel from "../../assets/Screenshots/artel.png";
import karzinka from "../../assets/Screenshots/karzinka.png";
import abba from "../../assets/Screenshots/abba.png";
import bahmall from "../../assets/Screenshots/bahmall.png";
import biolife from "../../assets/Screenshots/biolife.png";
import bosch from "../../assets/Screenshots/bosch.png";
import china from "../../assets/Screenshots/china.png";
import dusell from "../../assets/Screenshots/dusell.png";
import elmakon from "../../assets/Screenshots/elmakon.png";
import eone from "../../assets/Screenshots/e-one.png";
import erizon from "../../assets/Screenshots/erizon.png";
import ermak from "../../assets/Screenshots/ermak.png";
import favvora from "../../assets/Screenshots/favvora.png";
import fayzgo from "../../assets/Screenshots/fayzgo.png";
import honor from "../../assets/Screenshots/honor.png";
import look from "../../assets/Screenshots/look.png";
import markab from "../../assets/Screenshots/markab.png";
import mediapark from "../../assets/Screenshots/mediapark.png";
import Namuna from "../../assets/Screenshots/Namuna.png";
import pepsi from "../../assets/Screenshots/pepsi.png";
import unical from "../../assets/Screenshots/unical.png";
import vero from "../../assets/Screenshots/vero.png";
import webster from "../../assets/Screenshots/webster.png";
import yalpiz from "../../assets/Screenshots/yalpiz.png";
import Yumecs from "../../assets/Screenshots/Yumecs.png";
import probox from "../../assets/Screenshots/probox.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 947 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const images1 = [
  {
    light: karzinka,
  },
  {
    light: artel,
  },
  {
    light: abba,
  },
  {
    light: probox,
  },

  {
    light: biolife,
  },
  {
    light: bosch,
  },
  {
    light: china,
  },
  {
    light: dusell,
  },
  {
    light: elmakon,
  },
  {
    light: eone,
  },
  {
    light: erizon,
  },
  {
    light: pepsi,
  },
  {
    light: favvora,
  },
  {
    light: fayzgo,
  },
  {
    light: honor,
  },
  {
    light: look,
  },
  {
    light: markab,
  },
  {
    light: mediapark,
  },
  {
    light: Namuna,
  },

  {
    light: ermak,
  },
  {
    light: unical,
  },
  {
    light: vero,
  },
  {
    light: bahmall,
  },
  {
    light: webster,
  },
  {
    light: yalpiz,
  },
  {
    light: Yumecs,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CaroselLogo() {
  return (
    <div className="container LogoSection">
      <div className="partTitle">
        <h3>Bizning mijozlar</h3>
      </div>

      <Carousel responsive={responsive}>
        {images1.map(({ light }, index) => {
          return (
            <div>
              <Box sx={{ flexGrow: 1 }} className="FaqsLogoRow">
                <div className="ustkidiv" id="ustkidiv">
                  <Item
                    component="span"
                    className="LogoSecItem"
                    id="LogosecItem"
                    onMouseEnter={(e) => {
                      e.target.src = light;
                    }}
                    onMouseLeave={(e) => {
                      e.target.src = light;
                    }}
                  >
                    <img
                      className="LogoSecItemImg"
                      id="LogoSecItemImg"
                      src={light}
                    />
                  </Item>
                </div>
              </Box>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CaroselLogo;
