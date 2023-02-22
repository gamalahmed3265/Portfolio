import React from 'react'

export const WorksItem = ({item}) => {
    return (
        <div className='work_card'>
            <img className='work__img' src={item.image} alt="" />
            <h3 className="work__title" >{item.title}</h3>
            <a href="#" className='work_button'>
                Demo
                <i className="fa-solid fa-arrow-right work_button-icon"></i>
            </a>
        </div>
    )
}
