import React from "react";
import './NavComponent.css';
import {Link } from "react-router-dom";

export function Nav () {
    return(
        <div className="Nav ">

            <ul>
                <li><Link to="/" style={{ textDecoration: 'none' , color: 'white' }}>Main</Link></li>
                <li><Link to="/Home" style={{ textDecoration: 'none' , color: 'white' }}>Home</Link></li>
                <li><Link to="/About" style={{ textDecoration: 'none' , color: 'white' }}>About</Link></li>
            </ul>  
            
        </div>
    )
}

export default Nav;