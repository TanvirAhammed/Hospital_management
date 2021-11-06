import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import baby from '../../../images/treatment.png'

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    // height: ' 500px',
    marginTop: '40px'

}

const together = {
    marginTop: '60px',
    marginRight: '80px'
}
const Exceptional = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: 12 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={12}   >
                    <img maxWidth="sm" style={{ width: '100%', height: '500px' }} src={baby} alt="" />
                </Grid>

                <Grid item style={{ textAlign: 'left' }} xs={12} md={6} sm={4}>
                    <Box style={together}>
                        <Typography sx={{ mb: 5 }} variant='h3'>
                            Exceptional Dental <br />
                            Care,on your Terms
                        </Typography>

                        <Typography variant='p' sx={{ my: 5, fontSize: 14, color: "gray" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sequi quibusdam itaque nemo, obcaecati corrupti? Officia ab animi accusamus vero perspiciatis qui quod expedita explicabo inventore et, sapiente vitae excepturi!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sequi quibusdam itaque nemo, obcaecati corrupti? Officia ab animi accusamus vero perspiciatis qui quod expedita explicabo inventore et, sapiente vitae excepturi!
                        </Typography><br />
                        <Button sx={{ mt: 5 }} style={{ backgroundColor: '#5CE7ED' }} variant='contained'>Larne More</Button>
                    </Box>
                </Grid>

            </Grid>


        </Container>


    );
};

export default Exceptional;