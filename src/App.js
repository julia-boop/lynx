import './App.css';
import './components/Home/Home'
import React, {useState} from 'react';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Product from './components/Product/Product';
import Service from './components/Service/Service';
import Faqs from './components/Faqs/Faqs';
import Logo from './components/Home/Logo';
import Client from './components/Client/Client';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
    return (
    <>
    <Router>
    <div id="outer-container">
    <Menu/>
    <Logo/>
      <div id="page-wrap">
        <Home />
        <About />
        <Product/>
        <Service/>
        <Client/>
        <Faqs/>
        <Contact/>
        <Footer/>
      </div>
    </div>
    </Router>
    
    </>
  );
}
 
export default App;
