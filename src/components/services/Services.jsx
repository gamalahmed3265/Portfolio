import "./services.css"
import ServiceContent from './ServiceContent.tsx';
import { motion } from "framer-motion"
import { staggerContainer } from "../motion/motion.js";

export const Services = () => {
    return (<section className='section skills' id='service'>
        <h2 className='section__title'>Services</h2>
        <span className="section__subtitle">What i offer</span>
        <motion.div variants={staggerContainer} className="service__container container grid">
            <ServiceContent />
        </motion.div>
    </section>
    )
}

