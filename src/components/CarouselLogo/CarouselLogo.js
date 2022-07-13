import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import "./CarouselLogo.css"
import vidBlock from '../../assets/images/vidBlock.png'

// import Logos
import artelBl from '../../assets/logos/1artel.png';
import mavisBl from '../../assets/logos/2mavis.png';
import korzinkaBl from '../../assets/logos/3korzinka.png';
import xalqBl from '../../assets/logos/4xalq.png';
import OFbl from '../../assets/logos/5OFb.png';
import ipotekaBl from '../../assets/logos/6ipoteka.png';
import bigdBl from '../../assets/logos/7bigd.png';
import ermakBl from '../../assets/logos/8ermak.png';
import turonBl from '../../assets/logos/9turon.png';
import loookBl from '../../assets/logos/10loook.png';
import kapitalBl from '../../assets/logos/11kapital.png';
import mfaktorBl from '../../assets/logos/12mfaktor.png';
import xclubBl from '../../assets/logos/club1000x13.png';
import summitBl from '../../assets/logos/14summit.png';
import uniredBl from '../../assets/logos/15unired.png'


import artel from '../../assets/logos/artel01.png';
import mavis from '../../assets/logos/mavis02.png';
import korzinka from '../../assets/logos/korzinka03.png';
import xalq from '../../assets/logos/xalq04.png';
import OFb from '../../assets/logos/OFb05.png';
import ipoteka from '../../assets/logos/ipoteka06.png';
import bigd from '../../assets/logos/bigd07.png';
import ermak from '../../assets/logos/ermak08.png';
import turon from '../../assets/logos/turon09.png';
import loook from '../../assets/logos/loook010.jpg';
import kapital from '../../assets/logos/kapital011.png';
import mfaktor from '../../assets/logos/mfaktor012.jpg';
import xclub from '../../assets/logos/13club1000x.png';
import summit from '../../assets/logos/summit14.png';
import unired from '../../assets/logos/unired15.png'


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 947 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1
    }
};

const images1 = [
    {
        "black": korzinkaBl,
        "light": korzinka
    },
    {
        "black": artelBl,
        "light": artel
    },
    {
        "black": mavisBl,
        "light": mavis
    },
    {
        "black": xalqBl,
        "light": xalq
    },
    {
        "black": OFbl,
        "light": OFb
    }
]

const images2 = [

    {
        "black": ipotekaBl,
        "light": ipoteka
    },
    {
        "black": bigdBl,
        "light": bigd
    },
    {
        "black": ermakBl,
        "light": ermak
    },
    {
        "black": turonBl,
        "light": turon
    },
    {
        "black": xclubBl,
        "light": xclubBl
    },

]
const images3 = [
    {
        "black": loookBl,
        "light": loook
    },
    {
        "black": kapitalBl,
        "light": kapital
    },
    {
        "black": mfaktorBl,
        "light": mfaktor
    },
    {
        "black": summitBl,
        "light": summit
    },
    {
        "black": uniredBl,
        "light": unired
    }

]
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function CaroselLogo() {
    return (
        <div className='container LogoSection' >
            <div className='partTitle'>
                <h3>Kouching dasturi <br /> mijozlari</h3>
            </div>

            <Carousel responsive={responsive}>

                {images1.map(({ black, light }, index) => {
                    return (
                        <div>

                            <Box sx={{ flexGrow: 1 }} className="FaqsLogoRow" >
                                <div className='ustkidiv' id="ustkidiv">

                                    <Item component="span" className='LogoSecItem' id="LogosecItem"
                                        onMouseEnter={(e) => {
                                            e.target.src = light;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.src = light;
                                        }}><img className='LogoSecItemImg' id="LogoSecItemImg" src={light} />
                                    </Item>

                                </div>
                            </Box>

                        </div>
                    )
                })}


                {images2.map(({ black, light }, index) => {
                    return (
                        <div>
                            <Box sx={{ flexGrow: 1 }} className="FaqsLogoRow" >
                                <div className='ustkidiv' id="ustkidiv">

                                    <Item component="span" className='LogoSecItem' id="LogosecItem"
                                        onMouseEnter={(e) => {
                                            e.target.src = light;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.src = light;
                                        }}><img className='LogoSecItemImg' id="LogoSecItemImg" src={light} />
                                    </Item>

                                </div>
                            </Box>
                        </div>
                    )
                })}


                {images3.map(({ black, light }, index) => {
                    return (
                        <div>

                            <Box sx={{ flexGrow: 1 }} className="FaqsLogoRow" >
                                <div className='ustkidiv' id="ustkidiv">

                                    <Item component="span" className='LogoSecItem' id="LogosecItem"
                                        onMouseEnter={(e) => {
                                            e.target.src = light;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.src = light;
                                        }}><img className='LogoSecItemImg' id="LogoSecItemImg" src={light} />
                                    </Item>

                                </div>
                            </Box>
                        </div>
                    )
                })}



            </Carousel>

        </div>
    )
}

export default CaroselLogo
