import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Detail.css';
import Footer from '../Footer/Footer';
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
function Detail() {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const handleClick = value => {
        setCurrentValue(value)
      };
      const handleMouseLeave = () => {
        setHoverValue(undefined)
      };    
      const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
      };
    const stars = Array(5).fill(0)
        const styles = {
          stars: {
            display: "flex",
            flexDirection: "row",
            padding:'15px 0'
          }
        
        };
        const colors = {
          orange: "#bf402e",
          grey: "#a9a9a9"
          
      };
    const [terms, setTerms] = useState(false);
    const [nav, setNav] = useState('description');
    const dispatch = useDispatch()
    const [initialStyle, setInitialStyle] = useState({});
    const { name } = useParams()
    const foods = useSelector(state => state.foods);
    const mainfood = foods.find(f => f.name === name.split('-').join(' ').toUpperCase());
    function effect() {
        let images = document.querySelectorAll('.effect');
        let secondImg = document.querySelector('.secondImg');
        let clicked = false;
        images.forEach((image, i) => {
          image.addEventListener('click', function () {
            images.forEach((img) => img.classList.remove('clicked'));
            image.classList.add('clicked');
            secondImg.style.transform = image.style.transform;
            clicked = true;
          });
          if (i === 0 && !clicked) {
            setInitialStyle({});
          }
        });
      };
      useEffect(() => {
        effect();
      }, [mainfood]);
      function add_to_cart() {
        dispatch({type: 'add_to_cart', payload: mainfood})
      };
      function description()
      {
        return(
            <div className='description-section-product'>
                <div className='description-section-product-left-side'>
                    <h2>NUTRITIONAL VALUES PER 100G</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Porta nibh venenatis cras sed felis eget velit. Id ornare arcu odio ut. Sed viverra tellus in hac habitasse
                    </p>
                </div>
                <div className='description-section-product-right-side'>
                    <h2>LOCAL INGREDIENTS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat sed lectus neque sodales ut etiam.</p>
                </div>
            </div>
        )
      };
      function infos()
      {
        return(
            <div className='infos-section-product'>
                <div className='infos-section-product-one'>
                    <h2>WEIGHT:</h2>
                    <span>0.50 kg</span>
                </div>
                <div className='infos-section-product-two'>
                    <h2>DIMENSIONS:</h2>
                    <span>5 × 7 × 10 cm</span>
                </div>
            </div>
        )
      };
      function reviews()
      {
        
        return(
            <div className='reviews-section-product'>
                <div className='reviews-section-product-one'>
                    <h2>REVIEWS</h2>
                    <span>There are no reviews yet.</span>
                </div>
                <div className='reviews-section-product-two'>
                    <div className='reviews-section-product-two-added'>
                        <span className='spanExept' >BE THE FIRST TO REVIEW {mainfood.name}</span>
                        <span>Your email address will not be published. Required fields are marked *</span>
                    </div>
                    <div className='reviews-section-product-three-one'>
                        <span>Your Rating *</span>
                        <div style={styles.stars}>
                            {stars.map((_, index) => {
                            return (
                                <FaStar
                                key={index}
                                size={18}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                style={{
                                    marginRight: 7,
                                    cursor: "pointer"
                                }}
                                />
                            )
                            })}
                        </div>
                    </div>
                </div>
                <div className='reviews-section-product-three'>
                    <div className='reviews-section-product-three-texarea'>
                        <textarea cols='45' rows='8' placeholder='Your Review *'></textarea>
                    </div>
                    <div className='reviews-section-product-three-two'>
                        <input type='text' placeholder='Your Name *'/>
                        <input type='email' placeholder='Your Email *'/>
                    </div>
                    <div className='reviews-section-product-three-three'>
                        <div className='reviews-section-product-three-three-one'>
                            <div className='ensure-display-flex'>
                            <div onClick={() => setTerms(!terms)} className={terms? 'reviews-section-product-three-three-one-check-terms' : 'reviews-section-product-three-three-one-check'}></div>
                            </div>
                            <span className='reviews-section-product-three-three-check-span'>Save my name, email, and website in this browser for the next time I comment.</span>
                        </div>
                        <div className='reviews-section-product-three-three-two'>
                            <a href='#'>
                            <div className="a-before"></div>
                            <div className="a-after"></div>
                            submit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
      };
      function showNavContent()
      {
        switch (nav) {
            case 'description':
                return description();
                break;
            case 'infos':
                return infos();
                break;
            case 'reviews':
                return reviews()
                break;
            default:
                break;
        }
      };
    return(
        <div className='details-section'>
            <Navbar theme='navbar' dropdown='detail'/>
            <div className='breadcrumb-section'>
                <div className='breadcrumb-section-one'>
                    <span>Home</span>
                    <span>//</span>
                    <span>Shop</span>
                    <span>//</span>
                    <span>Sushi</span>
                    <span>//</span>
                    <span>{mainfood.name}</span>
                </div>
            </div>
            <div className='food-presentation-section'>
                <div className='food-presentation-section-left-side'>
                    <div className='food-presentation-section-left-side-one'><img src={mainfood.image} alt='food_main' style={{transform: 'scale(1.3)', position: 'absolute', right: 0, top: '-10px' }} className='effect clicked'/></div>
                    <div className='food-presentation-section-left-side-two'><img src={mainfood.image} alt='food_main' style={{transform: 'scale(1.2)', position: 'absolute', left: '-10px', bottom: '25px' }} className='effect'/></div>
                    <div className='food-presentation-section-left-side-three'><img src={mainfood.image} alt='food_main' style={{transform: 'scale(1.2)', position: 'absolute', left: '35px', top: '25px' }} className='effect'/></div>
                    <div className='food-presentation-section-left-side-four'><img src={mainfood.image} alt='food_main' style={{ ...initialStyle }} className='secondImg'/></div>
                </div>
                <div className='food-presentation-section-right-side'>
                    <div className='food-presentation-section-right-side-title'>
                        <span className='name'>{mainfood.name}</span>
                        <span className='price'>${mainfood.price.toFixed(2)}</span>
                    </div>
                    <div className='food-presentation-section-right-side-desc'>Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Ac turpis egestas mae cenas est pharetra. Nunc faucibus a pellentesque sit amet porttitor eget. At in tellus integer feugiat scelerisque varius morbi sunt in culpa qui.</div>
                    <div className='food-presentation-section-right-side-btns'>
                        <div className='food-presentation-section-right-side-btns-quantite'>
                            <div className='food-presentation-section-right-side-btns-quantite-one'>
                                <div className='food-presentation-section-right-side-btns-quantite-one-one'>QUANTITY</div>
                                <div className='food-presentation-section-right-side-btns-quantite-one-two'>
                                    <button onClick={() => dispatch({type: 'minuce_quantite', payload: mainfood.id})}>−</button>
                                    <span>{mainfood.quantite}</span>
                                    <button onClick={() => dispatch({type: 'add_quantite', payload: mainfood.id})}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className='food-presentation-section-right-side-btns-add-to-cart'>
                            <button onClick={add_to_cart}>
                                <div className="a-before"></div>
                                <div className="a-after"></div>
                                add to cart
                            </button>
                        </div>
                    </div>
                    <div className='food-presentation-section-right-side-categorie'>
                        <div className='food-presentation-section-right-side-categorie-one'>
                            SKU: 15
                        </div>
                        <div className='food-presentation-section-right-side-categorie-two'>
                            CATEGORIE: Sushi
                        </div>
                        <div className='food-presentation-section-right-side-categorie-three'>
                            TAGS: MAKI ROLLS, NIGIRI, SALMON
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-user-infos'>
                <div className='product-user-infos-navbar'>
                        <li className={nav === 'description' && 'active'} onClick={() => setNav('description')}>description</li>
                        <li className={nav === 'infos' && 'active'} onClick={() => setNav('infos')}>additional information</li>
                        <li className={nav === 'reviews' && 'active'} onClick={() => setNav('reviews')}>reviews (0)</li>
                </div>
                <div className='product-user-infos-main'>
                    {showNavContent()}
                </div>
            </div>
                <div className='related-title-products'>related products</div>
            <div className='related-products'>
            {
                foods.slice(0, 3).map((food,i) => {
                    return(
                        <Link to={`/product/${food.name.toLowerCase().split(' ').join('-')}`} style={{textDecoration: 'none'}}>
                            
                        <div className={food.sale === true? 'collection-section-two-one-sale' : 'collection-section-two-one'}>
                            <div className='collection-section-two-one-one'>
                                <div className='collection-section-two-one-one-left-side'>{food.name}</div>
                                <div className='collection-section-two-one-one-prices'>
                                {
                                    food.promo === true? (
                                        <div className='collection-section-two-one-one-promo-side'>${food.oldPrice.toFixed(2)}</div>
                                    ) : null
                                }
                                <div className='collection-section-two-one-one-right-side'>${food.price.toFixed(2)}</div>
                                </div>
                            </div>
                            <div className='collection-section-two-one-two'>
                                <a href=''>add to cart</a>
                            </div>
                            <div className={food.id === 4? `collection-section-two-one-three-${food.id}` :'collection-section-two-one-three'}>
                                <img src={food.image} alt={food.name}/>
                            </div>
                            <div className='collection-section-two-one-four'>
                                {food.description}
                            </div>
                        </div>
                        </Link>
                    )
                })
            }
            </div>
            <div className='details-products-contact-section'>
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
            <Footer theme='dark'/>
        </div>
    )
}
export default Detail;