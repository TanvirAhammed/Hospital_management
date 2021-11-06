import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingMobal from '../BookingMobal/BookingMobal';

const Booking = ({ booking, date }) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
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

                    <Button onClick={handleBookingOpen} variant='contained'>Book Appointment</Button>
                </Paper>

            </Grid>

            <BookingMobal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
            >
            </BookingMobal>
        </>
    );
};

export default Booking;