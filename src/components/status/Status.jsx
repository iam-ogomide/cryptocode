import './Status.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import img from '../../assets/status.png';

const Status = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    })
  return (
    <section className="status">
        <div className="status_container wrapper">
            <div className="status_left" data-aos="zoom-in-up">
                <h2>Trust us due to our safe and convenient deposit</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde est minus, laboriosam a placeat dolor in labore! Culpa molestias, fugit nesciunt dignissimos delectus sint numquam.</p>
                <a href="#" className='btn'>Know more</a>
            </div>
            <div className="status_right" data-aos="fade-right">
                <img src={img} alt="/" />
            </div>
        </div>
    </section>
  )
}

export default Status