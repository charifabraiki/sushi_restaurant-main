import React, { useEffect, useState } from 'react';
import './Navbar.css';
import navlogo from '../sushi_project_images/nav-logo.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
function Navbar(props) {
    const [clicked, setClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const cart = useSelector((state) => state.cart);
    const cartlength = useSelector(state => state.cart);
    const dispatch = useDispatch();
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
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      const handleScroll = () => {
            hideupfunc();
      };
    return(
        <div>
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
        <div className={props.cart? 'navbar-section-detail-cart' : 'navbar-section-detail'}>
            {props.cart? null: (
                <div className='navbar-section-detail-one'>
                <h3 className='navbar-section-detail-one-left-side'>Monday to Saturday from 10am to 7pm</h3>
                <div className='navbar-section-detail-one-right-side'>
                    <div>On Whatsapp +212 603 927836</div>
                    <div></div>
                    <div>Our Locations:eight avenue 487, NY</div>
                </div>
            </div>
            )}
            <div className='navbar-section-detail-two'>
                <div className='navbar-section-detail-two-one'>
                    <Link to='/'><img src={navlogo} alt='nav-logo'/></Link>
                </div>
                <div className='navbar-section-detail-two-two'>
                    <ul>
                    <li><Link to='/' className='nav-active'>home</Link></li>
                    <li><Link to='/menu-small-images'>our menu</Link></li>
                    <li className='navbar-pages-dropdown'>
                        <a>pages</a>
                        <div className={props.dropdown === 'detail'? 'navbar-pages-dropdown-detail': 'navbar-pages-dropdown-cart' }>
                            <li><Link to="/pages/about-us">About Us</Link></li>
                            <li><Link to="/pages/contact-us">Contact Us</Link></li>
                            <li><Link to="/pages/galerie">Galerie</Link></li>
                        </div>
                    </li>
                    <li><Link to="/pages/meet-the-chef">Meet The Chef</Link></li>
                    </ul>
                </div>
                <div className='navbar-section-detail-two-three'>
                    <div className='navbar-section-detail-two-three-cart'>
                        {props.cart? null: (
                        <Link to='/cart' style={{textDecoration: 'none',color: '#fff'}}><span>cart ({cartlength.length})</span></Link>
                    )}
                    {!props.cart && (
                        
                    <div className='cart-overview'>
                    {cart.length > 0? (
                        <>
                            
                    <div className='cart-overview-one'>
                        {cart.map((item,i) => {
                            return(
                                <div className='cart-overview-one-item' key={i}>
                                    <div className='cart-overview-one-item-img'><img src={item.image} alt={item.name}/></div>
                                    <div className='cart-overview-one-item-center'>
                                        <div className='cart-overview-one-item-center-title'>{item.name}</div>
                                        <div className='cart-overview-one-item-center-price'>${item.price.toFixed(2)}</div>
                                        <div className='cart-overview-one-item-center-quantity'>Quantity: {item.quantite}</div>
                                    </div>
                                    <div className='cart-overview-one-item-remove'><button onClick={() => dispatch({type: 'remove_cart', payload: item.id})}>×</button></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='cart-overview-two'>
                        <div className='cart-overview-two-one'>Total:</div>
                        <div className='cart-overview-two-two'>$130.00</div>
                    </div>
                    <div className='cart-overview-three'>
                        <Link to='/cart'>
                        <div className="a-before"></div>
                        <div className="a-after"></div>
                        view cart & checkout
                        </Link>
                    </div>
                        </>
                    ) : <div className='cart-preview-no-product'>No products in the cart.</div>}
                </div>
                    )}
                    </div>
                    {
                        isMobile === false? (
                            <div className='navbar-section-detail-two-three-humb'>
                        <div onClick={showupfunc}>
                        <div className='navbar-section-detail-two-three-humb-top'></div>
                        <div className='navbar-section-detail-two-three-humb-bottom'></div>
                        </div>
                    </div>
                        ): (
                            <div className='navbar-section-detail-two-three-humb'>
                                <div onClick={() => setClicked(!clicked)}>
                                <div className='navbar-section-detail-two-three-humb-top'></div>
                                <div className='navbar-section-detail-two-three-humb-bottom'></div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        {clicked && isMobile === true &&(
            <div className={props.theme? `navbar-menu-mobile-${props.theme}`: 'navbar-menu-mobile'}>
                    <div>
                    <li><Link to='/' className='nav-active'>home</Link></li>
                    <li><Link to='/menu-small-images'>our menu</Link></li>
                    <li><Link to="/pages/about-us">About Us</Link></li>
                    <li><Link to="/pages/contact-us">Contact Us</Link></li>
                    <li><Link to="/pages/meet-the-chef">Meet The Chef</Link></li>
                </div>
        </div>
            )}
        </div>
    )
}
export default Navbar;