import React from 'react'
import { Route, Navigate, RouteProps, Outlet } from 'react-router-dom'
import { connect } from 'react-redux'

interface MyRouteProps extends RouteProps{
    isAuthenticated: boolean;
    rest?:any
}

const PrivateOutlet = (props: MyRouteProps) => {
    console.log("PrivateOutlet", props)
    return props.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(PrivateOutlet)