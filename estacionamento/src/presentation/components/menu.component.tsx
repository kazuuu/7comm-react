import React, { FC } from "react";
import { Link } from "react-router-dom";
import { AuthType } from "../../data/sources/redux/auth.type";
import { signOut } from "../../domain/services/auth.service";
import store from '../../data/sources/redux/store';
import { connect } from "react-redux";

const MenuComponent:FC<any> = (props: any) => {
    const signOut = async (e: any) => {
        console.log("logout");

        e.preventDefault();
        
        props.signOut();
        
    }

    return (
        <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/login">Login</Link>
            {" | "}
            <Link to="/dash">Dash</Link>
            {" | "}
            <Link to={""} onClick={signOut}>Logout</Link>
        </nav>
    );
}

//this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
    isAuthenticated: state.user.isAuthenticated,
    UI: state.UI
});

//this map actions to our props in this functional component
const mapActionsToProps = {
    signOut
};
   
export default connect(mapStateToProps, mapActionsToProps)(MenuComponent);

// export default MenuComponent;