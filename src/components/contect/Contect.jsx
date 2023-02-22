import React from 'react'
import Send from '../../assets/send'
import "./contect.css"
export const Contect = () => {
    
    return (<section className='section contact' id='contact'>
        <h2 className='section__title'>Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>
        <div className="contact__container container grid">
            <div className="contact__content">
                <div>
                    <h3 className='contact__title'>Talk to me</h3>
                    <div className='contact__info'>
                        <div className="contact__card">
                            <i className="fa-regular fa-envelope contact__card-icon"></i>
                            <h3 className="contac__card-title">Email</h3>
                            <span className="contac__ca-data">gamalahmmed7264@gmail.com</span>
                            <a href="mailto:gamalahmmed7264@gmail.com" className='contac__button'>
                                Write me
                                <i className="fa-solid fa-arrow-right-long contac__button-icon"></i>
                            </a>
                        </div>
                        <div className="contact__card">
                            <i className="fa-brands fa-whatsapp contact__card-icon"></i>
                            <h3 className="contac__card-title">Whatsapp</h3>
                            <span className="contac__ca-data">+2012100239879</span>
                            <a href="https://api.whatsapp.com/send?phone=+201210023987&text=Hello" className='contac__button'>
                                Write me
                                <i className="fa-solid fa-arrow-right-long contac__button-icon"></i>
                            </a>
                        </div>
                        <div className="contact__card">
                            <i className="fa-brands fa-facebook-messenger contact__card-icon"></i>
                            <h3 className="contac__card-title">Messenger</h3>
                            <span className="contac__ca-data">999-888-777</span>
                            <a href="https://www.facebook.com/gamal.ahmed.hassen/" className='contac__button'>
                                Write me
                                <i className="fa-solid fa-arrow-right-long contac__button-icon"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="contact__content">
                <div>
                    <h3 className='contact__title'>Write me your project</h3>

                    <form action="" className="contact__form">
                        <div className="contact__form-div">
                            <label className='contact__form-tag'>Name</label>
                            <input type="text" className='contact__form-input'
                                placeholder='Insert your Name'
                            />
                        </div>
                        <div className="contact__form-div">
                            <label className='contact__form-tag'>Mail</label>
                            <input type="email" className='contact__form-input'
                                placeholder='Insert your email'
                            />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className='contact__form-tag'>Projects</label>
                            <textarea rows="10" cols="30" name='project' type="text" className='contact__form-input'
                                placeholder='Insert your Name'
                            />
                        </div>
                        <button href="#contact" className='button button--flex'>
                            Send Message
                            <Send color="var(--container-color)" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}
