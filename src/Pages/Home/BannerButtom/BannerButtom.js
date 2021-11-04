import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const BannerButtom = () => {
    return (
        <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ py: 5 }}>
                        <Typography variant='h2' sx={{ ml: 5 }}>Hello</Typography>
                    </Paper>
                    <Paper elevation={3} sx={{ py: 5 }}>
                        <Typography sx={{ ml: 5 }} variant='h2'>Hello</Typography>
                    </Paper>
                    <Paper elevation={3} sx={{ py: 5 }}>
                        <Typography variant='h2'>Hello</Typography>
                    </Paper>

                </Grid>
            </Grid>
        </Container>

    );
};

export default BannerButtom;