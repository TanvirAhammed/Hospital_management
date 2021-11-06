import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Booking from '../Booking/Booking'
const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 6,
    },
    {
        id: 4,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 5,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 6,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
]








const AvailableAppointment = ({ date }) => {
    return (

        <Container>
            <Typography variant='h4' sx={{ color: 'info.main', mb: 2, mt: 4 }}>Available Appointment {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}

                    ></Booking>)
                }
            </Grid>

        </Container>
    );
};

export default AvailableAppointment;