import React from 'react'
import { Route, Navigate, RouteProps, Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import MenuComponent from "../../../presentation/components/menu.component";

interface MyRouteProps extends RouteProps{
    isAuthenticated:boolean;
}

const PublicOutlet = (props: MyRouteProps) => {
    return <>
            <MenuComponent />
            <Outlet />
    </>;
}
  
const mapStateToProps = (state:any) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(PublicOutlet)