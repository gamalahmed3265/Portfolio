import React from 'react';
import Header from './components/header/Header';
import "./App.css";
import Home from './components/home/Home';
import { About } from './components/about/About';
const App=()=>(
    <>
        <Header/>
        <main className='main'>
            <Home/>
            <About/>
        </main>
    </>
);

export default App