import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <NavLink className="link" activeClassName="active" exact to="/">Post</NavLink>
            <NavLink className="link" activeClassName="active" exact to="/About">About</NavLink>
        </div>
    );
}

export default Menu;