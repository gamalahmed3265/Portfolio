import React from 'react';
import "./testimonial.css";
import { Data } from "./Data.jsx";

export default function Testimonial() {
    return (<section className='section qualification' id='portfolio'>
        <h2 className='section__title'>My clients say</h2>
        <span className="section__subtitle">Testimonial</span>
        <div className="testimonial__container container">
            {Data.map(({id,image,title,description})=>{
                    return(
                        <div className="testimonial__card">
                            <img src={image} alt="" className="testimonial__img" />
                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial_description">{description}</p>
                        </div>
                    );
                })}
        </div>
    </section>
    )
}
