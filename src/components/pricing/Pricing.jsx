import './Pricing.scss';
import { pricingInfo } from '../../Data';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Pricing = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    })
  return (
    <section className="pricing">
        <h2 data-aos="fade-up">Best Crypto Currently</h2>
        <div className="pricing__container wrapper">
            {
                pricingInfo.map(({image,name,price}) => (
                    <div className="pricing__card" key={name} data-aos="fade-up">
                        <img src={image} alt="/" />
                        <h3>{name}</h3>
                        <span>{price}</span>
                        <a href="#" className='btn'>Buy Now</a>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Pricing