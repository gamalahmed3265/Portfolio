import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../motion/motion'
export const Social = () => {
    return (
        <motion.ul className='home_social' variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}>
            <motion.li variants={fadeIn("up", "tween", 0.2, 1)}>

                <a href="https://github.com/gamalahmed3265" className='home_social-icon' target='_blank' rel="noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
            </motion.li>
            <motion.li variants={fadeIn("up", "tween", 0.2, 1)}>
                <a href="https://www.linkedin.com/in/gamal-ahmed-1526281b8/" className='home_social-icon' target='_blank' rel="noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </motion.li>
            <motion.li variants={fadeIn("up", "tween", 0.2, 1)}>
                <a href="https://wa.me/+201210023987" className='home_social-icon' target='_blank' rel="noreferrer">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
            </motion.li>
        </motion.ul>
    )
}
