import React from 'react'
import "./skills.css"
import { Skillsbody } from './Skillsbody.tsx'
export const Skills = () => {

    return (
        <section className='section skills' id='skills'>
            <h2 className='section__title'>Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
                <Skillsbody />
            </div>
        </section>
    )
}
