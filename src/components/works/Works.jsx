import React, { useEffect, useState } from 'react'
import "./works.css"
import { WorksItem } from './WorksItem';
import worksNav from "./dataWork"


export const Works = () => {
    const [, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        setProjects(worksNav[active]);
    }, [active]);
    const handleClick = (index) => {
        setActive(index);
    }
    return (
        <div>
            <div className='works__filter' >
                {worksNav.map((item, i) => {
                    return <span
                        className={active === i ? 'works__active work__item' : 'work__item'}
                        onClick={(e) => {
                            handleClick(i)
                        }}
                        key={i}>
                        {item.title}

                    </span>
                })}
            </div>
            <div className="works__container container grid">
                {worksNav[active].projects.map((item, i) => {
                    return <WorksItem item={item} key={i} />
                })}
            </div>
        </div>
    )
}

// <section className='section skills' id='skills'>
//     <h2 className='section__title'>Skills</h2>
//     <span className="section__subtitle">My technical level</span>
//     <div className="skills__container container grid">

//     </div>
// </section>