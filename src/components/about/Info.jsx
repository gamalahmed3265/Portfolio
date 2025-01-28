import React from 'react'

export const Info = () => {
    return (
        <div className='about__info grid'>
            <div className="about__box">
                <i className="fa-solid fa-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">4 Years Working</span>
            </div>
            <div className="about__box">
                <i className="fa-solid fa-check about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">48 + Projects</span>
            </div>
            <div className="about__box">
                <i className="fa-solid fa-headset about__icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}
