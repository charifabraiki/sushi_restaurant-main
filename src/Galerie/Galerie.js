import React, { useEffect, useState } from 'react';
import './Galerie.css';
import galerie_one from '../sushi_project_images/galerie_one.jpg';
import galerie_two from '../sushi_project_images/galerie_two.jpg';
import galerie_three from '../sushi_project_images/galerie_three.jpg';
import galerie_four from '../sushi_project_images/galerie_four.jpg';
import galerie_five from '../sushi_project_images/galerie_five.jpg';
import galerie_six from '../sushi_project_images/galerie_six.jpg';
import galerie_seven from '../sushi_project_images/galerie_seven.jpg';
import galerie_eight from '../sushi_project_images/galerie_eight.jpg';
import galerie_nine from '../sushi_project_images/galerie_nine.jpg';
import galerie_logo from '../sushi_project_images/galerie_logo.png';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
function Galerie() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const galeries = [
        {image: galerie_one, name: 'Albacore tuna', course: 'Main Course'},
        {image: galerie_two, name: 'Salmon ceviche', course: 'Main Course'},
        {image: galerie_three, name: 'J.Davis', course: 'Cocktail'},
        {image: galerie_four, name: 'Amaretto sour', course: 'Cocktail'},
        {image: galerie_five, name: 'Lamb steaks', course: 'Main Course'},
        {image: galerie_six, name: 'Beef tongue', course: 'Appetizer'},
        {image: galerie_seven, name: 'Cheesecake', course: 'Dessert'},
        {image: galerie_eight, name: 'Mango dusk', course: 'Cocktail'},
        {image: galerie_nine, name: 'Spinach bread', course: 'Appetizer'}
    ];
    function showupfunc()
    {
    const element = document.querySelector('.section-show-up-true');
    element.classList.remove('home-section-hide-up');
    element.classList.remove('home-section-show-up');
    element.classList.add('showup-element');
    }
    function hideupfunc()
    {
    const element = document.querySelector('.section-show-up-true');
    if (element && element.classList.contains('showup-element')) {
        element.classList.remove('showup-element');
        element.classList.add('home-section-show-up');
        element.classList.add('home-section-hide-up');
    }
    }
    useEffect(() => {
        const body = document.body;
        if(clicked)
        {
          body.classList.add('bodyStuck')
        }else{
          body.classList.remove('bodyStuck')
        }
      }, [clicked]);
    return(
        <div className='galerie-section-main'>
            {
                isMobile === false? (
                    <div className='home-section-show-up section-show-up-true'>
                <div className='home-section-show-up-left-side-sushi' onClick={hideupfunc}></div>
                <div className='navbar-infos-contact-click'>
                <div className='navbar-infos-contact-click-one'>
                    <div className='navbar-infos-contact-click-one-top'>
                        <h1>connect with us</h1>
                        <div className='landing-section-col-2-nav-one-humb-clicked' onClick={hideupfunc}>
                            <span className='landing-section-col-2-nav-one-humb-clicked-one'></span>
                            <span className='landing-section-col-2-nav-one-humb-clicked-two'></span>
                        </div>
                    </div>
                    <div className='navbar-infos-contact-click-one-two'>
                        <h3>find us</h3>
                        <div className='navbar-infos-contact-click-one-two-infos'>
                            <span>eight avenue 487, NY</span>
                            <span>+212 603927836</span>
                        </div>
                    </div>
                    <div className='navbar-infos-contact-click-one-two'>
                        <h3>contact us</h3>
                        <div className='navbar-infos-contact-click-one-two-infos'>
                            <span style={{textTransform: 'none'}}>youneslassirifreelance@gmail.com,</span>
                            <span style={{textTransform: 'none'}}>https://main-portfolio-rust-rho.vercel.app/</span>
                        </div>
                    </div>
                    <div className='navbar-infos-contact-click-one-two'>
                        <h3>opening hours</h3>
                        <div className='navbar-infos-contact-click-one-two-infos'>
                            <span>Tuesday - thursday 4pm - 11pm</span>
                            <span>Friday & saturday 12pm till late</span>
                        </div>
                    </div>
                </div>
                <div className='navbar-infos-contact-click-two'>
                    <span>PINTEREST</span>
                    <div className="footer-square"></div>
                    <span>FACEBOOK</span>
                    <div className="footer-square"></div>
                    <span>INSTAGRAM</span>
                </div>
                </div>
            </div>
                ): null
            }
            <div className='galerie-section-main-navbar'>
                <div className='galerie-section-main-navbar-left'><Link to='/'><img src={galerie_logo}/></Link></div>
                <div className='menu-food-section-one-left'>
                <div className='menu-food-section-one-left-div'>
                        <li><Link to='/' className='nav-active'>home</Link></li>
                        <li><Link to='/menu-small-images'>menu</Link></li>
                        <li className='navbar-pages-dropdown'>
                          <a>pages</a>
                          <div className='navbar-pages-dropdown-detail' style={{background: '#15293A'}}>
                              <li><Link to="/pages/about-us">About Us</Link></li>
                              <li><Link to="/pages/contact-us">Contact Us</Link></li>
                              <li><Link to="/pages/galerie">Galerie</Link></li>
                          </div>
                        </li>
                        <li><Link to="/pages/meet-the-chef">Meet The Chef</Link></li>
                    </div>
                </div>
                <div className='galerie-section-main-navbar-right'>
                    {
                        isMobile === false? (
                            <div onClick={showupfunc}>
                                <div className='contactus-section-navbar-two-left-humb-top'></div>
                                <div className='contactus-section-navbar-two-left-humb-bottom'></div>
                            </div>
                        ) : (
                            <div onClick={() => setClicked(!clicked)}>
                                <div className='contactus-section-navbar-two-left-humb-top'></div>
                                <div className='contactus-section-navbar-two-left-humb-bottom'></div>
                            </div>
                        )
                    }
                </div>
            {clicked && isMobile === true &&(
                <div className='navbar-menu-mobile'>
                <div>
                <li><Link to='/' className='nav-active'>home</Link></li>
                    <li><Link to='/menu-small-images'>our menu</Link></li>
                    <li><Link to="/pages/about-us">About Us</Link></li>
                    <li><Link to="/pages/contact-us">Contact Us</Link></li>
                    <li><Link to="/pages/galerie">Galerie</Link></li>
                    <li><Link to="/pages/meet-the-chef">Meet The Chef</Link></li>
                </div>
        </div>
            )}
            </div>
            <div className='galerie-section-main-bread'>
                <div className='galerie-section-main-bread-one'>
                    <span>Home</span>
                    <span>//</span>
                    <span>Pages</span>
                    <span>//</span>
                    <span>Gallery Standard</span>
                </div>
            </div>
            <div className='galerie-section-main-galerie-show'>
                {
                    galeries.map((item,i) => {
                        return(
                            <div className='galerie-section-main-galerie-show-item' key={i}>
                                <img src={item.image}/>
                                <div className='galerie-section-main-galerie-show-item-hover'>
                                    <h1>{item.name}</h1>
                                    <h2>{item.course}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="contact-section-two" style={{background: '#0D1E2B'}}>
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
        <Footer theme='menu' dark='dark'/>
        </div>
    )
}
export default Galerie;