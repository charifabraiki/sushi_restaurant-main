import React, { useEffect, useState } from 'react';
import './Menu.css';
import menulogo from '../sushi_project_images/manu_logo.png';
import one from '../sushi_project_images/m_one.png';
import two from '../sushi_project_images/mtwo.png';
import three from '../sushi_project_images/mthree.png';
import four from '../sushi_project_images/mfour.png';
import five from '../sushi_project_images/mfive.png';
import six from '../sushi_project_images/msix.png';
import logo from '../sushi_project_images/sushi_footer_logo.png';
import seven from '../sushi_project_images/mseven.png';
import eight from '../sushi_project_images/meight.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderone from '../sushi_project_images/sliderone.jpg';
import slidertwo from '../sushi_project_images/slidertwo.jpg';
import sliderthree from '../sushi_project_images/sliderthree.jpg';
import sliderfive from '../sushi_project_images/sliderfive.jpg';
import slidersix from '../sushi_project_images/slidersix.jpg';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
function Menu() {
    const [tclicked, setTclicked] = useState(false);
    const [clickedtwo, setClickedtwo] = useState(false);
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
    function timefunction(e)
    {
        setTime(e);
        setTclicked(false);
    }
    const [time, setTime] = useState('11:00 am');
    const [nbrpers, setNbrpers] = useState(1);
    function nbrPersfunction(e)
    {
        setNbrpers(e.target.value);
        setPclicked(false);
    }
    const [pclicked, setPclicked] = useState(false);
    useEffect(() => {
        const body = document.body;
        body.classList.remove('bodyStuck')
    },[])
    const list = [
        {
            img: one,
            name: 'SPINACH SALAD',
            price: 70,
            desc: 'young spinach with cashew and sesame sauce',
        },
        {
            img: two,
            name: 'FRAGOLA',
            price: 81,
            desc: 'callebaut white chocolate, strawberies, vanilla',
        },
        {
            img: three,
            name: 'BLACK SQUID INK RISOTTO',
            price: 87,
            desc: 'arborio rice coocked in cuttlefish ink sauce',
        },
        {
            img: four,
            name: 'SALMON CEVICHE',
            price: 81,
            desc: 'fresh salmon with pomelo and roasted cucumber',
        },
        {
            img: five,
            name: 'TAGLIATELLE BOLOGNESE',
            price: 76,
            desc: 'homemade pasta in red ragu sauce',
        },
        {
            img: six,
            name: 'HOMEMADE PELMENI',
            price: 83,
            desc: 'traditional Russian pasta dish filled with minced pork',
        },
        {
            img: seven,
            name: 'VITELLO TONNATO',
            price: 83,
            desc: 'smoked Black Angus rump steak with tuna',
        },
        {
            img: eight,
            name: 'GRILLED VEGETABLES',
            price: 75,
            desc: 'pepper, eggplant, zucchini, red onion, mushrooms',
        }
    ];
    const [clicked, setClicked] = useState(false);
    const menuItems = [
        {
            type: 'beer',
            collection: [
                {
                    name: "BREAKBEET",
                    price: "$32",
                    description: "Russian Standard Platinum Vodka, Raspberry & Beetroot Cordial, Lemon, Spicy Ginger Beer"
                  },
                  {
                    name: "JAPANESE FIZZ",
                    price: "$26",
                    description: "Lemongrass Infused Russian Standard Platinum Vodka, Lime, Jasmine Green Tea & Matcha Soda"
                  },
                  {
                    name: "SGROPPINO",
                    price: "$37",
                    description: "Italicus Rosolio Di Bergamotto, Lemon Sorbet, Prosecco Carpe Noctem"
                  }
            ]
        },
        {
            type: 'wine',
            collection: [
                {
                    name: "MANGO DUSK",
                    price: "$37",
                    description: "Lemongrass Infused Russian Standard Platinum Vodka, Lime, Jasmine Green Tea & Matcha Soda"
                  },
                  {
                    name: "BLOODY ORANGE",
                    price: "$37",
                    description: "Russian Standard Platinum Vodka, Raspberry & Beetroot Cordial, Lemon, Spicy Ginger Beer"
                  },
                  {
                    name: "PINEAPPLE SUNRISE",
                    price: "$35",
                    description: "Lemongrass Infused Russian Standard Platinum Vodka, Lime, Jasmine Green Tea & Matcha Soda"
                  }
            ]
        },
        {
            type: 'cocktails',
            collection: [
                {
                    name: "MOSCOW MULE",
                    price: "$53",
                    description: "Lemongrass Infused Russian Standard Platinum Vodka, Lime, Jasmine Green Tea & Matcha Soda"
                  },
                  {
                    name: "SCREWDRIVER",
                    price: "$60",
                    description: "Russian Standard Platinum Vodka, Raspberry & Beetroot Cordial, Lemon, Spicy Ginger Beer"
                  },
                  {
                    name: "MANHATTAN",
                    price: "$33",
                    description: "Lemongrass Infused Russian Standard Platinum Vodka, Lime, Jasmine Green Tea & Matcha Soda"
                  }
            ]
        }
      ];
      const menuCourses = [
        {
          name: 'Herbed Lamb Steaks',
          price: 89,
          description: 'Grilled lamb cutlets, pomegranate glaze, butternut squash',
        },
        {
          name: 'Tartare de Boeuf',
          price: 90,
          description: 'Hand cut 100% beef steak tartar with French baguette',
        },
        {
          name: 'Classic Caesar Salad',
          price: 60,
          description: 'Cold iceberg salad with avocado and fresh aromatic herbs',
        },
        {
          name: 'Dumplings',
          price: 76,
          description: 'Homemade beef soup with dumplings',
        },
        {
          name: 'Foie Gras',
          price: 63,
          description: 'Foie gras terrine served with homemade toasted brioche',
        },
        {
          name: 'Black Paella',
          price: 68,
          description: 'Black paella with cuttlefish, prawns, and squids in cuttlefish ink',
        },
        {
          name: 'Beef Tongue',
          price: 70,
          description: 'Black Angus beef tongue baked in Josper oven with porcini mushroom ragu, eggplant hummus, and horseradish sauce',
        },
        {
          name: 'Penne Arrabiata',
          price: 59,
          description: 'Homemade short pasta in hot tomato and garlic sauce',
        },
      ];
      var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
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
        <div className='menu-section-all-divs'>
            {shownav && <div className='scrolling-navabr'>
          <div className='menu-food-section-oneShownav'>
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
            <div className='menu-food-section'>
            <div className='menu-food-section-one'>
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
            <div className='menu-food-section-two'>
                <h1>OUR MENU</h1>
            </div>
        </div>
        <div className='food-menu-prices'>
            <div className='food-menu-prices-one'>
            <h1>APPETIZERS</h1>
            </div>
            <div className='food-menu-prices-two'>
                {list.map((item,i) => {
                    return(
                        <div className='food-menu-prices-two-item' key={i}>
                            <div className='food-menu-prices-two-item-img'><img src={item.img}/></div>
                            <div className='food-menu-prices-two-item-desc'>
                                <div className='food-menu-prices-two-item-desc-name'>{item.name}</div>
                                <div className='food-menu-prices-two-item-desc-desc'>{item.desc}</div>
                            </div>
                            <div className='food-menu-prices-two-item-price'>${item.price}</div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='food-menu-onscroll'>
        </div>
        <div className='food-menu-liquides'>
            {menuItems.map((item,i) => {
                return(
                    <div className='food-menu-liquides-item' key={i}>
                        <div className='food-menu-liquides-item-one'>
                            <h1>{item.type}</h1>
                        </div>
                        <div className='food-menu-liquides-item-two'>
                            {item.collection.map((co,i) => {
                                return(
                                    <div className='food-menu-liquides-item-two-item' key={i}>
                                        <div className='food-menu-liquides-item-two-item-title'>{co.name}</div>
                                        <div className='food-menu-liquides-item-two-item-price'>{co.price}</div>
                                        <div className='food-menu-liquides-item-two-item-desc'>{co.description}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='food-menu-book-table'>
            <div className='food-menu-book-table-one'>book a table</div>
            <div className='food-menu-book-table-two'>
                <div className='food-menu-book-table-two-one'>
                <div className='order-section-center-side-inp-one-one'>
                    <div onClick={() => setPclicked(!pclicked)}>{nbrpers} Person</div>
                    <div className='order-section-center-side-inp-one-one-svg'>
                    <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)rotate(90)" stroke="" stroke-width="1.032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill=""></rect> <path d="M14.5 17L9.5 12L14.5 7" stroke="#B58C67" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                </div>
                {pclicked && (
                    <div className='order-section-center-side-inp-one-two'>
                    <ul>
                        <li value={1} onClick={(e) => nbrPersfunction(e)} style={{color: '#fff'}}>1 Person</li>
                        <li value={2} onClick={(e) => nbrPersfunction(e)}>2 People</li>
                        <li value={3} onClick={(e) => nbrPersfunction(e)}>3 People</li>
                        <li value={4} onClick={(e) => nbrPersfunction(e)}>4 People</li>
                        <li value={5} onClick={(e) => nbrPersfunction(e)}>5 People</li>
                        <li value={6} onClick={(e) => nbrPersfunction(e)}>6 People</li>
                        <li value={7} onClick={(e) => nbrPersfunction(e)}>7 People</li>
                        <li value={8} onClick={(e) => nbrPersfunction(e)}>8 People</li>
                        <li value={9} onClick={(e) => nbrPersfunction(e)}>9 People</li>
                        <li value={10} onClick={(e) => nbrPersfunction(e)}>10 People</li>
                    </ul>
                </div>
                )}
                </div>
                <div className='food-menu-book-table-two-two'>
                <div className='order-section-center-side-inp-one-one'>
                    <div onClick={() => setTclicked(!tclicked)}>{time}</div>
                    <div className='order-section-center-side-inp-one-one-svg'>
                    <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)rotate(90)" stroke="" stroke-width="1.032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill=""></rect> <path d="M14.5 17L9.5 12L14.5 7" stroke="#B58C67" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                </div>
                {tclicked && (
                    <div className='order-section-center-side-inp-one-two'>
                    <ul>
                        <li value='00:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>00:30 am</li>
                        <li value='1:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>1:00 am</li>
                        <li value='1:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>1:30 am</li>
                        <li value='2:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>2:00 am</li>
                        <li value='2:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>2:30 am</li>
                        <li value='3:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>3:00 am</li>
                        <li value='3:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>3:30 am</li>
                        <li value='4:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>4:00 am</li>
                        <li value='4:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>4:30 am</li>
                        <li value='5:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>5:00 am</li>
                        <li value='5:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>5:30 am</li>
                        <li value='6:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>6:00 am</li>
                        <li value='6:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>6:30 am</li>
                        <li value='7:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>7:00 am</li>
                        <li value='7:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>7:30 am</li>
                        <li value='8:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>8:00 am</li>
                        <li value='8:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>8:30 am</li>
                        <li value='9:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>9:00 am</li>
                        <li value='9:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>9:30 am</li>
                        <li value='10:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>10:00 am</li>
                        <li value='10:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>10:30 am</li>
                        <li value='11:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>11:00 am</li>
                        <li value='11:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>11:30 am</li>
                        <li value='12:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>12:00 pm</li>
                        <li value='12:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>12:30 pm</li>
                        <li value='1:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>1:00 pm</li>
                        <li value='1:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>1:30 pm</li>
                        <li value='2:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>2:00 pm</li>
                        <li value='2:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>2:30 pm</li>
                        <li value='3:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>3:00 pm</li>
                        <li value='3:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>3:30 pm</li>
                        <li value='4:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>4:00 pm</li>
                        <li value='4:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>4:30 pm</li>
                        <li value='5:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>5:00 pm</li>
                        <li value='5:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>5:30 pm</li>
                        <li value='6:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>6:00 pm</li>
                        <li value='6:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>6:30 pm</li>
                        <li value='7:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>7:00 pm</li>
                        <li value='7:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>7:30 pm</li>
                        <li value='8:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>8:00 pm</li>
                        <li value='8:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>8:30 pm</li>
                        <li value='9:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>9:00 pm</li>
                        <li value='9:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>9:30 pm</li>
                        <li value='10:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>10:00 pm</li>
                        <li value='10:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>10:30 pm</li>
                        <li value='11:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>11:00 pm</li>
                        <li value='11:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>11:30 pm</li>
                        <li value='12:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>12:00 am</li>
                    </ul>
                </div>
                )}
                </div>
                <div className='food-menu-book-table-two-three'>
                <div className='order-section-center-side-inp-two-one' type='date'>
                    <div>25/09/2023</div>
                    <div className='order-section-center-side-inp-two-one-svg'>
                    <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)rotate(90)" stroke="" stroke-width="1.032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill=""></rect> <path d="M14.5 17L9.5 12L14.5 7" stroke="#B58C67" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                </div>
                </div>
                <div className='food-menu-book-table-two-four'>
                <a href="#">
                    <div className="a-before"></div>
                    <div className="a-after"></div>
                    BOOK A TABLE
                    </a>
                </div>
                <p>*Powered by OpenTable</p>
            </div>
        </div>
        <div className='food-menu-main-courses'>
            <div className='food-menu-main-courses-one'>
                <h1>MAIN COURSES</h1>
            </div>
            <div className='food-menu-main-courses-two'>
                {menuCourses.map((item,i) => {
                    return(
                        <div className='food-menu-main-courses-two-item'>
                            <div className='food-menu-main-courses-two-item-title'>{item.name}</div>
                            <div className='food-menu-main-courses-two-item-price'>${item.price}</div>
                            <div className='food-menu-main-courses-two-item-desc'>{item.description}</div>
                        </div>
                    )
                })}
            </div>
        </div>
        <Slider {...settings} className='food-menu-slider-food'>
            <div className='food-menu-slider-food-item'>
                <div className='food-menu-slider-food-item-name'>
                    <span>n</span>
                    <span>o</span>
                    <span>m</span>
                    <span>l</span>
                    <span>a</span>
                    <span>s</span>
                    <span>o</span>
                    <span>d</span>
                    <span>a</span>
                    <span>c</span>
                    <span>o</span>
                    <span>v</span>
                    <span>a</span>
                </div>
                <div className='food-menu-slider-food-item-img'><img src={sliderone} alt='slider_image'/></div>
            </div>
            <div className='food-menu-slider-food-item'>
            <div className='food-menu-slider-food-item-name'>
                    <span>d</span>
                    <span>a</span>
                    <span>l</span>
                    <span>a</span>
                    <span>s</span>
                    <span>t</span>
                    <span>o</span>
                    <span>r</span>
                    <span>r</span>
                    <span>a</span>
                    <span>c</span>
                </div>
                <div className='food-menu-slider-food-item-img'><img src={slidertwo} alt='slider_image'/></div>
            </div>
            <div className='food-menu-slider-food-item'>
            <div className='food-menu-slider-food-item-name'>
                    <span>w</span>
                    <span>a</span>
                    <span>l</span>
                    <span>s</span>
                    <span>e</span>
                    <span>g</span>
                    <span>a</span>
                    <span>b</span>
                    <span>b</span>
                    <span>a</span>
                    <span>c</span>
                </div>
                <div className='food-menu-slider-food-item-img'><img src={sliderthree} alt='slider_image'/></div>
            </div>
            <div className='food-menu-slider-food-item'>
            <div className='food-menu-slider-food-item-name'>
                    <span>a</span>
                    <span>n</span>
                    <span>u</span>
                    <span>t</span>
                    <span>e</span>
                    <span>r</span>
                    <span>o</span>
                    <span>c</span>
                    <span>a</span>
                    <span>b</span>
                    <span>l</span>
                    <span>a</span>
                </div>
                <div className='food-menu-slider-food-item-img'><img src={sliderfive} alt='slider_image'/></div>
            </div>
            <div className='food-menu-slider-food-item'>
            <div className='food-menu-slider-food-item-name'>
                    <span>r</span>
                    <span>u</span>
                    <span>o</span>
                    <span>s</span>
                    <span>y</span>
                    <span>e</span>
                    <span>k</span>
                    <span>s</span>
                    <span>i</span>
                    <span>h</span>
                    <span>w</span>
                </div>
                <div className='food-menu-slider-food-item-img'><img src={slidersix} alt='slider_image'/></div>
            </div>
        </Slider>
       <div className='food-menu-contact-section'>
       <div className="contact-section-two">
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
       </div>
       <Footer theme='menu'/>
        </div>
    )
}

export default Menu;