import React from 'react'
import Cv from "../../assets/gamal-Cv.pdf"
import Persone from "../../assets/person.png"
import "./about.css"
import { Info } from './Info'
import Files from '../../assets/Files'

const urlCV = "https://drive.google.com/file/d/15bIjQ7Z7QrFOUxvvwlGAWUjdL19nZBnK/view?usp=gmail"
export const About = () => {

    return (
        <section className='section about' id='about'>
            <h2 className='section__title'>About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className='about__container container grid'>
                <img src={Persone} className="about__img" alt='' />
                <div className='about__data'>
                    <Info />
                    <p className='about__description'>
                        I'm  highly motivated and experienced ReactJS & nodejs developer with 3 years of expertise in building scalable and efficient web applications. I'm excited to apply for the ReactJS Developer position at Your Company.

                    </p>

                    <a target="_blank" href={urlCV} className='button button--flex' rel="noreferrer">
                        Download CV
                        <Files color='var(--container-color)' />
                    </a>
                </div>
            </div>
        </section>
    )
}
