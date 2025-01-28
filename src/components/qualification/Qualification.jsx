import React, { useState } from 'react'
import "./qualification.css";
export const Qualification = () => {
    const [toogleState, setToggleState] = useState(1);

    const toggleTap = (index) => {
        setToggleState(index);
    }

    return (<section className='section qualification' id='portfolio'>
        <h2 className='section__title'>Qualification</h2>
        <span className="section__subtitle">My personel journey</span>
        <div className="qualification__container container">

            <div className="qualification__tabs">
                <div className={toogleState === 1 ?
                    "qualification__button qualification__active button--flex" :
                    "qualification__button button--flex"}
                    onClick={() => toggleTap(1)}
                >
                    <i className="fa-solid fa-user-graduate qualification__icon"></i>
                    Education
                </div>
                <div className={toogleState === 2 ?
                    "qualification__button qualification__active button--flex" :
                    "qualification__button button--flex"}
                    onClick={() => toggleTap(2)}
                >
                    <i className="fa-regular fa-calendar-check qualification__icon"></i>
                    Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toogleState === 1 ?
                    "qualification__content qualification__content-active" :
                    "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Computer Science</h3>
                            <span className="qualification__subtitle">FCI Zagazig</span>
                            <div className="qualification__calender">
                                <i className="fa-regular fa-calendar-minus"></i>
                                2020 Present
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Frontend</h3>
                            <span className="qualification__subtitle">Online</span>
                            <div className="qualification__calender">
                                <i className="fa-regular fa-calendar-minus"></i>
                                2020 Present
                            </div>
                        </div>

                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Backend</h3>
                            <span className="qualification__subtitle">Online</span>
                            <div className="qualification__calender">
                                <i className="fa-regular fa-calendar-minus">
                                </i>
                                2021 Present
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Flutter</h3>
                            <span className="qualification__subtitle">Online</span>
                            <div className="qualification__calender">
                                <i className="fa-regular fa-calendar-minus"></i>
                                2022 Present
                            </div>
                        </div>

                    </div>
                </div>
                <div className={toogleState === 2 ?
                    "qualification__content qualification__content-active" :
                    "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Projects</h3>
                            <span className="qualification__subtitle">github</span>
                            <div className="qualification__calender">
                                <i className="fa-regular fa-calendar-minus"></i>
                                2022 Present
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Graduated 2023</h3>
                            <span className="qualification__subtitle">FCI Zagazig</span>
                            <div className="qualification__calender">
                                <i className="fa-regular fa-calendar-minus"></i>
                                2023 Present
                            </div>
                        </div>

                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Freelancer</h3>
                            <span className="qualification__subtitle">Online</span>
                            <div className="qualification__calender">
                                <i className="fa-regular fa-calendar-minus">
                                </i>
                                2024 Present
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Software Engineering</h3>
                            <span className="qualification__subtitle">Egypt</span>
                            <div className="qualification__calender">
                                <i className="fa-regular fa-calendar-minus"></i>
                                2024 Present
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
