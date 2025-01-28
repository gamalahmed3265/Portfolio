import React from 'react'

export const WorksItem = ({ item }) => {
    return (
        <div className='work_card'>
            <img className='work__img' src={item.img} alt="" />
            <h3 className="work__title" >{item.title}</h3>
            <a href={item.url} className='work_button' target="_blank" rel="noreferrer">
                Demo
                <i className="fa-solid fa-arrow-right work_button-icon"></i>
            </a>
        </div>
    )
}
