import './Footer.scss';
import img from '../../assets/Logo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container wrapper">
            <div className="footer_col">
                <img src={img} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio voluptates dicta neque repellat incidunt.</p>
            </div>

            <div className="footer_col">
              <h3>About</h3>
              <a href="#">about us</a>
              <a href="#">features</a>
              <a href="#">news</a>
            </div>

            <div className="footer_col">
              <h3>Company</h3>
              <a href="#">Cryptocode</a>
              <a href="#">Security</a>
              <a href="#">Rankings</a>
            </div>

            <div className="footer_col">
              <h3>Support</h3>
              <a href="#">FAQ</a>
              <a href="#">support</a>
              <a href="#">Contact us</a>
            </div>

            <div className="footer_col">
              <h3>Socials</h3>
              <div className="footer_icons">
                <a href="#" className='footer_icon'><FaFacebook /></a>
                <a href="#" className='footer_icon'><FaInstagram /></a>
                <a href="#" className='footer_icon'><FaLinkedinIn /></a>
                <a href="#" className='footer_icon'><FaTwitter /></a>
                <a href="#" className='footer_icon'><FaYoutube /></a>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer