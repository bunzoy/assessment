import React from 'react';
import { Main } from './components/MainComponent'
import { Home } from './components/HomeComponent'
import { About } from './components/AboutComponent'
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

import { Route, Routes, Link  } from 'react-router-dom/dist';


export function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
      </Routes>   

      <Footer/>
    </>
  )
}

export default App;