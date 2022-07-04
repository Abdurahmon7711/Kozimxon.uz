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



function CarouselCards() {
    return (
        <div className='container' >

        <h3 className='partTitle' >Biznes protsesda ko‘p <br/> uchratishimiz mumkin bo‘lgan <br /> muammolarga to‘xtalamiz</h3>

            <Carousel responsive={responsive}>
                <div>

                    <Box sx={{ minWidth: 275 }} >
                        <Card className='Karousel__card KarouselAccor__cardPartBl' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        Kouching dasturimizda o‘qish uchun ro‘yxatdan o‘ting!
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} className="Karousel__cardContent" color="text.secondary" gutterBottom>
                                        Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>

                </div>
                <div>

                    <Box sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        Kouching dasturimizda o‘qish uchun ro‘yxatdan o‘ting!
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} className="Karousel__cardContent" color="text.secondary" gutterBottom>
                                        Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>

                </div>
                <div>

                    <Box sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        Kouching dasturimizda o‘qish uchun ro‘yxatdan o‘ting!
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} className="Karousel__cardContent" color="text.secondary" gutterBottom>
                                        Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>

                </div>
                <div>

                    <Box sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography className="Karousel__cardTitle" variant="h5" component="div">
                                        Kouching dasturimizda o‘qish uchun ro‘yxatdan o‘ting!
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} className="Karousel__cardContent" color="text.secondary" gutterBottom>
                                        Zamonaviy va qadriyatlarga asoslangan holda o‘z biznesini boshqarmoqchi bo‘lgan biznes egalari uchun.
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>

                </div>
            </Carousel>

        </div>
    )
}
export default CarouselCards