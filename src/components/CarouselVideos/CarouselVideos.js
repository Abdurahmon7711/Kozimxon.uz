import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
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
                                <iframe className='videoBox' width="350" height="200" src="https://www.youtube.com/embed/tjdYy0ZycMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <Typography sx={{ fontSize: 14 }} className="Video__cardContent" color="text.secondary" gutterBottom>
                                        Ahmadaliyeva Nodira
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                    </Box>

                </div>
                <div>

                    <Box className='CarouselItem' sx={{ minWidth: 275 }}>
                            <React.Fragment>
                                <CardContent className='videoBlcCont'>
                                <iframe className='videoBox' width="350" height="200" src="https://www.youtube.com/embed/JWIr-erJiVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <Typography sx={{ fontSize: 14 }} className="Video__cardContent" color="text.secondary" gutterBottom>
                                        Abu Solih
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                    </Box>

                </div>
                <div>

                    <Box className='CarouselItem' sx={{ minWidth: 275 }}>
                            <React.Fragment>
                                <CardContent className='videoBlcCont'>
                                <iframe className='videoBox' width="350" height="200" src="https://www.youtube.com/embed/HxJSRC8W9EE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <Typography sx={{ fontSize: 14 }} className="Video__cardContent" color="text.secondary" gutterBottom>
                                        Kurs qatnashuvchisi
                                    </Typography>
                                </CardContent>
                            </React.Fragment>
                    </Box>

                </div>
                <div>

                    <Box className='CarouselItem' sx={{ minWidth: 275 }}>
                            <React.Fragment>
                                <CardContent className='videoBlcCont'>
                                <iframe className='videoBox' width="350" height="200" src="https://www.youtube.com/embed/JRJ0FNt4fHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <Typography sx={{ fontSize: 14 }} className="Video__cardContent" color="text.secondary" gutterBottom>
                                        Abdulloh
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