import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: ' 500px',


}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography sx={{ mb: 5 }} variant='h3'>
                            Your New Smile <br />
                            Starts Here
                        </Typography>

                        <Typography variant='p' sx={{ my: 5, fontSize: 14, color: "gray" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sequi quibusdam itaque nemo, obcaecati corrupti? Officia ab animi accusamus vero perspiciatis qui quod expedita explicabo inventore et, sapiente vitae excepturi!
                        </Typography><br />
                        <Button sx={{ mt: 5 }} style={{ backgroundColor: '#5CE7ED' }} variant='contained'>GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img

                        style={{ width: '400px' }} src={chair} alt="" />
                </Grid>

            </Grid>


        </Container>


    );
};

export default Banner;