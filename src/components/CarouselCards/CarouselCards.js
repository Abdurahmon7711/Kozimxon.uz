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
import Carouselcard from './CarouselTop/Carouselcard';

// import CarouseCardComp from './CarouselTop/CarouseCardComp';
import arrowLeft from '../../assets/images/arrowLeft.png'
import arrowRight from '../../assets/images/arrowRight.png'
import arrowLeftDis from '../../assets/images/arrowLeftDis.png'
import arrowRightDis from '../../assets/images/arrowRightDis.png'



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

function scrollL(params) {
    window.scroll({
        top: 100,
        left: 100,
        behavior: 'smooth'
    });
}

function CarouselCards() {
    return (
        <div className='container' id="CarouselCards" >

            <>
                <div className='iconBox'>
                    <h3 className='partTitle' >Bizneslarda ko'p uchraydigan <br /> muammolarga bizda yechim <br /> topshingiz mumkin.</h3>
                </div>
                
                <Carouselcard />

                    <div className='arrowPart'>
                        <img className='arrow' src={arrowLeft} onClick={(e) => { if (arrowLeft) { e.target.src = arrowLeftDis } else { e.target.src = arrowLeft } }} />
                        <img className='arrow' src={arrowRight} onClick={(e) => { e.target.src = arrowRightDis }} />
                    </div>
                <div className='arrowPart'>
                        <img className='arrow' src={arrowLeftDis} onClick={(e) => { e.target.src = arrowLeftDis }} />
                        <img className='arrow' src={arrowRightDis} />
                    </div>

            </>


{/* 
            <Carousel responsive={responsive}>

                <div className='KarouselMainCard'>

                    <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card KarouselAccor__cardPartBl' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        Kompaniyada HR tizimi to'gri yo'lga qoyilmaganmi ?
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} className="Karousel__cardContent" color="text.secondary" gutterBottom>
                                        Kompaniyangiz uchun xalqaro standartlarga javob beruvchi HR tizimini biz bilan quring.
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
                                        Kerakli xodim tanlashda to'g'ri instrumentlar qo'llanilmaydi.
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} className="Karousel__cardContent" color="text.secondary" gutterBottom>
                                        Bugun xalqaro bozorda qo'llanilayotgan STAR suhbat o'tqazish instrumenti, xodim kartinkasi va boshqalarni joriy eting.
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
                                    <Typography sx={{ fontSize: 14 }} className="Karousel__cardContent" color="text.secondary" gutterBottom>
                                        Kompaniyangiz uchun "Korparativ Madaniyat" va "Kompaniya Qadriyatlari"ni tuzing.
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
                                        Kompaniyada o'rnatilgan KPI tizimi samarali ishlamaydi.
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} className="Karousel__cardContent" color="text.secondary" gutterBottom>
                                        KPI tizimini to'g'ri o'rnatish orqali xodimlaringiz samaradorligini oshiring.
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>
                </div>

            </Carousel> */}

        </div>
    )
}
export default CarouselCards