import React from "react";
import skillsData from "./data.json";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../motion/motion";

interface Skill {
  name: string;
  level: string;
}

interface SkillsModel {
  data: {
    skills_title: string;
    skills: Skill[];
  }[];
}

const skills: SkillsModel = skillsData;

export const Skillsbody = () => {
  return skills.data.map((e, index) => (
    <motion.div
      key={index}
      className="skills__content"
      variants={staggerContainer}
    >
      <h3 className="skills__title">{e.skills_title}</h3>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="skills_box"
      >
        {e.skills.map((e, index) => (
          <div key={index} className="skills_group">
            <div className="skills_data">
              <i className="fa-regular fa-circle-check"></i>
              <div>
                <div className="skills_name">{e.name}</div>
                <div className="skills_level">{e.level}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  ));
};
