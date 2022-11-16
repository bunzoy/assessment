import React from "react";
import Header from "./HeaderComponents";
import Footer from "./FooterComponents";

function Main (){
    return(
        <React.Fragment>
            <Header/>
            <div>Hello World! Main Component</div>
            <Footer/>
        </React.Fragment>
    )
}

export default Main;