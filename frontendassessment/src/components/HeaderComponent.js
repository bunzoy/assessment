import React from "react";
import './Style.css';
import {Link } from "react-router-dom";


export function Header () {
    return(
        <div className="Header shadow-md w-full">
            <h1 className={Header.H1}>Frontend assessment</h1>    

            <ul>
                <li><Link to="/" style={{ textDecoration: 'none' , color: 'black' }}>Map</Link></li>
                <li><Link to="/About" style={{ textDecoration: 'none' , color: 'black' }}>About</Link></li>
            </ul>          
        </div>
    )
}

export default Header;