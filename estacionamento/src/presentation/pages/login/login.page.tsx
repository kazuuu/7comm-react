// in Login.tsx inside components
import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Paper, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link, useNavigate } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
//redux stuff
import { connect } from 'react-redux';
import { signIn } from '../../../domain/services/auth/auth.service';

function Login(props: any) {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: null,
        password: null,
        message: null 
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (props.UI.errors) {
            setErrors(props.UI.errors);
        }

        setLoading(props.UI.loading);
    }, [props.UI])

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setLoading(true);

        //your client side validation here
        //after success validation
        const userData = {
            username: values.email,
            password: values.password,
        };

        console.log('Login isAuthenticated 1', props.isAuthenticated);

        props.signIn(userData, navigate);

        // let navigate = useNavigate();
        // navigate("/dash");

        console.log('Login isAuthenticated 2', props.isAuthenticated);

    }

    const handleChange = (e: any) => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <Box>
            <Box>
                <Typography variant='h4'>
                    <Box fontWeight={600} letterSpacing={3}>
                        SIGN IN
                    </Box>
                 </Typography>
            </Box>
            <Container component='main' maxWidth='md'>
                <CssBaseline />
                <Grid
                container
                alignContent='center'
                alignItems='center'
                // justify='center'
                spacing={3}>
                    <Grid
                    item
                    md={3}>
                    {/* <img src="" alt='My Logo' /> */}
                    </Grid>
                    <Grid item md={9}>
                        <Paper>
                            <Box>
                                <TextField
                                variant='outlined'
                                margin='none'
                                value={values.email}
                                fullWidth
                                id='email'
                                label='Email Address'
                                name='email'
                                type='email'
                                onChange={handleChange}
                                helperText={errors.email}
                                error={errors.email ? true : false}
                                />
                                <TextField
                                variant='outlined'
                                margin='normal'
                                value={values.password}
                                fullWidth
                                name='password'
                                label='Password'
                                type='password'
                                onChange={handleChange}
                                helperText={errors.password}
                                error={errors.password ? true : false}
                                />
                                {errors.message && (
                                    <Typography variant='body2'>
                                    {errors.message}
                                    </Typography>
                                )}
                                <Grid container>
                                    <Grid item sm={6} md={6}>
                                        <FormControlLabel
                                        control={
                                            <Checkbox value='remember' color='primary' />
                                        }
                                        label='Remember me'
                                        />
                                    </Grid>
                                    <Grid item sm={6} md={6}>
                                        <Link to='#'>
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Button type='submit' variant='contained' color='primary' disabled={loading} onClick={handleSubmit}>
                                    Login
                                    {loading && (<CircularProgress className="" size={30} color='secondary' />)}
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container >
        </Box>
    )
}

//this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
 isAuthenticated: state.user.isAuthenticated,
 UI: state.UI
});

//this map actions to our props in this functional component
const mapActionsToProps = {
    signIn
};

export default connect(mapStateToProps, mapActionsToProps)(Login);