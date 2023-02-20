import React from 'react'
import Cv from "../../assets/gamal-Cv.pdf"
import Persone from "../../assets/person.png"
import "./about.css"
import { Info } from './Info'
import Files from '../../assets/Files'
export const About = () => {
    return (
        <section className='section about' id='about'>
            <h2 className='section__title'>About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className='about__container container grid'>
                <img src={Persone} className="about__img" alt=''/>
                <div className='about__data'>
                    <Info/>
                    <p className='about__description'>
                        Frontend developer, I create web pages
                        with UI / UX user interface, I have years
                        of experience and many clients are happy
                        with the projects carried out.

                    </p>

                    <a download="" href={Cv} className='button button--flex'>
                        Download CV
                        <Files color='var(--container-color)' />
                    </a>
                </div>
            </div>
        </section>
    )
}
