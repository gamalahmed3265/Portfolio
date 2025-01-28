import React, { useState } from "react";

import servicesData from "./data.json";

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
    <div key={index} className="service__content">
      <div>
        <i className="fa-solid fa-cake-candles service__icon"></i>
        <h3 className="service__title">
          {/* Product <br /> Designer */}
          {e.service__title}
        </h3>
      </div>
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
    </div>
  ));
};

export default ServiceContent;
