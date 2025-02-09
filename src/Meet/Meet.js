import React, { useEffect, useState } from 'react';
import './Meet.css';
import { Link } from 'react-router-dom';
import menulogo from '../sushi_project_images/manu_logo.png';
import chef_two from '../sushi_project_images/chef_two.jpg';
import chef_four from '../sushi_project_images/chef_four.png';
import chef_five from '../sushi_project_images/chef_five.jpg';
import Footer from '../Footer/Footer';
import logo from '../sushi_project_images/sushi_footer_logo.png';
function Meet() {
    const [clicked, setClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(0);
    const [clickedtwo, setClickedtwo] = useState(false);
    const checkWidth = () => {
    setIsMobile(window.innerWidth <= 768 ? 1 : 0);
    };
  useEffect(() => {
    const body = document.body;
    if(clickedtwo)
    {
      body.classList.add('bodyStuck')
    }else{
      body.classList.remove('bodyStuck')
    }
  }, [clickedtwo])
    useEffect(() => {
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => {
        window.removeEventListener('resize', checkWidth);
    };
    }, []);
    const [shownav, setShownav] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setShownav(true);
        } else {
            setShownav(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [window.pageYOffset]);
    return(
        <div className='meet-chef-section-all'>
      <div className="contactus-section-before"></div>
      <div className="contactus-section-after"></div>
            {shownav && <div className='scrolling-navabr'>
          <div className='menu-food-section-oneShownav'>
                <div className='menu-food-section-one-left'>
                <div className='menu-food-section-one-left-div'>
                        <li><Link to='/' className='nav-active'>home</Link></li>
                        <li><Link to='/menu-small-images'>menu</Link></li>
                        <li className='navbar-pages-dropdown'>
                          <a>pages</a>
                          <div className='navbar-pages-dropdown-detail' style={{background: '#102B2A'}}>
                              <li><Link to="/pages/about-us">About Us</Link></li>
                              <li><Link to="/pages/contact-us">Contact Us</Link></li>
                              <li><Link to="/pages/galerie">Galerie</Link></li>
                          </div>
                        </li>
                        <li><Link to="/pages/meet-the-chef">Meet The Chef</Link></li>
                    </div>
                </div>
                <div className='menu-food-section-one-center'><Link to='/'><img src={menulogo}/></Link></div>
                <div className='menu-food-section-one-right'>
                    <a href="#">
                        <div className="a-before"></div>
                        <div className="a-after"></div>
                        BOOK A TABLE
                        </a>
                        <div className='landing-section-col-2-nav-menu' onClick={() => setClickedtwo(!clickedtwo)}>
                            <div className='landing-section-col-2-nav-one'>
                                <div className='landing-section-col-2-nav-one-menu'></div>
                                <div className='landing-section-col-2-nav-one-humb'><span className='landing-section-col-2-nav-one-humb-one'></span><span className='landing-section-col-2-nav-one-humb-two'></span></div>
                            </div>
                        </div>
                </div>
            </div>
        </div>}
        {clickedtwo && <div className='navabar-clicked'>
        <div className='landing-section-col-1-clicked'>
            <div className='landing-section-col-1-logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='landing-section-col-1-highlight-clicked'>
              <ul>
                <li><Link to='/' className='nav-active'>home</Link></li>
                <li><Link to='/menu-small-images'>menu</Link></li>
                <li><Link to="/pages/about-us">About Us</Link></li>
                <li><Link to="/pages/contact-us">Contact Us</Link></li>
                <li><Link to="/pages/galerie">Galerie</Link></li>
                <li><Link to="/pages/meet-the-chef">Meet The Chef</Link></li>
              </ul>
            </div>
        </div>
        <div className='landing-section-col-2-clicked'>
          <div className='landing-section-col-2-nav'>
              <div className='landing-section-col-2-nav-one' onClick={() => setClickedtwo(!clickedtwo)}>
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
            <div className='aboutus-section'>
            <div className='menu-food-section-meet'>
                <div className='menu-food-section-one'>
                    <div className='menu-food-section-one-left'>
                    <div className='menu-food-section-one-left-div'>
                        <li><Link to='/' className='nav-active'>home</Link></li>
                        <li><Link to='/menu-small-images'>menu</Link></li>
                        <li className='navbar-pages-dropdown'>
                          <a>pages</a>
                          <div className='navbar-pages-dropdown-detail' style={{background: '#102B2A'}}>
                              <li><Link to="/pages/about-us">About Us</Link></li>
                              <li><Link to="/pages/contact-us">Contact Us</Link></li>
                              <li><Link to="/pages/galerie">Galerie</Link></li>
                          </div>
                        </li>
                        <li><Link to="/pages/meet-the-chef">Meet The Chef</Link></li>
                    </div>
                    </div>
                    <div className='menu-food-section-one-center'><Link to='/'><img src={menulogo}/></Link></div>
                    <div className='menu-food-section-one-right'>
                        <a href="#">
                            <div className="a-before"></div>
                            <div className="a-after"></div>
                            BOOK A TABLE
                            </a>
                            <div className='landing-section-col-2-nav-menu' onClick={() => setClicked(!clicked)}>
                                <div className='landing-section-col-2-nav-one'>
                                    <div className='landing-section-col-2-nav-one-menu'></div>
                                    <div className='landing-section-col-2-nav-one-humb'><span className='landing-section-col-2-nav-one-humb-one'></span><span className='landing-section-col-2-nav-one-humb-two'></span></div>
                                </div>
                            </div>
                    </div>
                {clicked && isMobile === 1 &&(
                    <div className='navbar-menu-mobile-aboutus'>
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
            </div>
            </div>
            <div className='meet-chef-section-all-one'>
                <div className='meet-chef-section-all-one-left'><img src={chef_two}/></div>
                <div className='meet-chef-section-all-one-right'>
                    <h1>CHEF’S</h1>
                    <h4>ONLY THE FINEST FOOD & GREAT SERVICE</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <img src={chef_four}/>
                    <span>/by Younes Lassiri</span>
                </div>
            </div>
            <div className='meet-chef-section-all-two'>
                <div className='meet-chef-section-all-two-left'>
                    <h1>awards</h1>
                    <h4>the best restaurante</h4>
                    <div className='meet-chef-section-all-two-left-trofies'>
                        <h5>Le Chef 2021: 100 Chefs</h5>
                        <h5>
                            <span>The Best Chef Awards:</span>
                            <span>#86, Ambassador 2020</span>
                        </h5>
                        <h5>
                            <span>World Gourmet Series Awards of</span>
                            <span>Excellence 2020: Chef of the Year</span>
                        </h5>
                        <h5>Le Chef 2019: 100 Chefs</h5>
                        <h5>European Young Chef Award 2023</h5>
                        <h5>National Chef of the Year</h5>
                    </div>
                </div>
                <div className='meet-chef-section-all-two-right'><img src={chef_five}/></div>
            </div>
            <div className="contact-section-two" style={{background: '#042726'}}>
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
        <Footer theme='about' dark='dark'/>
        </div>
    )
}
export default Meet;



            