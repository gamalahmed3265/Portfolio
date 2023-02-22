import React, { useEffect, useState } from 'react'
import "./works.css"
import { worksNav, worksData } from "./data";
import { WorksItem } from './WorksItem';
export const Works = () => {
    const [item,setItem]=useState({name:"all"});
    const [projects,setProjects]=useState([]);
    const [active,setActive]=useState(0);

    useEffect(()=>{
        if (item.name==="all") {
            setProjects(worksData)
        }
        else{
            const newProsjects=worksData.filter((pro)=>{
                return pro.category.toLowerCase()===item.name;
            });
            setProjects(newProsjects);
        }
    },[item]);
    const handleClick=(e,index)=>{
        setItem({name:e.target.innerHTML.toLowerCase()});
        setActive(index);
    }
    return (
        <div>
            <div className='works__filter'>
                {worksNav.map((item, index) => {
                    return <span 
                    className={active===index?'work__item works__active': 'work__item'}
                    onClick={(e)=>{
                        handleClick(e,index)
                    }} 
                    key={index}>{item.name}
                    
                    </span>
                })}
            </div>
            <div className="works__container container grid">
                {projects.map((item, index) => {
                    return <WorksItem item={item} key={item.id} />
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