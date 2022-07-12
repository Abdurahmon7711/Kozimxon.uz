import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';
// import "../CarouselCards/CarouselCards.css"
import "./FAQs.css"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function FAQs() {

    return (
        <div className='FaqCont'>

            <div className='bigBoxFaq'>

                <div className='container faqsCont' >
                    <h3 className='partTitle' >Ko‘p so‘raladigan <br /> savollar</h3>

                    <div className='faqsContBox'>
                        <div className='leftBox'>
                            {/* 
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
                            
                            */}

                            <div>

                                <Card className='Faq__card KarouselAccor__cardPartBl' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit faqCarTitBl '>
                                                    Kursda qatnashish necha pul turadi?
                                                </h5>
                                            </Typography>
                                            <Typography
                                                sx={{ fontSize: 18 }}
                                                className="Faqs__cardContent"
                                                color="text.secondary"
                                                gutterBottom
                                                component={'span'}
                                                onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}>
                                                Kursimizda qatnashish istagida bo‘lganlar, pastda ko‘rsatilgan raqamlarga murojaat qilishingiz mumkin. Oldindan ro‘yhatdan o‘tgan ishtirokchilarimiz uchun chegirmalarimiz mavjud.
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>


                            </div>
                            <div>


                                <Card className='Faq__card ' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    Chegirma olish tartibi qanday?
                                                </h5>
                                            </Typography>
                                            <Typography     component={'span'}      onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                Kursimizda qatnashish istagida bo‘lganlar, pastda ko‘rsatilgan raqamlarga murojaat qilishingiz mumkin. Oldindan ro‘yhatdan o‘tgan ishtirokchilarimiz uchun chegirmalarimiz mavjud.
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>


                            </div>

                            <div>
                                <Card className='Faq__card' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography  className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    To‘lov turi qanday?
                                                </h5>
                                            </Typography>
                                            <Typography     component={'span'}      onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                Naqd va pul o'tkazish yo'li bilan
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>
                            </div>


                        </div>
                        {/*  */}
                        <div className='centerBox'>
                            <div>


                                <Card className='Faq__card' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    Kursda qatnashib, qanday amaliy ko‘nikmalar olaman?
                                                </h5>
                                            </Typography>
                                            <Typography   component={'span'}        onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                Har bir modul bo‘yicha hayotiy keyslar, real misollar bilan tanishasiz.
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>


                            </div>
                            <div>


                                <Card className='Faq__card' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    Kursdan qoniqmagan taqdirimda to‘lovni qaytarishim mumkinmi?
                                                </h5>
                                            </Typography>
                                            <Typography           onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                Kursdan qoniqmagan taqdirda, pulni qaytarish mumkin, faqat maxsus intervyu orqali qaytariladi.
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>


                            </div>

                            <div>
                                <Card className='Faq__card' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    Ushbu biznes dasturni qanday paketlarda sotib olish mumkin ?
                                                </h5>
                                            </Typography>
                                            <Typography           onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                3 xil paketlarimiz mavhud:
                                                <ul>
                                                    <li>Korporativ paket </li>
                                                    <li>Standart paket </li>
                                                    <li>Premium paket </li>
                                                </ul>
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>
                            </div >


                        </div>
                        {/*  */}
                        <div className='rightBox'>
                            <div>
                                <Card className='Faq__card' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    Viloyatdan “Zoom” orqali onlayn qatnashish mumkinmi?
                                                </h5>
                                            </Typography>
                                            <Typography           onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                Xa mumkin. “Zoom” yoki boshqa mahsus platforma orqali qatnashish mumkin bo‘ladi.
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>
                            </div>


                            <div>
                                <Card className='Faq__card' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    Kurs qaysi kunlari, necha soatdan bo‘lib o‘tadi?
                                                </h5>
                                            </Typography>
                                            <Typography           onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                Kursimiz muborak Ramazon oyidan keyin ,may oyining birinchi yarmida boshlanib, shanba va yakshanba kunlari 9:30 dan 18:00 gacha bo‘lib o‘tadi.
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>
                            </div>

                            <div>
                                <Card className='Faq__card' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    Dastur ishtirokchilariga konsultatsiya xizmati mavjudmi?
                                                </h5>
                                            </Typography>
                                            <Typography           onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                Ha, premium tarifda mavjud, standart tarifda qatnashsangiz konsultatsiya hizmati uchun 50% chegirmaga ega bo‘lasiz.
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>
                            </div >

                        </div >
                    </div>


                    {/* Tablet part  */}
                    <div className='faqsContBoxTablet'>

                        <div className="faqsTablPart">
                            <div>
                                <Card className='Faq__card KarouselAccor__cardPartBl' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit faqCarTitBl '>
                                                    Kursda qatnashish necha pul turadi?
                                                </h5>
                                            </Typography>
                                            <Typography           onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                Kursimizda qatnashish istagida bo‘lganlar, pastda ko‘rsatilgan raqamlarga murojaat qilishingiz mumkin. Oldindan ro‘yhatdan o‘tgan ishtirokchilarimiz uchun chegirmalarimiz mavjud.
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>
                            </div>
                            <div>
                                <Card className='Faq__card ' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    Chegirma olish tartibi qanday?
                                                </h5>
                                            </Typography>
                                            <Typography           onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                Kursimizda qatnashish istagida bo‘lganlar, pastda ko‘rsatilgan raqamlarga murojaat qilishingiz mumkin. Oldindan ro‘yhatdan o‘tgan ishtirokchilarimiz uchun chegirmalarimiz mavjud.
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>
                            </div>
                            <div>
                                <Card className='Faq__card' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    Kursda qatnashib, qanday amaliy ko‘nikmalar olaman?
                                                </h5>
                                            </Typography>
                                            <Typography           onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                Har bir modul bo‘yicha hayotiy keyslar, real misollar bilan tanishasiz.
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>
                            </div>
                            <div>
                                <Card className='Faq__card' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    Kursdan qoniqmagan taqdirimda to‘lovni qaytarishim mumkinmi?
                                                </h5>
                                            </Typography>
                                            <Typography           onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                Kursdan qoniqmagan taqdirda, pulni qaytarish mumkin, faqat maxsus intervyu orqali qaytariladi.
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>
                            </div>
                        </div>
                        {/*  */}
                        <div className="faqsTablPart">

                            <div>
                                <Card className='Faq__card' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    Viloyatdan “Zoom” orqali onlayn qatnashish mumkinmi?
                                                </h5>
                                            </Typography>
                                            <Typography           onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                Xa mumkin. “Zoom” yoki boshqa mahsus platforma orqali qatnashish mumkin bo‘ladi.
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>
                            </div>

                            <div>
                                <Card className='Faq__card' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    To‘lov turi qanday?
                                                </h5>
                                            </Typography>
                                            <Typography           onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                Naqd va pul o'tkazish yo'li bilan
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>
                            </div>
                            <div>
                                <Card className='Faq__card' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    Ushbu biznes dasturni qanday paketlarda sotib olish mumkin ?
                                                </h5>
                                            </Typography>
                                            <Typography           onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                3 xil paketlarimiz mavhud:
                                                <ul>
                                                    <li>Korporativ paket </li>
                                                    <li>Standart paket </li>
                                                    <li>Premium paket </li>
                                                </ul>
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>
                            </div >


                            <div>
                                <Card className='Faq__card' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    Kurs qaysi kunlari, necha soatdan bo‘lib o‘tadi?
                                                </h5>
                                            </Typography>
                                            <Typography           onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                Kursimiz muborak Ramazon oyidan keyin ,may oyining birinchi yarmida boshlanib, shanba va yakshanba kunlari 9:30 dan 18:00 gacha bo‘lib o‘tadi.
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>
                            </div>

                            <div>
                                <Card className='Faq__card' variant="outlined">
                                    <>
                                        <CardContent>
                                            <Typography className="Faqs__cardTitle" variant="h5" component={'span'}>
                                                <h5 className='faqCarTit'>
                                                    Dastur ishtirokchilariga konsultatsiya xizmati mavjudmi?
                                                </h5>
                                            </Typography>
                                            <Typography           onMouseMove = {(e) => {
                                                    e.target.style.opacity = 1;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = 0;
                                                }}  sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                Ha, premium tarifda mavjud, standart tarifda qatnashsangiz konsultatsiya hizmati uchun 50% chegirmaga ega bo‘lasiz.
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>
                            </div >

                        </div>
                    </div>
                </div >

            </div >
        </div >
    )
}
export default FAQs