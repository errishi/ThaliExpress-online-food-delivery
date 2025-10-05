import React from 'react';
import "./Footer.css";
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} className='logo' alt="logo" />
                    <p><i><b>“Many flavors, one thali, quick delivery.”</b></i></p>
                    <p>ThaliExpress is an online food delivery platform inspired by the richness of India’s traditional thali culture — a wholesome meal served with a variety of dishes on a single platter.</p>
                    <p>ThaliExpress promises customers a complete meal experience delivered swiftly, while celebrating the essence of Indian dining — variety, balance, and satisfaction in every order.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="facebook" />
                        <img src={assets.twitter_icon} alt="twitter" />
                        <img src={assets.linkedin_icon} alt="linkedin" />
                    </div>
                </div>
                <span className='tab-view'>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <Link to={"/"}><li>Home</li></Link>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-328-493-2920</li>
                        <li>contact@thaliexpress.com</li>
                    </ul>
                </div>
                </span>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright {new Date().getFullYear()} &copy; ThaliExpress.com - All Right Reserved.
            </p>
            <p className="footer-copyright">
                <span className='developer'>Design & Develop By</span> Rishikesh Singh
            </p>
        </div>
    )
}

export default Footer;