import { Container, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Box, margin } from '@mui/system';
import pic1 from '../../../images/people-1.png'
import pic2 from '../../../images/people-2.png'
import pic3 from '../../../images/people-3.png'

const Testimonial = () => {
    return (

        <Container>
            <Grid container columns={{ xs: 4, sm: 4, md: 4 }} sx={{ mt: 12 }}>
                <Card sx={{ maxWidth: 350, mt: 4, ml: 4 }}>
                    <Typography variant='h6' sx={{ m: 3 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, odit? Sunt repellat architecto rem similique asperiores voluptates adipisci amet repudiandae explicabo enim exercitationem autem illo non maiores iure, error aliquam.
                        <br />
                        <br />
                    </Typography>


                    <Typography style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px' }}>
                        <Typography>
                            <img src={pic1} alt="" />
                        </Typography>

                        <Typography variant='h6'>
                            <Typography style={{ color: 'green' }} variant='h5'> Winson Herry</Typography>
                            Calofania
                        </Typography>
                    </Typography>
                </Card>
                <Card sx={{ maxWidth: 350, ml: 4, mt: 4 }}>
                    <Typography variant='h6' sx={{ m: 3 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, odit? Sunt repellat architecto rem similique asperiores voluptates adipisci amet repudiandae explicabo enim exercitationem autem illo non maiores iure, error aliquam.
                        <br />
                        <br />
                    </Typography>


                    <Typography style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px' }}>
                        <Typography>
                            <img src={pic2} alt="" />
                        </Typography>

                        <Typography variant='h6'>
                            <Typography style={{ color: 'green' }} variant='h5'> Winson Herry</Typography>
                            Calofania
                        </Typography>
                    </Typography>
                </Card>
                <Card sx={{ maxWidth: 350, ml: 4, mt: 4 }}>
                    <Typography variant='h6' sx={{ m: 3 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, odit? Sunt repellat architecto rem similique asperiores voluptates adipisci amet repudiandae explicabo enim exercitationem autem illo non maiores iure, error aliquam.
                        <br />
                        <br />
                    </Typography>


                    <Typography style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px' }}>
                        <Typography>
                            <img src={pic3} alt="" />
                        </Typography>

                        <Typography variant='h6'>
                            <Typography style={{ color: 'green' }} variant='h5'> Winson Herry</Typography>
                            Calofania
                        </Typography>
                    </Typography>

                </Card>

            </Grid>
        </Container>


    );
};

export default Testimonial;