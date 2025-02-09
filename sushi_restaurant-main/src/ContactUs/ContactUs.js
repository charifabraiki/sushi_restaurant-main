import React, { useEffect, useState } from "react";
import './ContactUs.css';
import contactusLogo from '../sushi_project_images/contacus_logo.png';
import logo from '../sushi_project_images/sushi_footer_logo.png';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import contactTwo from '../sushi_project_images/contact_two.png'
import contactThree from '../sushi_project_images/contact_three.jpg'
import contactfour from '../sushi_project_images/contact_four.png'
import contactfive from '../sushi_project_images/contact_five.png'
import contactsix from '../sushi_project_images/contact_six.jpg'
import Footer from "../Footer/Footer";
function ContactUs() {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const body = document.body;
    if(clicked)
    {
      body.classList.add('bodyStuck')
    }else{
      body.classList.remove('bodyStuck')
    }
  }, [clicked]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  const [isMobile, setIsMobile] = useState(0);
  const checkWidth = () => {
    setIsMobile(window.innerWidth <= 768 ? 1 : 0);
  };
  useEffect(() => {
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);
  return (
    <div className="contactus-section">
      <div className="contactus-section-before"></div>
      <div className="contactus-section-after"></div>
      {clicked && <div className='navabar-clicked'>
        <div className='landing-section-col-1-clicked'>
            <div className='landing-section-col-1-logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='landing-section-col-1-highlight-clicked'>
              <ul>
                <li><Link to='/' className='nav-active'>home</Link></li>
                <li><Link to='/menu-small-images'>menu</Link></li>
                <li><Link to="/pages/about-us">About  Us</Link></li>
                <li><Link to="/pages/contact-us">Contact Us</Link></li>
                <li><Link to="/pages/galerie">Galerie</Link></li>
                <li><Link to="/pages/meet-the-chef">Meet The Chef</Link></li>
              </ul>
            </div>
        </div>
        <div className='landing-section-col-2-clicked'>
          <div className='landing-section-col-2-nav'>
              <div className='landing-section-col-2-nav-one' onClick={() => setClicked(false)}>
                <div className='landing-section-col-2-nav-one-menu'>{isMobile === 0? 'menu' : ''}</div>
                <div className='landing-section-col-2-nav-one-humb-clicked'><span className='landing-section-col-2-nav-one-humb-clicked-one'></span><span className='landing-section-col-2-nav-one-humb-clicked-two'></span></div>
              </div>
          </div>
          <div className='landing-section-col-2-menu-slider-clicked'>
            <div></div>
            <div className='landing-section-col-2-menu-slider-clicked-two'>
              <div className='landing-section-col-2-menu-slider-clicked-two-one'>
                <h4>CONTACT US</h4>
                <p>T. +212 603927836</p>
                <p>M. youneslassirifreelance@gmail.com</p>
              </div>
              <div className='landing-section-col-2-menu-slider-clicked-two-two'>
              <h4>ADDRESS</h4>
                <p>Piazza Della Signoria, 12</p>
                <p>21562 . Firenze . laayoune</p>
              </div>
            </div>
          </div>
        </div>
        </div>}
      <div className="contactus-section-navbar">
        <div className="contactus-section-navbar-one">
          <div className="contactus-section-navbar-one-left">
            <h4>Mon-Wed: 11a-9p</h4>
            <div className="footer-square"></div>
            <h4>Thurs-Sat: 11a-10p</h4>
          </div>
          <div className="contactus-section-navbar-one-right">
            <h4>+212 603927836</h4>
            <div className="footer-square"></div>
            <h4>37 Rua do Guarda-Mor Lisbonn 90291</h4>
          </div>
        </div>
        <div className="contactus-section-navbar-two">
          <div className="contactus-section-navbar-two-left">
              <div onClick={() => setClicked(true)}>
              <div className='contactus-section-navbar-two-left-humb-top'></div>
              <div className='contactus-section-navbar-two-left-humb-bottom'></div>
              </div>
          </div>
          <div className="contactus-section-navbar-two-center"><img src={contactusLogo}/></div>
          <div className="contactus-section-navbar-two-right">
            <a href="#">
              <div className="a-before"></div>
              <div className="a-after"></div>
              BOOK A TABLE
            </a>
          </div>
        </div>
      </div>
      <div className="contactus-section-map-coord">
        {/* the map in the futur hhh*/}
      </div>
      <div className="contactus-section-contact-form">
        <div className="contactus-section-contact-form-left">
          <h1>write to us</h1>
          <h6>For general enquiries please email: youneslassirifreelance@gmail.com</h6>
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="E mail"/>
          <textarea placeholder="Message"/>
          <a href="#">
              <div className="a-before"></div>
              <div className="a-after"></div>
              SUBMIT
            </a>
        </div>
        <div className="contactus-section-contact-form-right">
          <div className="contactus-section-contact-form-right-one">
            <div className='navbar-infos-contact-click-one-two'>
                <h3>lunch time</h3>
                <div className='navbar-infos-contact-click-one-two-infos'>
                    <span><span className="navbar-infos-contact-click-one-two-infos-colon">//</span>Monday to Sunday</span>
                    <span>10.30am – 3:00pm</span>
                </div>
            </div>
            <div className='navbar-infos-contact-click-one-two'>
                <h3>book a table</h3>
                <div className='navbar-infos-contact-click-one-two-infos'>
                    <span>T. +212 603927836</span>
                    <span>M. youneslassirifreelance@gmail.com</span>
                </div>
            </div>
            <div className='navbar-infos-contact-click-one-two'>
                <h3>restaurant address</h3>
                <div className='navbar-infos-contact-click-one-two-infos'>
                    <span>Long Hills Dr 351,</span>
                    <span>New York 07078, United States</span>
                </div>
            </div>
          </div>
          <div className="contactus-section-contact-form-right-one">
            <div className='navbar-infos-contact-click-one-two'>
                <h3>dinner time</h3>
                <div className='navbar-infos-contact-click-one-two-infos'>
                    <span><span className="navbar-infos-contact-click-one-two-infos-colon">//</span>Monday to Sunday</span>
                    <span>6.30pm – 10:00pm</span>
                </div>
            </div>
            <div className='navbar-infos-contact-click-one-two'>
                <h3>restaurant contact</h3>
                <div className='navbar-infos-contact-click-one-two-infos'>
                    <span>T. +212 603927836</span>
                    <span>Viber, WhatsApp</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactus-section-contact-signup">
        <h1>Fidalgo newsletter</h1>
        <p>Subscribe to receive the latest news, announcements, and special offers</p>
        <div className="contactus-section-contact-signup-input">
          <div className="contactus-section-contact-signup-input-one"><input type="email" placeholder="Your Email"/></div>
          <div className="contactus-section-contact-signup-input-two">
            sign up
          </div>
        </div>
          <div className='contactus-section-contact-signup-input-footer'>
                    <span>PINTEREST</span>
                    <div className="footer-square"></div>
                    <span>FACEBOOK</span>
                    <div className="footer-square"></div>
                    <span>INSTAGRAM</span>
                </div>
      </div>
      <div className="contactus-section-slider-parent">
        <h1>connect with us</h1>
        <Slider {...settings} className="contactus-section-slider-parent-slider">
          <div className="contactus-section-slider-parent-slider-item contactus-section-slider-parent-slider-item-two"><img src={contactTwo}/></div>
          <div className="contactus-section-slider-parent-slider-item"><img src={contactThree}/></div>
          <div className="contactus-section-slider-parent-slider-item contactus-section-slider-parent-slider-item-four"><img src={contactfour}/></div>
          <div className="contactus-section-slider-parent-slider-item contactus-section-slider-parent-slider-item-five"><img src={contactfive}/></div>
          <div className="contactus-section-slider-parent-slider-item"><img src={contactsix}/></div>
        </Slider>
        <p>Inspired by you, always_#restaurante</p>
      </div>
      <div className="contact-section-two" style={{background: '#000720'}}>
                <div className="contact-section-two-one">
                    <div className="contact-section-two-one-title">CONTACT US</div>
                    <div className="contact-section-two-one-para">
                    <span>T. +212 603927836</span>
                        <span>M. youneslassirifreelance@gmail.com</span>
                    </div>
                </div>
                <div className="contact-section-two-one">
                    <div className="contact-section-two-one-title">ADDRESS</div>
                    <div className="contact-section-two-one-para">
                        <span>Piazza Della Signoria, 12</span>
                        <span>21562 . Firenze . laayoune</span>
                    </div>
                </div>
                <div className="contact-section-two-one-ex">
                    <div className="contact-section-two-one-title">OPENING HOURS</div>
                    <div className="contact-section-two-one-para">
                        <span>Everyday : From 12.30 To 23.00</span>
                        <span>Kitchen Closes At 22.00</span>
                    </div>
                </div>
      </div>
        <Footer theme='contact' dark='dark'/>
    </div>
  );
}
export default ContactUs;
