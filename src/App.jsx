import React from 'react';
import Header from './components/header/Header';
import "./App.css";
import Home from './components/home/Home';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Services } from './components/services/Services';
import { Qualification } from './components/qualification/Qualification';
import Testimonial from './components/testimonial/Testimonial';
import { Contect } from './components/contect/Contect';
import { Footer } from './components/footer/Footer';
import { Scrollup } from './components/scrollup/scrollup';
import { Works } from './components/works/Works';
const App=()=>(
    <>
        <Header/>
        <main className='main'>
            <Home/>
            <About/>
            <Skills/>
            <Services/>
            <Qualification/>
            <Works/>
            <Testimonial/>
            <Contect/>
        </main>
        <Footer/>
        <Scrollup/>
    </>
);

export default App