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

    const createContent = (title, text) => {
        return { title, text }
    }

    const content1 = [
        createContent(" Kursda qatnashish necha pul turadi ? ", " Kursimizda qatnashish istagida bo‘lganlar, pastda ko‘rsatilgan raqamlarga murojaat qilishingiz mumkin. Oldindan ro‘yhatdan o‘tgan ishtirokchilarimiz uchun chegirmalarimiz mavjud. "),
        createContent(" Chegirma olish tartibi qanday ?  ", " Kursimizda qatnashish istagida bo‘lganlar, pastda ko‘rsatilgan raqamlarga murojaat qilishingiz mumkin. Oldindan ro‘yhatdan o‘tgan ishtirokchilarimiz uchun chegirmalarimiz mavjud. "),
        createContent(" To‘lov turi qanday? ", " Naqd va pul o'tkazish yo'li bilan. "),
    ]
    const content2 = [
        createContent(" Kursda qatnashib, qanday amaliy ko‘nikmalar olaman ? ", " Har bir modul bo‘yicha hayotiy keyslar, real misollar bilan tanishasiz. "),
        createContent(" Kursdan qoniqmagan taqdirimda to‘lovni qaytarishim mumkinmi ? ", " Kursdan qoniqmagan taqdirda, pulni qaytarish mumkin, faqat maxsus intervyu orqali qaytariladi. "),
        createContent(" Ushbu biznes dasturni qanday paketlarda sotib olish mumkin ? ", ` 3 xil paketlarimiz mavhud: \n Korporativ paket \n Standart paket \n Premium paket `),
    ]

    const content3 = [
        createContent(" Viloyatdan “Zoom” orqali onlayn qatnashish mumkinmi ? ", " Xa mumkin. “Zoom” yoki boshqa mahsus platforma orqali qatnashish mumkin bo‘ladi. "),
        createContent(" Kurs qaysi kunlari, necha soatdan bo‘lib o‘tadi ? ", " Kursimiz muborak Ramazon oyidan keyin ,may oyining birinchi yarmida boshlanib, shanba va yakshanba kunlari 9:30 dan 18:00 gacha bo‘lib o‘tadi. "),
        createContent(" Dastur ishtirokchilariga konsultatsiya xizmati mavjudmi ? ", " Ha, premium tarifda mavjud, standart tarifda qatnashsangiz konsultatsiya hizmati uchun 50% chegirmaga ega bo‘lasiz. "),
    ]

    const contentTab1 = [
        createContent(" Kursda qatnashish necha pul turadi ? ", " Kursimizda qatnashish istagida bo‘lganlar, pastda ko‘rsatilgan raqamlarga murojaat qilishingiz mumkin. Oldindan ro‘yhatdan o‘tgan ishtirokchilarimiz uchun chegirmalarimiz mavjud. "),
        createContent(" Chegirma olish tartibi qanday ?  ", " Kursimizda qatnashish istagida bo‘lganlar, pastda ko‘rsatilgan raqamlarga murojaat qilishingiz mumkin. Oldindan ro‘yhatdan o‘tgan ishtirokchilarimiz uchun chegirmalarimiz mavjud. "),
        createContent(" To‘lov turi qanday? ", " Naqd va pul o'tkazish yo'li bilan. "),
        createContent(" Kursda qatnashib, qanday amaliy ko‘nikmalar olaman ? ", " Har bir modul bo‘yicha hayotiy keyslar, real misollar bilan tanishasiz. "),
    ]
    
    const contentTab2 = [
        createContent(" Kursdan qoniqmagan taqdirimda to‘lovni qaytarishim mumkinmi ? ", " Kursdan qoniqmagan taqdirda, pulni qaytarish mumkin, faqat maxsus intervyu orqali qaytariladi. "),
        createContent(" Ushbu biznes dasturni qanday paketlarda sotib olish mumkin ? ", ` 3 xil paketlarimiz mavhud: \n Korporativ paket \n Standart paket \n Premium paket `),
        createContent(" Viloyatdan “Zoom” orqali onlayn qatnashish mumkinmi ? ", " Xa mumkin. “Zoom” yoki boshqa mahsus platforma orqali qatnashish mumkin bo‘ladi. "),
        createContent(" Kurs qaysi kunlari, necha soatdan bo‘lib o‘tadi ? ", " Kursimiz muborak Ramazon oyidan keyin ,may oyining birinchi yarmida boshlanib, shanba va yakshanba kunlari 9:30 dan 18:00 gacha bo‘lib o‘tadi. "),
        createContent(" Dastur ishtirokchilariga konsultatsiya xizmati mavjudmi ? ", " Ha, premium tarifda mavjud, standart tarifda qatnashsangiz konsultatsiya hizmati uchun 50% chegirmaga ega bo‘lasiz. "),
    ]

    
   

    return (
        <div className='FaqCont'>

            <div className='bigBoxFaq'>

                <div className='container faqsCont' >
                    <h3 className='partTitle' >Ko‘p so‘raladigan <br /> savollar</h3>

                    <div className='faqsContBox'>
 
                        <div className='leftBox'>
                            {
                                content1.map((el, ind) => {
                                    return (
                                        <div>
                                            <Card  className= "Faq__card" variant="outlined"                                                             onMouseMove={(e) => {
                                                                e.target.style.opacity = 1;
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.opacity = 0;

                                                            }}>
                                                <>
                                                    <CardContent>
                                                        <Typography className="Faqs__cardTitle" variant="h5" component="div">
                                                            <h5 className='faqCarTit faqCarTitBl '>
                                                                {el.title}
                                                            </h5>
                                                        </Typography>
                                                        <Typography
                                                            sx={{ fontSize: 18 }}
                                                            className="Faqs__cardContent"
                                                            color="text.secondary"
                                                            gutterBottom
>
                                                            {el.text}
                                                        </Typography>
                                                    </CardContent>
                                                </>
                                            </Card>


                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='centerBox'>
                            {
                                content2.map((el, ind) => {
                                    return (
                                        <div>
                                            <Card className='Faq__card' variant="outlined">
                                                <>
                                                    <CardContent>
                                                        <Typography className="Faqs__cardTitle" variant="h5" component="div">
                                                            <h5 className='faqCarTit faqCarTitBl '>
                                                                {el.title}
                                                            </h5>
                                                        </Typography>
                                                        <Typography
                                                            sx={{ fontSize: 18 }}
                                                            className="Faqs__cardContent"
                                                            color="text.secondary"
                                                            gutterBottom
                                                            onMouseMove={(e) => {
                                                                e.target.style.opacity = 1;
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.opacity = 0;

                                                            }}>
                                                            {el.text}
                                                        </Typography>
                                                    </CardContent>
                                                </>
                                            </Card>


                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='rightBox'>
                            {
                                content3.map((el, ind) => {
                                    return (
                                        <div>
                                            <Card className='Faq__card' variant="outlined">
                                                <>
                                                    <CardContent>
                                                        <Typography className="Faqs__cardTitle" variant="h5" component="div">
                                                            <h5 className='faqCarTit faqCarTitBl '>
                                                                {el.title}
                                                            </h5>
                                                        </Typography>
                                                        <Typography
                                                            sx={{ fontSize: 18 }}
                                                            className="Faqs__cardContent"
                                                            color="text.secondary"
                                                            gutterBottom
                                                            onMouseMove={(e) => {
                                                                e.target.style.opacity = 1;
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.opacity = 0;

                                                            }}>
                                                            {el.text}
                                                        </Typography>
                                                    </CardContent>
                                                </>
                                            </Card>


                                        </div>
                                    )
                                })
                            }
                        </div>


                    </div>


                    {/* Tablet part  */}
                    <div className='faqsContBoxTablet'>

                        <div className="faqsTablPart">
                        {
                                contentTab1.map((el, ind) => {
                                    return (
                                        <div>
                                            <Card 
                                            className= "Faq__card"

                                            variant="outlined">
                                                <>
                                                    <CardContent>
                                                        <Typography className="Faqs__cardTitle" variant="h5" component="div">
                                                            <h5 className='faqCarTit faqCarTitBl '>
                                                                {el.title}
                                                            </h5>
                                                        </Typography>
                                                        <Typography
                                                            sx={{ fontSize: 18 }}
                                                            className="Faqs__cardContent"
                                                            color="text.secondary"
                                                            gutterBottom
                                                            onMouseMove={(e) => {
                                                                e.target.style.opacity = 1;
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.opacity = 0;

                                                            }}>
                                                            {el.text}
                                                        </Typography>
                                                    </CardContent>
                                                </>
                                            </Card>


                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/*  */}
                        <div className="faqsTablPart">
                        {
                                contentTab2.map((el, ind) => {
                                    return (
                                        <div>
                                            <Card 
                                            className= "Faq__card"

                                            variant="outlined">
                                                <>
                                                    <CardContent>
                                                        <Typography className="Faqs__cardTitle" variant="h5" component="div">
                                                            <h5 className='faqCarTit faqCarTitBl '>
                                                                {el.title}
                                                            </h5>
                                                        </Typography>
                                                        <Typography
                                                            sx={{ fontSize: 18 }}
                                                            className="Faqs__cardContent"
                                                            color="text.secondary"
                                                            gutterBottom
                                                            onMouseMove={(e) => {
                                                                e.target.style.opacity = 1;
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.opacity = 0;

                                                            }}>
                                                            {el.text}
                                                        </Typography>
                                                    </CardContent>
                                                </>
                                            </Card>


                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div >

            </div >
        </div >
    )
}
export default FAQs