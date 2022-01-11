import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import store from '../../data/sources/redux/store';
import { connect } from "react-redux";
import AuthService from "../../domain/services/auth.service";

const MenuComponent:FC<any> = (props: any) => {
    const navigate = useNavigate();
    let authService = new AuthService();
    
    const signOut = async (e: any) => {
        // console.log("logout");

        // e.preventDefault();
        
        // props.signOut();
        authService.signOut();
                
        navigate('/login');
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

// //this map the states to our props in this functional component
// const mapStateToProps = (state: any) => ({
//     isAuthenticated: state.auth.isAuthenticated,
//     UI: state.UI
// });

// //this map actions to our props in this functional component
// const mapActionsToProps = {
//     signOut
// };
   
// export default connect(mapStateToProps, mapActionsToProps)(MenuComponent);

export default MenuComponent;