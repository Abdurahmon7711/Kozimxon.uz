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
import "./CarouselCards.css"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 947 },
        items: 3
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

// function createData(title, text) {
//     return { title, text };
// }
//   
// const rows = [
//     createData('Xodimlarni boshqarishda muammoga uchrayapsizmi?', 'Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.'),
//     createData('Xodimlarning KPI tizimi kompaniya foydasiga ishlamayaptimi?', 'Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.'),
//     createData('Sherikchilikdagi biznesingizda muammolar kelib chiqyaptimi?', 'Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.'),
//     createData('Kompaniyangizdagi servis tizimi savdo pastligi uchun asosiy sabablardan birimi?', 'Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.'),
// ];
// 


function CarouselCards() {
    return (
        <div className='container' id="CarouselCards" >

            {/* <h3 className='partTitle' >Biznes protsesda ko‘p <br /> uchratishimiz mumkin bo‘lgan <br /> muammolarga to‘xtalamiz</h3> */}
            <h3 className='partTitle' >Bizneslarda ko'p uchraydigan <br /> muammolarga bizda yechim <br /> topshingiz mumkin.</h3>

            <Carousel responsive={responsive}>

                <div className='KarouselMainCard'>

                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        Kompaniyada HR tizimi to'gri yo'lga qoyilmagan
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>
                </div>
                <div className='KarouselMainCard'>
                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        To'gri hodim tanlashda to'gri instrumentlar qo'llanilmaydi
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>
                </div>
                <div className='KarouselMainCard'>
                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        Bazi ishga olingan hodimrlarning qadriyatlari to'gri emas
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>
                </div>
                <div className='KarouselMainCard'>
                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        Kompaniyada to'gri KPI tizimi joriy qilinmagan
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>
                </div>
                <div className='KarouselMainCard'>
                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        Islom moliyasiga tamoyillariga to'gri keladigan sarmoya jalb qilishni bilishmaydi
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>
                </div>
                <div className='KarouselMainCard'>
                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        Biznesni Islom moliyasi ko'rsatmalari boyicha halol boshqarish qanday bo'ladi

                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>
                </div>
                <div className='KarouselMainCard'>
                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        Bizensda barakaga erishish yo'llari qanday
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>
                </div>
                <div className='KarouselMainCard'>
                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        Qadriyatlarga asoslangan liderlik va boshqaruv qanday bo'la
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>
                </div>
                <div className='KarouselMainCard'>
                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        Halqaro standardlarga javob beruvchi hizmat ko'rsatish va raqobatbardosh bo'lish uchun nima qilish kerak
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>
                </div>
                <div className='KarouselMainCard'>
                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        Samaradorlikni oshiruvchi KAIZEN tizimini qanday qilib joriy qilish mumkin
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>
                </div>
                <div className='KarouselMainCard'>
                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        Qadriyatlarga asoslangan shaxsiy rivojlanish uchun biznes boshqaruvchisi qanday yo'l tutushi kerak
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>
                </div>


                {/* <div className='KarouselMainCard'>
                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }} >
                        <Card className='Karousel__card KarouselAccor__cardPartBl' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                    Xodimlarni boshqarishda muammoga uchrayapsizmi ?
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} className="Karousel__cardContent" color="text.secondary" gutterBottom>
                                        Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>

                </div>

                <div className='KarouselMainCard'>

                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                    Xodimlarning KPI tizimi kompaniya foydasiga ishlamayaptimi?
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} className="Karousel__cardContent" color="text.secondary" gutterBottom>
                                        Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>

                </div>
                <div className='KarouselMainCard'>

                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                    Sherikchilikdagi biznesingizda muammolar kelib chiqyaptimi?
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} className="Karousel__cardContent" color="text.secondary" gutterBottom>
                                        Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>

                </div>
                <div className='KarouselMainCard'>

                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                    Kompaniyangizdagi servis tizimi savdo pastligi uchun asosiy sabablardan birimi?
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} className="Karousel__cardContent" color="text.secondary" gutterBottom>
                                        Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>

                </div> */}

                <div >
                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                    </Box>
                </div>



            </Carousel>

        </div>
    )
}
export default CarouselCards