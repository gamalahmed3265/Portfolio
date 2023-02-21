import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

import "./testimonial.css";
import { Data } from "./Data.jsx";

export default function Testimonial() {
    return (<section className='section qualification' id='portfolio'>
        <h2 className='section__title'>My clients say</h2>
        <span className="section__subtitle">Testimonial</span>

        <Swiper className="testimonial__container container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },

            }}
            modules={[Pagination]}
        >
            {Data.map(({ id, image, title, description }) => {
                return (
                    <SwiperSlide className="testimonial__card" key={id}>
                        <img src={image} alt="" className="testimonial__img" />
                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial_description">{description}</p>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </section>
    )
}
