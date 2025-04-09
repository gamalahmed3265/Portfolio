import React from 'react'
import Hand from "../../assets/hand.jsx";
import Send from '../../assets/send.jsx';
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../motion/motion.js';
export const Data = () => {
    return (
        <motion.div className='home_data' variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}>
            <motion.h1 variants={fadeIn("up", "tween", 0.2, 1)} className='home_title'>Gamal Ahmed</motion.h1>

            <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
                <Hand />
            </motion.div>
            <motion.h3 variants={fadeIn("up", "tween", 0.2, 1)} className='home_subtitle'>
                software engineer
            </motion.h3>
            <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className='home_description'>
                I'm a programmer based in Egypt, and I'm very passionate and dedicated to my work. I have a lot of experience in web development, and I love to create beautiful and functional websites. I am always looking for new challenges and opportunities to learn and grow as a developer.
                <br />I am a software engineer with a passion for web development and a strong background in programming. I have experience in various programming languages and frameworks, and I am always eager to learn new technologies and improve my skills.
            </motion.p>
            <motion.a variants={fadeIn("up", "tween", 0.2, 1)} href="#contact" className='button button--flex'>
                Say Hello
                <Send color="var(--container-color)" />
            </motion.a>
        </motion.div>
    )
}
