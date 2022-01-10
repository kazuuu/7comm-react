// in Login.tsx inside components
import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';

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

    return (
        <Box>
            DashBoard Authenticated
        </Box>
    )
}

//this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
 user: state.auth,
 UI: state.UI
});

//this map actions to our props in this functional component
const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(DashPage);