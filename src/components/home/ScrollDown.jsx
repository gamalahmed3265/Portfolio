import React from 'react'
import ScrollDownIcon from '../../assets/ScrollDownIcon'

export const ScrollDown = () => {
    return (
        <div className='home__scroll'>
            <a href="#about" className='home__scroll-button button--flex'>
            <ScrollDownIcon/>
            <span className='home__scroll-name'>
                Scroll Down
            </span>
            <i className="fa-solid fa-arrow-down home__scroll-arrow"></i>
            </a>
        </div>
    )
}
