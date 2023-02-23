import React, { useState } from 'react'
import "./styleSwitcher.css"

let body = document.querySelector('body');


function titleColorchangeColor(color) {
    body.style.setProperty("--title-color", `${color}`);
    window.localStorage.setItem('title-color', `${color}`);
}
function titleSecondColorchangeColor(color) {
    body.style.setProperty("--title-color-dark", `${color}`);
    window.localStorage.setItem('title-color-dark', `${color}`);
}
function textColorchangeColor(color) {
    body.style.setProperty("--text-color", `${color}`);
    window.localStorage.setItem('text-color', `${color}`);
}
function bodyColorchangeColor(color) {
    body.style.setProperty("--body-color", `${color}`);
    window.localStorage.setItem('body-color', `${color}`);
}
function containerColorchangeColor(color) {
    body.style.setProperty("--container-color", `${color}`);
    window.localStorage.setItem('container-color', `${color}`);
}


function whenScrollSwitcher() {
    let scrollup = document.querySelector(".style__switcher");
    if (this.scrollY < 550) {
        scrollup.classList.add("style__switcher-active");
    }
    else {
        scrollup.classList.remove("style__switcher-active");
    }
}

function getDataFromlocalStorage() {
    body.style.setProperty("--title-color", window.localStorage.getItem('title-color'));

    body.style.setProperty("--title-color-dark", window.localStorage.getItem('title-color-dark'));

    body.style.setProperty("--text-color", window.localStorage.getItem('text-color'));

    body.style.setProperty("--body-color", window.localStorage.getItem('body-color'));

    body.style.setProperty("--container-color", window.localStorage.getItem('container-color'));
}

function removeAllData() {
    window.localStorage.clear();
}


export const StyleSwitcher = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
        if (theme === "dark") {
            document.querySelector("body").setAttribute("data-theme", "dark");
        }
        else {
            document.querySelector("body").setAttribute("data-theme", "light");
        }
    }

    const [toggleActive, setToggleActive] = useState(false);
    window.addEventListener("scroll", whenScrollSwitcher);
    if (window.localStorage.length>0) {
        getDataFromlocalStorage();
    }
    document.querySelectorAll(".style__switcher-conainer span").forEach((e => {
        e.style.background =`${e.getAttribute("data-color")}`;
    }))

    return (
        <div className='style__switcher'>
            <div className='icons'>
                <i className='fas fa-cog fa-skin' onClick={() => setToggleActive(!toggleActive)}></i>
                <i className={theme === "light" ? 'fa-regular fa-lightbulb' : 'fa-solid fa-lightbulb'}
                    onClick={() => toggleTheme()}
                ></i>

            </div>
            <div className={toggleActive ?
                'style__switcher-toggle style__switcher-toggle-active' :
                'style__switcher-toggle'
            }>
                <div className='style__switcher-conainer'>
                    <h4 className='style__switcher-title'>title Color</h4>
                    <div className="colors colors-title">
                        <span data-color="#1B2430" onClick={() => titleColorchangeColor("#1B2430")}></span>
                        <span data-color='#2C3639' onClick={() => titleColorchangeColor("#2C3639")}></span>
                        <span data-color='#2C3333' onClick={() => titleColorchangeColor("#2C3333")}></span>
                        <span data-color='#1B2430' onClick={() => titleColorchangeColor("#1B2430")}></span>
                        <span data-color='#DCD7C9' onClick={() => titleColorchangeColor("#DCD7C9")}></span>
                    </div>
                </div>
                <div className='style__switcher-conainer'>
                    <h4 className='style__switcher-title'>title Second Color</h4>
                    <div className="colors colors-title">
                        <span data-color="#1B2430" onClick={() => titleSecondColorchangeColor("#1B2430")}></span>
                        <span data-color='#2C3639' onClick={() => titleSecondColorchangeColor("#2C3639")}></span>
                        <span data-color='#2C3333' onClick={() => titleSecondColorchangeColor("#2C3333")}></span>
                        <span data-color='#1B2430' onClick={() => titleSecondColorchangeColor("#1B2430")}></span>
                        <span data-color='#DCD7C9' onClick={() => titleSecondColorchangeColor("#DCD7C9")}></span>
                    </div>
                </div>
                <div className='style__switcher-conainer'>
                    <h4 className='style__switcher-title'>Text Color</h4>
                    <div className="colors colors-text">
                        <span data-color='#51557E' onClick={() => textColorchangeColor("#51557E")}></span>
                        <span data-color="#3F4E4F" onClick={() => textColorchangeColor("#3F4E4F")}></span>
                        <span data-color='#395B64' onClick={() => textColorchangeColor("#395B64")}></span>
                        <span data-color='#3F4E4F' onClick={() => textColorchangeColor("#3F4E4F")}></span>
                        <span data-color='#A27B5C' onClick={() => textColorchangeColor("#A27B5C")}></span>
                    </div>
                </div>
                <div className='style__switcher-conainer'>
                    <h4 className='style__switcher-title'>Container Color</h4>
                    <div className="colors colors-text">
                        <span data-color='#816797' onClick={() => containerColorchangeColor("#816797")}></span>
                        <span data-color="#A27B5C" onClick={() => containerColorchangeColor("#A27B5C")}></span>
                        <span data-color='#A5C9CA' onClick={() => containerColorchangeColor("#A5C9CA")}></span>
                        <span data-color='#51557E' onClick={() => containerColorchangeColor("#51557E")}></span>
                        <span data-color='#816797' onClick={() => containerColorchangeColor("#816797")}></span>
                    </div>
                </div>
                <div className='style__switcher-conainer'>
                    <h4 className='style__switcher-title'>Body Color</h4>
                    <div className="colors colors-text">
                        <span data-color='#D6D5A8' onClick={() => bodyColorchangeColor("#D6D5A8")}></span>
                        <span data-color="#DCD7C9" onClick={() => bodyColorchangeColor("#DCD7C9")}></span>
                        <span data-color='#E7F6F2' onClick={() => bodyColorchangeColor("#E7F6F2")}></span>
                        <span data-color='#DCD7C9' onClick={() => bodyColorchangeColor("#DCD7C9")}></span>
                        <span data-color='#1B2430' onClick={() => bodyColorchangeColor("#1B2430")}></span>
                    </div>
                </div>
                <div className='style__switcher-conainer'>
                    <h4 className='style__switcher-title'>Remove All Data</h4>
                    <div className="colors colors-text">
                        <i class="fa-solid fa-trash" onClick={()=>removeAllData()}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
