import React from 'react'
import { Route, Navigate, RouteProps, Outlet } from 'react-router-dom'
import { connect } from 'react-redux'

interface MyRouteProps extends RouteProps{
    isAuthenticated:boolean;
}

const GuestOutlet = (props: MyRouteProps) => {
    console.log("PublicOutlet", props.isAuthenticated)
    return <Outlet />;
}
  
const mapStateToProps = (state:any) => ({
    isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(GuestOutlet)