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
import "./CarouselVideos.css"
import vidBlock from '../../assets/images/vidBlock.png'

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



function CarouselVideos() {
    return (
        <div className='container carVid' id="carVid" >

        <h3 className='partTitle' >Kouching dasturi <br/>ishtirokchilari fikri qanday ? </h3>

            <Carousel responsive={responsive}>
                <div>

                    <Box className='CarouselItem' sx={{ minWidth: 275 }} >
                            <React.Fragment>
                                <CardContent className='videoBlcCont'>
                                    <img src={vidBlock} alt={"ad"}/>
                                    <Typography sx={{ fontSize: 14 }} className="Video__cardContent" color="text.secondary" gutterBottom>
                                        John Doe
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                    </Box>

                </div>
                <div>

                    <Box className='CarouselItem' sx={{ minWidth: 275 }}>
                            <React.Fragment>
                                <CardContent className='videoBlcCont'>
                                <img src={vidBlock} alt={"ad"}/>
                                    <Typography sx={{ fontSize: 14 }} className="Video__cardContent" color="text.secondary" gutterBottom>
                                        John Doe
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                    </Box>

                </div>
                <div>

                    <Box className='CarouselItem' sx={{ minWidth: 275 }}>
                            <React.Fragment>
                                <CardContent className='videoBlcCont'>
                                <img src={vidBlock} alt={"ad"}/>
                                    <Typography sx={{ fontSize: 14 }} className="Video__cardContent" color="text.secondary" gutterBottom>
                                        John Doe
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                    </Box>

                </div>
                <div>

                    <Box className='CarouselItem' sx={{ minWidth: 275 }}>
                            <React.Fragment>
                                <CardContent className='videoBlcCont'>
                                <img src={vidBlock} alt={"ad"}/>
                                    <Typography sx={{ fontSize: 14 }} className="Video__cardContent" color="text.secondary" gutterBottom>
                                        John Doe
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                    </Box>

                </div>
                <div>

                    <Box className='CarouselItem' sx={{ minWidth: 275 }}>
                            <React.Fragment>
                                <CardContent className='videoBlcCont'>
                                <img src={vidBlock} alt={"ad"}/>
                                    <Typography sx={{ fontSize: 14 }} className="Video__cardContent" color="text.secondary" gutterBottom>
                                        John Doe
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                    </Box>

                </div>
                
                <div>

                    <Box className='CarouselItem' sx={{ minWidth: 275 }}>
                            <React.Fragment>
                                <CardContent className='videoBlcCont'>
                                <img src={vidBlock} alt={"ad"}/>
                                    <Typography sx={{ fontSize: 14 }} className="Video__cardContent" color="text.secondary" gutterBottom>
                                        John Doe
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                    </Box>

                </div>
                

            </Carousel>

        </div>
    )
}
export default CarouselVideos