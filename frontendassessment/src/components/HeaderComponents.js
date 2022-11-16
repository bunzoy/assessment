import React from "react";
import './HeaderComponent.css';
import Home from "./HomeComponent";
import About from "./AboutComponent";

import {Link } from "react-router-dom";

function Header () {
    return(
        <div>
            <h1>Header</h1>
            <Link to="/HomeComponent"><button>Home</button></Link>
            <Link to="/AboutComponent"><button>About</button></Link>
        </div>
    )
}

export default Header;