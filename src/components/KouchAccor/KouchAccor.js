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
import pdf from '../../assets/pdf/kozimxon.pdf'



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
                    <h3 className='KouchDasturi'>Kouching dasturidagi <br /> modullar qanday?</h3>
                </div>
                <div className='KouchAccor__inner'>
                    <div className='KouchAccor__accordionPart'>
                      
                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography className='accordion__title kouchAccTitleBl ' component={'div'} >01 — HR tizimini yaratish</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='accordionInner'>
                                <Typography className='innerAcc__text' component={'div'} >
                                    <div className='accTextPart'>
                                        Kompaniyaning missiyalari, qadriyatlari va vazifalari.
                                        <br /> HR rejalash (Kompaniya kerak buladigan xodimlar sonini aniqlash).
                                        Ishga olishda samarali usullar (Intervyu, testlar, case savollar,…).
                                    </div>
                                    <div className='accTextPart'>
                                        Adaptatsiya tizimi (Yangi kelgan xodimlarni tezda ishga ko'nikib ketishi va foyda keltirishi)
                                        Kompaniya samaradorligini oshiruvchi KPI tizimini yo'lga qo'yish.
                                        Maosh wa kompensatsiya tizimini yaratish.
                                        Motivatsiya dasturlari.
                                        Ichki nizom va standart operatsion protseduralar yaratish.
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography className='accordion__title kouchAccTitleBl ' component={'div'} >02 — Islom moliyasi asoslari</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='accordionInner'> 
                                <Typography className='innerAcc__text' component={'div'}>
                                    <div className='accTextPart'>
                                        Islom moliyasi tamoyillari asosida biznesni boshqarish.
                                        Islom moliyasidagi taqiqlar
                                    </div>
                                    <div className='accTextPart'>
                                        Asosiy produktlar (Murabaha, Ijara, Mushakara, Muzabara, Istisno va Salam).
                                        Shartnomalar.
                                        Islom moliyasida sha'riy savollarga mehmonimiz Muhammad Ayyubxon Xomidobdan javoblar.
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography className='accordion__title kouchAccTitleBl ' component={'div'} >03 — Biznesda baraka omillari</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='accordionInner'> 
                                <Typography className='innerAcc__text' component={'div'}>
                                    <div className='accTextPart'>
                                        Islomda pulga va biznesga bo'lgan munosabat.
                                        Dunyo va oxirat orasida muvozanat saqlash.
                                        Musulmonlarning rivojlanish bo'yicha ortda qolish sabablari.
                                    </div>
                                    <div className='accTextPart'>
                                        Baraka o'zi nima va unga qanday erishiladi ?
                                        Barakaga erishishning 10 ta omili.
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        
                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                                <Typography className='accordion__title kouchAccTitleBl ' component={'div'} >04 — Muvaffaqqiyatli sherekchilik asosolari </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='accordionInner'> 
                                <Typography className='innerAcc__text' component={'div'}>
                                    <div className='accTextPart'>
                                        Biznesda niyatning muhimligi.
                                        Sherik tanlashda qadriyatlarga asoslanish.
                                        Sherikchilik kelishuvini to'g'ri tuzish shartlari.
                                    </div>
                                    <div className='accTextPart'>
                                        Kelishuvdagi asosiy masalalar (Sheriklarning biznesdagi ulushi, sarmoya vazifalar, foyda va zarar taqsimoti, biznesdan chiqish shartlari ).
                                        Sherikchilikdagi muammolarni hal qilish yo'llari.
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                                <Typography className='accordion__title kouchAccTitleBl ' component={'div'} >05 — Qadriyatlarga asoslangan liderlik</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='accordionInner'> 
                                <Typography className='innerAcc__text' component={'div'}>
                                    <div className='accTextPart'>
                                        Zamonaviy va qadriyatlarga asoslangan liderlikning farqlari.
                                        Payg'ambarimiz (S.A.V)ning liderlik mahoratlari.
                                        Qadriyatlarga asoslangan liderlikga berilgan tavsiyalar.
                                    </div>
                                    <div className='accTextPart'>

                                        Qo'l ostidagilarni motivatsiyasini oshirish yo'llari.
                                        Nizolarni hal qilish yo'llari
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                                <Typography className='accordion__title kouchAccTitleBl ' component={'div'} >06 — Xalqaro standardlarga javob beruvchi xizmat ko‘rsatish</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='accordionInner'> 
                                <Typography className='innerAcc__text' component={'div'} >
                                    <div className='accTextPart'>
                                        Xalqaro talablarga javob beradigan servis tizimi nima ?
                                        Yaponiya tajribasi asosida mijozlarga yuqori darajada xizmat ko'rsatish tizimi yaratish
                                    </div>
                                    <div className='accTextPart'>
                                        Servis tizimi va uning raqobatga qo'l kelishuvini
                                        Qadriyatlarga asoslangan servis tizimi qanday bo'ladi ?
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                            <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                                <Typography className='accordion__title kouchAccTitleBl ' component={'div'} >07 — Yaponiyaning samaradorlikni oshiruvchi TQM va KAIZEN sistemasi</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='accordionInner'> 
                                <Typography className='innerAcc__text' component={'div'}>
                                    <div className='accTextPart'>
                                        Yaponiya Kaizen sistemasi nima va u qanday ishlaydi ?
                                        Tizimlashtirish uchun kerak bo'ladigan 5C sistemasi.
                                        Standart Operatsion Protseduralarni yaratish
                                    </div>
                                    <div className='accTextPart'>
                                        Mijozlarni xohishi inobatga olish.
                                        Doimiy o'sish va rivojlanish strategiyasi.
                                        Ishchilarni korxonaning faoliyatida va hayotida ishtirok etishlari.
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        
                        <Accordion className="KouchAccor__accordion" expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                            <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                                <Typography className='accordion__title kouchAccTitleBl ' component={'div'} >08 — Qadriyatlarga asoslangan shaxsiy rivojlanish</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='accordionInner'> 
                                <Typography className='innerAcc__text' component={'div'}>
                                    <div className='accTextPart'>
                                        Qur'on va Hadisda shaxshiy rivojlanishga kerak bo'ladigan qanday tavsiyalar bor.
                                        Hayotda qanday oliy maqsad ko'yish kerak.
                                        Maqsadlarni to'g'ri ko'yish yo'llari.
                                    </div>
                                    <div className='accTextPart'>
                                        Hayotdagi muammolarga qanday yondashish kerak.
                                        Doimiy harakatm intizom va natija.
                                        Dastur mehmoni Abdukarim Mirzayevdan shaxsiy tavsiyalar.
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className='KouchAccor__cardPart  '>

                        <Box >
                            <Card className='Kouch__card  kouchCardRight KouchAccor__cardPartBl' variant="outlined">
                                <React.Fragment>
                                    <CardContent>
                                        <Typography className="Kouch__cardTitle" variant="h5" >
                                            Kurs o‘quv dasturining elektron PDF varianti
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} className="Kouch__cardContent" color="text.secondary"  gutterBottom>
                                            Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <a className='Kouch__cardLink' href={pdf} download="Kurs o‘quv dasturining elektron PDF varianti ">PDF yuklab olish →</a>
                                        {/* <Link to="#" className='Kouch__cardLink'>PDF yuklab olish → </Link> */}
                                    </CardActions>
                                </React.Fragment>
                            </Card>
                        </Box>
                        <Box >
                            <Card className='Kouch__card  kouchCardRight ' variant="outlined">
                                <React.Fragment>
                                    <CardContent>
                                        <Typography className="Kouch__cardTitle" variant="h5" >
                                            Kouching dasturimizda o‘qish uchun ro‘yxatdan o‘ting!
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} className="Kouch__cardContent" color="text.secondary"  gutterBottom>
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
