import React, { useState } from 'react';
import Header from './components/header/Header';
import "./App.css";
import Home from './components/home/Home';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Services } from './components/services/Services';
import { Qualification } from './components/qualification/Qualification';
import Testimonial from './components/testimonial/Testimonial';
import { Contect } from './components/contect/Contect';
import { Scrollup } from './components/scrollup/scrollup';
import { Works } from './components/works/Works';
import { StyleSwitcher } from './components/styleSwitcher/StyleSwitcher';
import { Footer } from './components/footer/Footer';
import Loading from './components/Loading/Loading';
const App = () => {
    const [load, setLoad] = useState(false);
    setTimeout(() => {
        setLoad(true)
    }, 1000);
    return <>
        {load ?
            <>
                <Header />
                <main className='main'>
                    <Home />
                    <About />
                    <Skills />
                    <Services />
                    <Qualification />
                    <Works />
                    <Testimonial />
                    <Contect />
                </main>
                <Footer />
                <Scrollup />
                <StyleSwitcher />

            </> : <Loading />
        }
    </>

}

export default App