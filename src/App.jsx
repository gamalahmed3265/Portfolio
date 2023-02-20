import React from 'react';
import Header from './components/header/Header';
import "./App.css";
import Home from './components/home/Home';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Services } from './components/services/Services';
import { Qualification } from './components/qualification/Qualification';
const App=()=>(
    <>
        <Header/>
        <main className='main'>
            <Home/>
            <About/>
            <Skills/>
            <Services/>
            <Qualification/>
        </main>
    </>
);

export default App