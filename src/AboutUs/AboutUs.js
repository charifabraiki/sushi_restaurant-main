import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import menulogo from '../sushi_project_images/manu_logo.png';
import { Link } from 'react-router-dom';
import about_one from '../sushi_project_images/about_one.jpg';
import about_three from '../sushi_project_images/about_three.jpg';
import about_two from '../sushi_project_images/about_two.jpg';
import about_four from '../sushi_project_images/about_four.jpg';
import about_five from '../sushi_project_images/about_five.jpg';
import about_six from '../sushi_project_images/about_six.jpg';
import logo from '../sushi_project_images/sushi_footer_logo.png';
import Review from '../Review/Review';
import Footer from '../Footer/Footer';
export default function AboutUs() {
  useEffect(() => {
    const body = document.body;
    body.classList.remove('bodyStuck')
},[])
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
    const [clicked, setClicked] = useState(false);
    const [clickedtwo, setClickedtwo] = useState(false);
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
  function setCli(){
    setClickedtwo(!clicked);
  }
  useEffect(() => {
    const body = document.body;
    if(clickedtwo)
    {
      body.classList.add('bodyStuck')
    }else{
      body.classList.remove('bodyStuck')
    }
  }, [clickedtwo])
  return (
    <div className='aboutus-section-all'>
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
        <div className='menu-food-section-about'>
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
        <div className='aboutus-section-two'>
            <div className='aboutus-section-two-one'>
                <img src={about_one}/>
            </div>
            <div className='aboutus-section-two-two'>
                <div className='aboutus-section-two-two-one'>
                    <h1>Our goals &<br></br> history</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='aboutus-section-two-two-two'>
                    <div className='aboutus-section-two-two-two-one'><img src={about_two}/></div>
                    <div className='aboutus-section-two-two-two-two'>
                        <div className='aboutus-section-two-two-two-two-one'>
                            <h3>opening hours</h3>
                            <span>Mon – thu: 10 am – 01 am</span>
                            <span>Fri – sun: 10 am – 020 am</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='aboutus-section-three'>
            <div className='aboutus-section-three-one'>
                <h1>our food<br></br>philosophy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.Conse qu atip sum, nec sagittis dolor sit amet, consectetur adipis eng elit.</p>
            </div>
            <div className='aboutus-section-three-two'><img src={about_three}/></div>
        </div>
        <div className='aboutus-section-four'>
            <h1>book your event</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut enim ad minim veniam, quis nostrud</p>
            <div className='aboutus-section-four-book'>
                <div className='aboutus-section-four-book-one'>
                    <div className='aboutus-section-four-book-one-image'><img src={about_four}/></div>
                    <div className='aboutus-section-four-book-one-infos'>
                        <h2>Celebrations</h2>
                        <span>Friday, 21 Nov</span>
                        <span>Reservations 12Pm To 1.30Pm</span>
                    </div>
                </div>
                <div className='aboutus-section-four-book-one'>
                    <div className='aboutus-section-four-book-one-image-five'><img src={about_five}/></div>
                    <div className='aboutus-section-four-book-one-infos'>
                        <h2>Weddings</h2>
                        <span>Monday, 17 Nov</span>
                        <span>Reservations 1Pm To 3.30Pm</span>
                    </div>
                </div>
                <div className='aboutus-section-four-book-one'>
                    <div className='aboutus-section-four-book-one-image'><img src={about_six}/></div>
                    <div className='aboutus-section-four-book-one-infos'>
                        <h2>Corporate</h2>
                        <span>Wednesday, 26 Nov</span>
                        <span>Reservations 3Pm To 5.30Pm</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='aboutus-section-five'>
            <svg class="qodef-svg--play" xmlns="http://www.w3.org/2000/svg" width="169.525" height="171.295"><g fill="none" stroke='#fff'><g class="qodef-m-item-one"><g><path d="m102.377 31.647 28.5 20.626 10.886 33.374-10.886 33.374-28.5 20.626H67.149l-28.5-20.626-10.886-33.374 10.886-33.374 28.5-20.626Z"></path><path fill="currentColor" d="M67.473 32.647 39.499 52.893 28.815 85.647l10.684 32.754 27.974 20.246h34.58l27.974-20.246 10.684-32.754-10.684-32.754-27.974-20.246h-34.58m-.324-1h35.228l28.5 20.626 10.886 33.374-10.886 33.374-28.5 20.626H67.149l-28.5-20.626-10.886-33.374 10.886-33.374 28.5-20.626Z"></path></g></g><g class="qodef-m-item-two"><path d="m25.57 104.577-.29-38.734 22.424-31.175 36.574-11.707 36.754 12.232 22.894 31.5.29 38.734-22.424 31.175-36.574 11.707-36.754-12.232Z"></path><path d="m25.57 104.577-.29-38.734 22.424-31.175 36.574-11.707 36.754 12.232 22.894 31.5.29 38.734-22.424 31.175-36.574 11.707-36.754-12.232Z"></path><path fill="currentColor" d="m49.085 135.23 36.139 12.027 35.949-11.507 22.041-30.642-.285-38.087-22.518-30.98-36.139-12.028L48.323 35.52 26.282 66.162l.285 38.087 22.518 30.98m-.62.848-22.895-31.5-.29-38.734 22.424-31.175 36.574-11.707 36.754 12.232 22.894 31.5.29 38.734-22.424 31.175-36.574 11.707-36.754-12.232Z"/></g><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m78.263 77.147 14 9-14 9Z"></path></g></svg>
        </div>
        <Review page='about'/>
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