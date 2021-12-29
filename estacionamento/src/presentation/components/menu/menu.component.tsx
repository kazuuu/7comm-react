import React from "react";
import { Link } from "react-router-dom";

const MenuComponent = () => (
    <aside className="MenuComponent">
        Menu Component:
        <Link to="/">[Home]</Link>
        -
        <Link to="/about">[About]</Link>
    </aside>
);

export default MenuComponent;