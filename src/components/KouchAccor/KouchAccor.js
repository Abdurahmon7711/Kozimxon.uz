import * as React from 'react';
import "./KouchAccor.css";
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import logo from '../../assets/navbarLogo/Logo.png'




const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


function KouchAccor() {
const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='bigBox' id="bigBox">
            <div className='container KouchAccor'>
                <div className='partTitle'>
                    <h3>Kouching dasturidagi <br /> modullar qanday?</h3>
                </div>
                <div className='KouchAccor__inner'>
                    <div className='KouchAccor__accordionPart'>
                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography className='accordion__title' >01 — HR tizimini yaratish</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='accordionInner'>
                                <Typography className='innerAcc__text' >
                                Kompaniyaning missiyasi, qadriyatlari va maqsadlari. HR rejalash (Kompaniyaga kerak bo‘ladigan xodimlar sonini aniqlash). Ishga olishda samarali usullar (Intervyu, testlar, keys savollar va boshqalar). 
                                daptasiya tizimi (Yangi kelgan xodimlarni tezda ishga ko‘nikib ketishi va foyda keltirishi). Maosh va kompensasiya tizimini yaratish. Kompaniya samaradorligini oshiruvchi KPI tizimini yo‘lga qo‘yish.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography className='accordion__title' >02 — Islom moliyasi asoslari</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='accText'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography className='accordion__title' >03 — Biznesda baraka omillari</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='accText'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                                <Typography className='accordion__title' >04 — Muvaffaqqiyatli sherekchilik asosolari </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='accText'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                                <Typography className='accordion__title' >05 — Qadriyatlarga asoslangan liderlik</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='accText'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                                <Typography className='accordion__title' >06 — Xalqaro standardlarga javob beruvchi xizmat ko‘rsatish</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='accText'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                            <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                                <Typography className='accordion__title' >07 — Yaponiyaning samaradorlikni oshiruvchi TQM va KAIZEN sistemasi</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='accText'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                            <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                                <Typography className='accordion__title' >08 — Qadriyatlarga asoslangan shaxsiy rivojlanish</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='accText'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className='KouchAccor__cardPart  '>

                        <Box >
                            <Card className='Kouch__card KouchAccor__cardPartBl' variant="outlined">
                                <React.Fragment>
                                    <CardContent>
                                        <Typography className="Kouch__cardTitle" variant="h5" component="div">
                                            Kurs o‘quv dasturining elektor PDF
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} className="Kouch__cardContent" color="text.secondary" gutterBottom>
                                            Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <a className='Kouch__cardLink' href='./KouchAccor.css' download="PDF file">PDF yuklab olish →</a>
                                        {/* <Link to="#" className='Kouch__cardLink'>PDF yuklab olish → </Link> */}
                                    </CardActions>
                                </React.Fragment>
                            </Card>
                        </Box>
                        <Box >
                            <Card className='Kouch__card' variant="outlined">
                                <React.Fragment>
                                    <CardContent>
                                        <Typography className="Kouch__cardTitle" variant="h5" component="div">
                                            Kouching dasturimizda o‘qish uchun ro‘yxatdan o‘ting!
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} className="Kouch__cardContent" color="text.secondary" gutterBottom>
                                            Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {/* <Link to="#Footer" className='Kouch__cardLink'>Ro‘yxatdan o‘tish →</Link> */}
                                        <a href="#Footer" className='Kouch__cardLink'>Ro‘yxatdan o‘tish →</a> 
                                    </CardActions>
                                </React.Fragment>
                            </Card>
                        </Box>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default KouchAccor
