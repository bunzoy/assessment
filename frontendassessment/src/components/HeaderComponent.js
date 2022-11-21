import React from "react";
import './HeaderComponent.css';
import {Link } from "react-router-dom";


export function Header () {
    return(
        <div className="Header shadow-md w-full">
            <h1 className={Header.H1}>Header</h1>            
        </div>
    )
}

export default Header;