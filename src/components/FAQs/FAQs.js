import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from '@mui/material/Box';
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
                    <Carousel responsive={responsive}>

                        <div className='leftBox'>
                            <div>

                                <Box sx={{ minWidth: 275 }} >

                                    <Card className='Faq__card KarouselAccor__cardPartBl' variant="outlined">
                                        <React.Fragment>
                                            <CardContent>
                                                <Typography className="Faqs__cardTitle" variant="h5" component="div">
                                                    <h5 className='faqCarTit faqCarTitBl '>
                                                        Kursda qatnashish necha pul turadi?
                                                    </h5>
                                                </Typography>
                                                <Typography sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                    Kursimizda qatnashish istagida bo‘lganlar, pastda ko‘rsatilgan raqamlarga murojaat qilishingiz mumkin. Oldindan ro‘yhatdan o‘tgan ishtirokchilarimiz uchun chegirmalarimiz mavjud.
                                                </Typography>
                                            </CardContent>
                                        </React.Fragment>
                                    </Card>
                                </Box>

                            </div>
                            <div>

                                <Box sx={{ minWidth: 275 }}>
                                    <Card className='Faq__card ' variant="outlined">
                                        <React.Fragment>
                                            <CardContent>
                                                <Typography className="Faqs__cardTitle" variant="h5" component="div">
                                                    <h5 className='faqCarTit'>
                                                        Chegirma olish tartibi qanday?
                                                    </h5>
                                                </Typography>
                                                <Typography sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                    Kursimizda qatnashish istagida bo‘lganlar, pastda ko‘rsatilgan raqamlarga murojaat qilishingiz mumkin. Oldindan ro‘yhatdan o‘tgan ishtirokchilarimiz uchun chegirmalarimiz mavjud.                                            </Typography>
                                            </CardContent>
                                        </React.Fragment>
                                    </Card>
                                </Box>

                            </div>
                        </div>
                        {/*  */}
                        <div className='centerBox'>
                            <div>

                                <Box sx={{ minWidth: 275 }}>
                                    <Card className='Faq__card' variant="outlined">
                                        <React.Fragment>
                                            <CardContent>
                                                <Typography className="Faqs__cardTitle" variant="h5" component="div">
                                                    <h5 className='faqCarTit'>
                                                        Kursda qatnashib, qanday amaliy ko‘nikmalar olaman?
                                                    </h5>
                                                </Typography>
                                                <Typography sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                    Har bir modul bo‘yicha hayotiy keyslar, real misollar bilan tanishasiz. Uy vazifalari orqali o‘rganganlaringizni amalda sinab ko‘rasiz.
                                                </Typography>
                                            </CardContent>
                                        </React.Fragment>
                                    </Card>
                                </Box>

                            </div>
                            <div>

                                <Box sx={{ minWidth: 275 }}>
                                    <Card className='Faq__card' variant="outlined">
                                        <React.Fragment>
                                            <CardContent>
                                                <Typography className="Faqs__cardTitle" variant="h5" component="div">
                                                    <h5 className='faqCarTit'>
                                                        Kursdan qoniqmagan taqdirimda to‘lovni qaytarishim mumkinmi?
                                                    </h5>
                                                </Typography>
                                                <Typography sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                    Kursdan qoniqmagan taqdirda, pulni qaytarish mumkin, lekin sabablarini aniq keltirgandan keyin.
                                                </Typography>
                                            </CardContent>
                                        </React.Fragment>
                                    </Card>
                                </Box>

                            </div>
                            <div>

                                <Box sx={{ minWidth: 275 }} >
                                    <Card className='Faq__card' variant="outlined">
                                        <React.Fragment>
                                            <CardContent>
                                                <Typography className="Faqs__cardTitle" variant="h5" component="div">
                                                    <h5 className='faqCarTit'>
                                                        Viloyatdan “Zoom” orqali onlayn qatnashish mumkinmi?
                                                    </h5>
                                                </Typography>
                                                <Typography sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                    Xa mumkin. “Zoom” yoki boshqa mahsus platforma orqali qatnashish mumkin bo‘ladi.
                                                </Typography>
                                            </CardContent>
                                        </React.Fragment>
                                    </Card>
                                </Box>

                            </div>
                        </div>
                        {/*  */}
                        <div className='rightBox'>


                            <div>

                                <Box sx={{ minWidth: 275 }}>
                                    <Card className='Faq__card' variant="outlined">
                                        <React.Fragment>
                                            <CardContent>
                                                <Typography className="Faqs__cardTitle" variant="h5" component="div">
                                                    <h5 className='faqCarTit'>
                                                        To‘lov turi qanday?
                                                    </h5>
                                                </Typography>
                                                <Typography sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                    Ixtiyoriy
                                                </Typography>
                                            </CardContent>
                                        </React.Fragment>
                                    </Card>
                                </Box>

                            </div>
                            <div>

                                <Box sx={{ minWidth: 275 }}>
                                    <Card className='Faq__card' variant="outlined">
                                        <React.Fragment>
                                            <CardContent>
                                                <Typography className="Faqs__cardTitle" variant="h5" component="div">
                                                    <h5 className='faqCarTit'>
                                                        Kurs qaysi kunlari, necha soatdan bo‘lib o‘tadi?
                                                    </h5>
                                                </Typography>
                                                <Typography sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                    Kursimiz 14 May dan boshlanib, Shanba va Yakshanba kunlari 9:30 dan 18:00 gacha bo‘lib o‘tadi.
                                                </Typography>
                                            </CardContent>
                                        </React.Fragment>
                                    </Card>
                                </Box>

                            </div>
                            <div>

                                <Box sx={{ minWidth: 275 }}>
                                    <Card className='Faq__card' variant="outlined">
                                        <React.Fragment>
                                            <CardContent>
                                                <Typography className="Faqs__cardTitle" variant="h5" component="div">
                                                    <h5 className='faqCarTit'>
                                                        Dastur ishtirokchilariga konsultatsiya xizmati mavjudmi?
                                                    </h5>
                                                </Typography>
                                                <Typography sx={{ fontSize: 18 }} className="Faqs__cardContent" color="text.secondary" gutterBottom>
                                                    Ha, premium tarifda mavjud, standart tarifda qatnashsangiz konsultatsiya hizmati uchun 50% chegirmaga ega bo‘lasiz.
                                                </Typography>
                                            </CardContent>
                                        </React.Fragment>
                                    </Card>
                                </Box>

                            </div >

                        </div >




                    </Carousel >


                </div >

            </div >
        </div >
    )
}
export default FAQs