import './Hero.scss';
import Mob from '../../assets/Mob.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    })
  return (
    <section className="hero">
        <div className="hero_container wrapper">
            <div className="hero_left" data-aos="fade-right">
                <img src={Mob} alt="/" />
            </div>

            <div className="hero_left" data-aos="zoom-in-up">
                <h1>Make easier crypto transactions</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ab veniam, deserunt aspernatur repudiandae saepe veritatis nesciunt nisi modi sit in tenetur odit facilis unde, ullam nemo, fuga rerum. Saepe.</p>
                <a href="#" className='btn'>Try For Free</a>
            </div>
        </div>
    </section>
  )
}

export default Hero