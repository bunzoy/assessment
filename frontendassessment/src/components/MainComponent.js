import React from "react";
import Header from "./HeaderComponents";
import Footer from "./FooterComponents";


import Home from "./HomeComponent";
import About from "./AboutComponent";

import {Routes, Router, Redirect, withRouter} from 'react-router-dom'

function Main (){
    return(
        <React.Fragment>
            <Header/>
            
            <Routes>
                
                <Routes path='/home' component={Home}/>
                <Routes path='/about' component={About}/>

            </Routes>



            <Footer/>
        </React.Fragment>
    )
}

export default withRouter(Main);