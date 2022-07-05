import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './LogoSection.css'

// Images black
import artelBl from '../../assets/logos/1artel.png';
import mavisBl from '../../assets/logos/2mavis.png';
import korzinka from '../../assets/logos/3korzinka.png';
import xalqBl from '../../assets/logos/4xalq.png';
import OFbl from '../../assets/logos/5OFb.png';
import ipotekaBl from '../../assets/logos/6ipoteka.png';
import bigdBl from '../../assets/logos/7bigd.png';
import ermakBl from '../../assets/logos/8ermak.png';
import turonBl from '../../assets/logos/9turon.png';
// Logo
import artel from '../../assets/logos/artel01.png';
import xalq from '../../assets/logos/xalq04.png';
import OFb from '../../assets/logos/OFb05.png';
import ipoteka from '../../assets/logos/ipoteka06.png';
import ermak from '../../assets/logos/ermak08.png';
import turon from '../../assets/logos/turon09.png';


const logos = [artelBl, mavisBl, korzinka, xalqBl, OFbl, ipotekaBl, bigdBl, ermakBl, turonBl]
const logoLight = [artel, xalq, OFb, ipotekaBl, ermak, turon]



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function LogoSection() {
    return (
        <div className='container LogoSection ' >
            <div className='partTitle'>
                <h3>Kouching dasturi <br /> mijozlari</h3>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 1, md: 5 }} columns={{ xs: 1, sm: 12, md: 12 }}>
                    {logos.map((logo, index) => (
                        <Grid item xs={3} sm={4} md={4} key={index}>
                            <Item className='LogoSecItem'><img src={logo} /></Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>


        </div>
    )
}

export default LogoSection