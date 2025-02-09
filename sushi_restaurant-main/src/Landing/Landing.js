import React, { useEffect, useState } from 'react';
import './Landing.css';
import landingone from '../sushi_project_images/landing_one.jpg';
import logo from '../sushi_project_images/sushi_footer_logo.png';
import foodone from '../sushi_project_images/food_one.png';
import foodtwo from '../sushi_project_images/slider_two.jpg';
import foodthree from '../sushi_project_images/slider_three.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Landing() {
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
  const [index, setIndex] = useState(0)
  const list = [
    {
      name: 'TERIYAKI ROLL',
      description: 'black pepper tuna, radish and tempura flakes',
      image: foodone
    },
    {
      name: 'FUJIZAN',
      description: 'Fried shrimps, avocado, flambee salmon, togarashi spicy mix',
      image: foodtwo
    },
    {
      name: 'NIGIRI SALMON',
      description: 'Salmon, tuna, avocado fried in tempura',
      image: foodthree
    }
  ];
  const navigate = useNavigate();
  function headTo(foodName)
    {
        navigate(`/product/${foodName.toLowerCase().split(' ').join('-')}`)
    }
  function addIndex(){
    if (index === 2) {
      setIndex(0)
    }else{
      setIndex(index + 1)
    }
  }
  function minuceIndex(){
    if (index === 0) {
      setIndex(2)
    }else{
      setIndex(index - 1)
    }
  }
  const [clicked, setClicked] = useState(false);
  function setCli(){
    setClicked(!clicked);
  }
  const [shownav, setShownav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 600) {
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
  useEffect(() => {
    const body = document.body;
    if(clicked)
    {
      body.classList.add('bodyStuck')
    }else{
      body.classList.remove('bodyStuck')
    }
  }, [clicked]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='landing-section'>
      <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right:0,
        bottom: 0,
        width: `100%`,
        height: '100vh',
        background: 'rgba(0,0,0,.3)',
        opacity: `${scrollProgress}`,
        zIndex: 9999,
        pointerEvents: 'none',
        boxShadow: '0px 3px 5px 0px rgb(0 0 0 / 10%)'
      }}
      ></div>
      {shownav && <div className='scrolling-navabr'>
        <div className='scrolling-navabr-one'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='landing-section-col-2-nav'>
              <div className='landing-section-col-2-nav-one'>
                <div className='landing-section-col-2-nav-one-menu'></div>
                <div className='landing-section-col-2-nav-one-humb' onClick={setCli}><span className='landing-section-col-2-nav-one-humb-one'></span><span className='landing-section-col-2-nav-one-humb-two'></span></div>
              </div>
          </div>
        </div>}
      {clicked && <div className='navabar-clicked'>
        <div className='landing-section-col-1-clicked'>
            <div className='landing-section-col-1-logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='landing-section-col-1-highlight-clicked'>
              <ul>
                <li><Link to='/' className='nav-active'>home</Link></li>
                <li><Link to='/menu-small-images'>menu</Link></li>
                <li><Link to="/pages/about-us">About</Link></li>
                <li><Link to="/pages/contact-us">Contact</Link></li>
                <li><Link to="/pages/galerie">Galerie</Link></li>
                <li><Link to="/pages/meet-the-chef">Meet The Chef</Link></li>
              </ul>
            </div>
        </div>
        <div className='landing-section-col-2-clicked'>
          <div className='landing-section-col-2-nav'>
              <div className='landing-section-col-2-nav-one' onClick={() => setClicked(!clicked)}>
                <div className='landing-section-col-2-nav-one-menu'>{isMobile === 0? 'menu' : ''}</div>
                <div className='landing-section-col-2-nav-one-humb-clicked'>
                  <span className='landing-section-col-2-nav-one-humb-clicked-one'></span>
                  <span className='landing-section-col-2-nav-one-humb-clicked-two'></span>
                </div>
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
        <div className='landing-section-col-1'>
            {isMobile === 0? (
              <div className='landing-section-col-1-logo'>
                  <img src={logo} alt='logo'/>
              </div>
            ) : (
              <div className='landing-section-col-1-logo'>
                <div className='landing-section-col-1-logo-one'><img src={logo} alt='logo'/></div>
            <div className='landing-section-col-2-nav'>
              <div className='landing-section-col-2-nav-one'>
                <div className='landing-section-col-2-nav-one-menu'></div>
                <div className='landing-section-col-2-nav-one-humb' onClick={() => setClicked(!clicked)}><span className='landing-section-col-2-nav-one-humb-one'></span><span className='landing-section-col-2-nav-one-humb-two'></span></div>
              </div>
          </div>
            </div>
            )}
            <div className='landing-section-col-1-highlight'>
            <span>MOON<br></br>SUSHI</span>
            </div>

            
        </div>
        <div className='landing-section-col-2'>
          <div className='landing-section-col-2-nav'>
              <div className='landing-section-col-2-nav-one' onClick={() => setClicked(!clicked)}>
                <div className='landing-section-col-2-nav-one-menu'>menu</div>
                <div className='landing-section-col-2-nav-one-humb'><span className='landing-section-col-2-nav-one-humb-one'></span><span className='landing-section-col-2-nav-one-humb-two'></span></div>
              </div>
          </div>
          <div className='landing-section-col-2-menu-slider'>
            <div className='landing-section-col-2-menu-slider-one'>
              <div className='landing-section-col-2-menu-slider-one-prev'>
              <svg onClick={() => minuceIndex()} width="256px" height="256px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="0.24000000000000005" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill=""></rect> <path d="M14.5 17L9.5 12L14.5 7" stroke="#B58C67" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
              <div className='landing-section-col-2-menu-slider-one-main'>
                <div className='landing-section-col-2-menu-slider-one-main-after'></div>
                <div className='landing-section-col-2-menu-slider-one-main-one' onClick={() => headTo(list[index].name)}>
                  <div className='landing-section-col-2-menu-slider-one-main-one-img'>
                    <img src={list[index].image} alt={list[index].name}/>
                  </div>
                  <div className='landing-section-col-2-menu-slider-one-main-one-title'>{list[index].name}</div>
                  <div className='landing-section-col-2-menu-slider-one-main-one-desc'>
                  {list[index].description} 
                  </div>
                  <div className='landing-section-col-2-menu-slider-one-main-btn'>
                    <Link to='/menu-small-images' onClick={(event) => event.stopPropagation()}>
                    <div className="a-before"></div>
                    <div className="a-after"></div>
                    VIEW MENU
                    </Link>
                  </div>
                </div>
              </div>
              <div className='landing-section-col-2-menu-slider-one-next'>
              <svg onClick={() => addIndex()} width="256px" height="256px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="0.24000000000000005" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill=""></rect> <path d="M14.5 17L9.5 12L14.5 7" stroke="#B58C67" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
            </div>
            <div className='landing-section-col-2-menu-slider-two'>
              <span className={index === 0? 'spanHover' : 'span'} onClick={() => setIndex(0)}></span>
              <span className={index === 1? 'spanHover' : 'span'} onClick={() => setIndex(1)}></span>
              <span className={index === 2? 'spanHover' : 'span'} onClick={() => setIndex(2)}></span>
            </div>
          </div>
        </div>
    </div>
  )
}
