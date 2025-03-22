import React, { useState } from "react";

import servicesData from "./data.json";
import { fadeIn, staggerContainer } from "../motion/motion";
import { motion } from "framer-motion";

interface ServiceModel {
  data: {
    service__title: string;
    descriptions: string;
    service_info: string[];
  }[];
}

const servicesList: ServiceModel = servicesData;

const ServiceContent = () => {
  const [toogleState, setToggleState] = useState(0);

  const toggleTap = (index: number) => {
    setToggleState(index);
  };

  return servicesList.data.map((e, index) => (
    <motion.div
      key={index}
      className="service__content"
      variants={staggerContainer}
    >
      <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
        <i className="fa-solid fa-cake-candles service__icon"></i>
        <h3 className="service__title">
          {/* Product <br /> Designer */}
          {e.service__title}
        </h3>
      </motion.div>
      <span className="service_button" onClick={() => toggleTap(index + 1)}>
        View More
        <i className="fa-solid fa-arrow-right service_button--icon"></i>
      </span>

      <div
        className={
          toogleState === index + 1
            ? "service_model active-model"
            : "service_model"
        }
        onClick={() => toggleTap(0)}
      >
        <div className="service_model-content">
          <i
            className="fa-solid fa-xmark service_model-icon-close"
            onClick={() => toggleTap(0)}
          ></i>

          <h3 className="service_model-title">{e.service__title}</h3>
          <p className="service_model-descriptions">
            Service with more than 3 years of experience.Providing quality work
            to clients and companies.
          </p>
          <ul className="service_model-services grid">
            {e.service_info.map((ski, i) => (
              <li key={i} className="service_model-service">
                <i className="fa-regular fa-circle-check service_model-icon"></i>
                <p className="service_model-info">{ski}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  ));
};

export default ServiceContent;
