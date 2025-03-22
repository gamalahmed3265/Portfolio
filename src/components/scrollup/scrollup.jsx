import React from 'react'
import "./scrollup.css"

function whenScroll() {
    let scrollup = document.querySelector(".scrollup");
    if (this.scrollY >= 550) {
        scrollup.classList.add("scrollup-active");
    }
    else {
        scrollup.classList.remove("scrollup-active");
    }
}
export const Scrollup = () => {
    window.addEventListener("scroll", whenScroll);
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" className='scrollup'>
            <i className="fa-solid fa-arrow-up scrollup-icon"></i>
        </a>
    )
}
