import React from 'react';
import { Map } from './components/MapComponent'
import { About } from './components/AboutComponent'
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

import { Route, Routes, Link  } from 'react-router-dom/dist';


export function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Map/>} />
        <Route path="/About" element={<About/>} />
      </Routes>   

      <Footer/>
    </>
  )
}

export default App;