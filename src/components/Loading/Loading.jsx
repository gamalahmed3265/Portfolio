import React from 'react'
import logo from "../../assets/works/logo.png"
import "./style.css"
const Loading = () => {
    return (
        <div className='loading-container'>

            <img src={logo} alt="Loading" className="loading-image" />

        </div>
    )
}

export default Loading