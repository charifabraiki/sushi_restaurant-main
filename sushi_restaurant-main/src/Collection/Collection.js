import React from 'react';
import './Collection.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Collection() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const foods = useSelector(state => state.foods);
    function headTo(foodName)
    {
        navigate(`/product/${foodName.toLowerCase().split(' ').join('-')}`)
    }
    function addToCart(id)
    {
        dispatch({type: 'add_to_cart', payload: {id: id}})
    }
    function prevent(event,id)
    {
        event.stopPropagation();
        addToCart(id);
    }
  return (
    <div className='collection-section'>
        <div className='collection-section-one'>
            <div className='collection-section-one-title'>SUSHI ROLLS</div>
            <div className='collection-section-one-paragraph'>
                <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut enim ad minim veniam, quis nostrud
                </span>
            </div>
        </div>
        <div className='collection-section-two'>
            {
                foods.map((food,i) => {
                    return(
                        <div className={food.sale === true? 'collection-section-two-one-sale' : 'collection-section-two-one'} onClick={() => headTo(food.name)}>
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
                                {
                                    food.added? (
                                        <Link to='/cart' onClick={(event) => event.stopPropagation()}><span>view cart</span></Link>
                                    ): <span onClick={(event) => prevent(event,food.id)}>add to cart</span>
                                }
                            </div>
                            <div className='collection-section-two-one-three'>
                                <img src={food.image} alt={food.name}/>
                            </div>
                            <div className='collection-section-two-one-four'>
                                {food.description}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
