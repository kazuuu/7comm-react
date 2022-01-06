import React, { FC } from "react";
import { Link } from "react-router-dom";

const MenuComponent:FC<any> = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/login">Login</Link>
            {" | "}
            <Link to="/dash">Dash</Link>
            {" | "}
            <Link to="/logout">Logout</Link>
        </nav>
    );
}

export default MenuComponent;