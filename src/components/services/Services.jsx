import React, { useState } from 'react'
import "./services.css"
export const Services = () => {
        const [toogleState, setToggleState] = useState(0);

        const toggleTap = (index) => {
            setToggleState(index);
        }
        return (<section className='section skills' id='service'>
            <h2 className='section__title'>Services</h2>
            <span className="section__subtitle">What i offer</span>
            <div className="service__container container grid">

                <div className="service__content">
                    <div>
                        <i className="fa-solid fa-cake-candles service__icon"></i>
                        <h3 className='service__title'>Product <br /> Designer</h3>
                    </div>
                    <span className='service_button' onClick={() => toggleTap(1)}>
                        View More
                        <i className="fa-solid fa-arrow-right service_button--icon"></i>
                    </span>

                    <div className={toogleState === 1 ? 'service_model active-model' : 'service_model'}
                        onClick={() => toggleTap(0)}
                    >
                        <div className="service_model-content">
                            <i className="fa-solid fa-xmark service_model-icon-close" onClick={() => toggleTap(0)}></i>
                            <h3 className='service_model-title'>Product Designer</h3>
                            <p className='service_model-descriptions'>
                                Service with more than 3 years of experience.Providing
                                quality work to clients and companies.
                            </p>
                            <ul className='service_model-services grid'>
                                <li className='service_model-service'>
                                    <i className="fa-regular fa-circle-check service_model-icon"></i>
                                    <p className='service_model-info'>
                                        I develop the user interface.
                                    </p>
                                </li>
                                <li className='service_model-service'>
                                    <i className="fa-regular fa-circle-check service_model-icon"></i>
                                    <p className='service_model-info'>
                                        Web page development.
                                    </p>
                                </li>
                                <li className='service_model-service'>
                                    <i className="fa-regular fa-circle-check service_model-icon"></i>
                                    <p className='service_model-info'>
                                        I create ux element interactions.
                                    </p>
                                </li>
                                <li className='service_model-service'>
                                    <i className="fa-regular fa-circle-check service_model-icon"></i>
                                    <p className='service_model-info'>
                                        I position your company brand.
                                    </p>
                                </li>
                                <li className='service_model-service'>
                                    <i className="fa-regular fa-circle-check service_model-icon"></i>
                                    <p className='service_model-info'>
                                        Design and mockups of products for companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="service__content">
                    <div>
                        <i className="fa-solid fa-arrows-left-right service__icon"></i>
                        <h3 className='service__title'>Ui/Ux <br /> Designer</h3>
                    </div>
                    <span className='service_button' onClick={() => toggleTap(2)}>
                        View More
                        <i className="fa-solid fa-arrow-right service_button--icon"></i>
                    </span>

                    <div className={toogleState === 2 ? 'service_model active-model' : 'service_model'}
                        onClick={() => toggleTap(0)}
                    >
                        <div className="service_model-content">
                            <i className="fa-solid fa-xmark service_model-icon-close" onClick={() => toggleTap(0)}></i>
                            <h3 className='service_model-title'>Ui/Ux Designer</h3>
                            <p className='service_model-descriptions'>
                                Service with more than 3 years of experience.Providing
                                quality work to clients and companies.
                            </p>
                            <ul className='service_model-services grid'>
                                <li className='service_model-service'>
                                    <i className="fa-regular fa-circle-check service_model-icon"></i>
                                    <p className='service_model-info'>
                                        I develop the user interface.
                                    </p>
                                </li>
                                <li className='service_model-service'>
                                    <i className="fa-regular fa-circle-check service_model-icon"></i>
                                    <p className='service_model-info'>
                                        Web page development.
                                    </p>
                                </li>
                                <li className='service_model-service'>
                                    <i className="fa-regular fa-circle-check service_model-icon"></i>
                                    <p className='service_model-info'>
                                        I create ux element interactions.
                                    </p>
                                </li>
                                <li className='service_model-service'>
                                    <i className="fa-regular fa-circle-check service_model-icon"></i>
                                    <p className='service_model-info'>
                                        I position your company brand.
                                    </p>
                                </li>
                                <li className='service_model-service'>
                                    <i className="fa-regular fa-circle-check service_model-icon"></i>
                                    <p className='service_model-info'>
                                        Design and mockups of products for companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="service__content">
                    <div>
                        <i className="fa-solid fa-pen-to-square service__icon"></i>
                        <h3 className='service__title'>Visual <br /> Designer</h3>
                    </div>
                    <span className='service_button' onClick={() => toggleTap(3)}>
                        View More
                        <i className="fa-solid fa-arrow-right service_button--icon"></i>
                    </span>

                    <div className={toogleState === 3 ? 'service_model active-model' : 'service_model'}
                        onClick={() => toggleTap(0)}
                    >
                        <div className="service_model-content">
                            <i className="fa-solid fa-xmark service_model-icon-close" onClick={() => toggleTap(0)}></i>
                            <h3 className='service_model-title'>Visual Designer</h3>
                            <p className='service_model-descriptions'>
                                Service with more than 3 years of experience.Providing
                                quality work to clients and companies.
                            </p>
                            <ul className='service_model-services grid'>
                                <li className='service_model-service'>
                                    <i className="fa-regular fa-circle-check service_model-icon"></i>
                                    <p className='service_model-info'>
                                        I develop the user interface.
                                    </p>
                                </li>
                                <li className='service_model-service'>
                                    <i className="fa-regular fa-circle-check service_model-icon"></i>
                                    <p className='service_model-info'>
                                        Web page development.
                                    </p>
                                </li>
                                <li className='service_model-service'>
                                    <i className="fa-regular fa-circle-check service_model-icon"></i>
                                    <p className='service_model-info'>
                                        I create ux element interactions.
                                    </p>
                                </li>
                                <li className='service_model-service'>
                                    <i className="fa-regular fa-circle-check service_model-icon"></i>
                                    <p className='service_model-info'>
                                        I position your company brand.
                                    </p>
                                </li>
                                <li className='service_model-service'>
                                    <i className="fa-regular fa-circle-check service_model-icon"></i>
                                    <p className='service_model-info'>
                                        Design and mockups of products for companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        )
    }

