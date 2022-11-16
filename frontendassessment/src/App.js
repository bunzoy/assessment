import React from 'react';
import Main from './components/MainComponent';
import Header from "./components/HeaderComponents";
import Footer from "./components/FooterComponents";
import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
import {Link } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
            <Router>

            
           
            <Header/>
            <ul>
                    <li>
                        <Link to="/"><button>Main</button></Link>
                    </li>
                    <li>
                        <Link to="/About"><button>About</button></Link>
                    </li>
                    <li>
                        <Link to="/Home"><button>Home</button></Link>
                    </li>
                </ul>
            <Switch>
                <Route path='/main' component={Main}/>
                <Main/>
                <Route/>

                <Route path='/about' component={About}/>
                <About/>
                <Route/>

                <Route path='/home' component={Home}/>
                <Home/>
                <Route/>

            </Switch>
            <Footer/>
            
            </Router>

        </React.Fragment>
  );
}

export default App;
