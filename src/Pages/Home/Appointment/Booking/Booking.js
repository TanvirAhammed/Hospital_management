import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';

const Booking = ({ booking }) => {
    const { name, time, space } = booking;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ py: 5 }}>
                <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant='h5' >
                    {name}
                </Typography>
                <Typography variant='h6' >
                    {time}
                </Typography>
                <Typography variant='caption' >
                    Spaces Available {space}
                </Typography><br />

                <Button variant='contained'>Book Appointment</Button>
            </Paper>

        </Grid>


    );
};

export default Booking;