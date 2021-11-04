import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appointment from '../../../images/appointment-bg.png'
import { Button, Paper, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${appointment})`,
    backgroundColor: 'rgba(45,58,74,.9)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: 140,

}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: -110 }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    alignItems: 'center'


                }}>
                    <Box>
                        <Typography variant='h6' sx={{ mb: 3 }} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant='h6' style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant='p' style={{ color: 'white' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque exercitationem expedita nihil id quisquam blanditiis alias est quaerat libero repudiandae, omnis totam at voluptatibus distinctio fugit enim corporis asperiores animi.
                        </Typography>
                        <br />

                        <Button sx={{ mt: 5 }} style={{ backgroundColor: '#5CE7ED' }} variant='contained'>Larne More</Button>
                    </Box>


                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;