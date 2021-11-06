import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import footer from '../../../images/footer-bg.png'
import { Button, Paper, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${footer})`,



}
const Footer = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1, mt: 10, m: 10 }}>
            <Grid container spacing={8}>

                <Grid item xs={12} md={6} >
                    <Box


                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            textAlign: 'center',
                            alignItems: 'center',



                        }}
                    >
                        <Typography variant='p' sx={{ ml: 4 }} >
                            <Typography sx={{ width: 140 }}>
                                Emergency Dental Care <br />
                                Check Up<br />
                                Treacment of Personal Diseases<br />
                                Tooth Extration<br />
                                Check Up<br />
                            </Typography>
                        </Typography>


                        <Typography sx={{ ml: 16 }}>
                            <Typography variant='p' sx={{}} style={{ color: '#5CE7ED', fontWeight: '700' }}>
                                Services <br />
                            </Typography>
                            <Typography sx={{ width: 140 }}>
                                Emergency Dental Care <br />
                                Check Up<br />
                                Treacment of Personal Diseases<br />
                                Tooth Extration<br />
                                Check Up<br />
                                Check Up<br />
                                Check Up
                            </Typography>
                        </Typography>

                        <Typography sx={{ ml: 16 }}>
                            <Typography variant='p' sx={{}} style={{ color: '#5CE7ED', fontWeight: '700' }}>
                                Oral Health <br />
                            </Typography>
                            <Typography sx={{ width: 140 }}>
                                Emergency Dental Care <br />
                                Check Up<br />
                                Treacment of Personal Diseases<br />
                                Tooth Extration<br />
                                Check Up<br />
                                Check Up<br />
                                Check Up
                            </Typography>
                        </Typography>
                        <Typography sx={{ ml: 16 }}>
                            <Typography variant='p' sx={{}} style={{ color: '#5CE7ED', fontWeight: '700' }}>
                                Our Address <br />
                            </Typography>
                            <Typography sx={{ width: 140 }}>
                                Emergency Dental Care <br />
                                Check Up<br />
                                Treacment of Personal Diseases<br />
                                Tooth Extration<br />
                                Check Up<br />
                                Check Up<br />
                                Check Up
                            </Typography>
                        </Typography>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />



                    </Box>



                </Grid>

            </Grid>
            <Typography variant='p' sx={{
                textAlign: 'center',
                alignItems: 'center'
            }}>
                Copyright Doctors @2021
            </Typography>
        </Box>
    );
};

export default Footer;