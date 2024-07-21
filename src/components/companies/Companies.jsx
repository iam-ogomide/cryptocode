import './Companies.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { companyInfo } from '../../Data';

const Companies = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    })
  return (
    <section className="companies" data-aos="fade-up">
        <div className="companies_container wrapper">
            {companyInfo.map(({id, img}) => (
                <img src={img} alt="/"  key={id}/>
            ))}
        </div>
    </section>
  )
}

export default Companies