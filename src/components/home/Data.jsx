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
                I'm Programer From based in Egypt,
                and I'm vary possionate and dedicated
                to my work
            </motion.p>
            <motion.a variants={fadeIn("up", "tween", 0.2, 1)} href="#contact" className='button button--flex'>
                Say Hello
                <Send color="var(--container-color)" />
            </motion.a>
        </motion.div>
    )
}
