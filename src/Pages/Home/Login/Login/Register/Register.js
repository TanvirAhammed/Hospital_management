import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import login from '../../../../../images/login.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth'
const Register = () => {
    const [loginData, setLoginData] = useState({})

    const { user, registerUser, isLoading, authError } = useAuth();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match');
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="User Email"
                            name='email'
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            name='password'
                            onChange={handleOnChange}
                            type='password'
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            name='password2'
                            onChange={handleOnChange}
                            type='password'
                            variant="standard" />

                        <Button type='submit' sx={{ width: '75%', m: 1 }} variant="contained">Submit</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button variant='text'>Already User? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt='log' />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;