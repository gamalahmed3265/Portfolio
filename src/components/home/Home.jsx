
import { fadeIn, staggerContainer } from "../motion/motion";
import { Data } from "./Data";
import { ScrollDown } from "./ScrollDown";
import { Social } from "./Social";
import "./home.css";
import { motion } from "framer-motion"
const Home = () => {
    return (
        <section className="home section" id="home">
            <motion.div variants={staggerContainer} className="home_container container grid">
                <div className="home_content grid">
                    <Social />
                    <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="home_img">

                    </motion.div>
                    <Data />
                </div>
                <ScrollDown />
            </motion.div>
        </section>
    );
}
export default Home