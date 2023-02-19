import React from 'react'
import Hand from "../../assets/hand.jsx";
import Send from '../../assets/send.jsx';
export const Data = () => {
    return (
        <div className='home_data'>
            <h1 className='home_title'>Gamal Ahmed</h1>
            <Hand/>
            <h3 className='home_subtitle'>
                software engineer
            </h3>
            <p className='home_description'>
                I'm Programer From based in Egypt,
                and I'm vary possionate and dedicated
                to my work
            </p>
            <a href="#contact" className='button button--flex'>
                Say Hello
                <Send color="var(--container-color)"/>
            </a>
        </div>
    )
}
