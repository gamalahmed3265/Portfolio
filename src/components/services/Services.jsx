import "./services.css"
import ServiceContent from './ServiceContent.tsx';
export const Services = () => {
    return (<section className='section skills' id='service'>
        <h2 className='section__title'>Services</h2>
        <span className="section__subtitle">What i offer</span>
        <div className="service__container container grid">
            <ServiceContent />
        </div>
    </section>
    )
}

