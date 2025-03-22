import React from 'react'
import Persone from "../../assets/person.png"
import "./about.css"
import { Info } from './Info'
import Files from '../../assets/Files'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../motion/motion'

const urlCV = "https://drive.google.com/file/d/15bIjQ7Z7QrFOUxvvwlGAWUjdL19nZBnK/view?usp=gmail"
export const About = () => {

    return (
        <section className='section about' id='about' variants={staggerContainer}>
            <h2 className='section__title'>About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <motion.div variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }} className='about__container container grid'>
                <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
                    <img src={Persone} className="about__img" alt='' />

                </motion.div>
                <motion.div className='about__data' variants={fadeIn("left", "tween", 0.2, 1)}
                >
                    <Info />
                    <p className='about__description'>
                        I'm  highly motivated and experienced ReactJS & nodejs developer with 3 years of expertise in building scalable and efficient web applications. I'm excited to apply for the ReactJS Developer position at Your Company.

                    </p>

                    <a target="_blank" href={urlCV} className='button button--flex' rel="noreferrer">
                        Download CV
                        <Files color='var(--container-color)' />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}
