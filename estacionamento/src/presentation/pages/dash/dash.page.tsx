// in Login.tsx inside components
import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
//redux stuff
import { connect } from 'react-redux';
import { loginUser } from '../../../domain/redux/actions/userActions';

function DashPage(props: any) {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (props.UI.errors) {
            setErrors(props.UI.errors);
        }

        setLoading(props.UI.loading);
    }, [props.UI])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);

        //your client side validation here
        //after success validation
        const userData = {
            email: values.email,
            password: values.password,
        };

        props.loginUser(userData, props.history);
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
            DashBoard Authenticated
        </Box>
    )
}

//this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
 user: state.user,
 UI: state.UI
});

//this map actions to our props in this functional component
const mapActionsToProps = {
 loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(DashPage);