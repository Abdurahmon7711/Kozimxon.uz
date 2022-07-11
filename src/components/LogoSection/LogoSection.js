import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './LogoSection.css'

// Images black
import artelBl from '../../assets/logos/1artel.png';
import mavisBl from '../../assets/logos/2mavis.png';
import korzinkaBl from '../../assets/logos/3korzinka.png';
import xalqBl from '../../assets/logos/4xalq.png';
import OFbl from '../../assets/logos/5OFb.png';
import ipotekaBl from '../../assets/logos/6ipoteka.png';
import bigdBl from '../../assets/logos/7bigd.png';
import ermakBl from '../../assets/logos/8ermak.png';
import turonBl from '../../assets/logos/9turon.png';
// Logo
import artel from '../../assets/logos/artel01.png';
import mavis from '../../assets/logos/mavis02.png';
import xalq from '../../assets/logos/xalq04.png';
import OFb from '../../assets/logos/OFb05.png';
import ipoteka from '../../assets/logos/ipoteka06.png';
import ermak from '../../assets/logos/ermak08.png';
import turon from '../../assets/logos/turon09.png';
import korzinka from '../../assets/logos/korzinka03.png';
import bigd from '../../assets/logos/bigd07.png';




const images = [
    {
        "black": artelBl,
        "light": artel
    },
    {
        "black": mavisBl,
        "light": mavis
    },
    {
        "black": korzinkaBl,
        "light": korzinka
    },
    {
        "black": xalqBl,
        "light": xalq
    },
    {
        "black": OFbl,
        "light": OFb
    },
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

]



// const logos = [artelBl, mavisBl, korzinka, xalqBl, OFbl, ipotekaBl, bigdBl, ermakBl, turonBl]
// const logoLight = [artel ,mavis, korzinka3 , xalq, OFb, ipoteka,]



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function LogoSection() {

    return (
        <div className='container LogoSection' >
            <div className='partTitle'>
                <h3>Kouching dasturi <br /> mijozlari</h3>
            </div>
            <Box sx={{ flexGrow: 1 }}  >
                <Grid container spacing={{ xs: 1, md: 5 }} columns={{ xs: 6, sm: 12, md: 12 }}>
                    {images.map(({ black, light }, index) => {
                        return (
                            <Grid item xs={3} sm={4} md={4} key={index}>
                                <Item className='LogoSecItem'
                                    onMouseEnter={(e) => {
                                        e.target.src = light;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.src = black;
                                    }}><img className='LogoSecItemImg' src={black} />
                                </Item>
                            </Grid>
                        )
                    })}
                </Grid>

            </Box>


        </div>
    )
}

export default LogoSection