import './Earnings.scss';
import img from '../../assets/earnings.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Earnings = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    })
  return (
    <section className="earnings">
        <div className="earnings__container wrapper">
            <div className="earnings_left" data-aos="fade-right">
                <img src={img} alt="/" />
            </div>

            <div className="earnings_right" data-aos="zoom-in-up">
                <h2>Trand your earnings and cryptocode made it very easy</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore earum impedit quasi, atque omnis repellat iusto aliquid tempore non reprehenderit nobis voluptate dolorum veniam magnam!</p>
            </div>
        </div>
    </section>
  )
}

export default Earnings