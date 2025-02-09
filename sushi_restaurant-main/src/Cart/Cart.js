import React, { useEffect, useState } from "react";
import './Cart.css';
import Navbar from '../Navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../Footer/Footer';
function Cart() {
    const cart = useSelector((state) => state.cart);
    const trash = useSelector((state) => state.trash);
    const dispatch = useDispatch();
    return(
        <div className="cart-section">
            <Navbar cart={true} theme='cart' dropdown='cart'/>
            <div className='breadcrumb-section-cart'>
                <div className='breadcrumb-section-cart-one'>
                    <span>Home</span>
                    <span>//</span>
                    <span>Cart</span>
                </div>
            </div>
            <div className="cart-section-one">
                {trash.length > 0 ? (
                    <div className="cart-section-one-trash-area">
                        <div className="cart-section-one-trash-area-name">“{trash[0].name}” removed.</div>
                        <div className="cart-section-one-trash-area-undo">
                            <button onClick={() => dispatch({type: 'remove_trash', payload: trash[0].id})}>Undo?</button>
                        </div>
                    </div>
                ) : null}
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th className="image-cart-th"></th>
                            <th>product</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th className="sub-cart-th">subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item,i) => {
                            return(
                                <tr key={i}>
                                    <td className="td-cart-remove-x"><button className="remove-cart" onClick={() => dispatch({type: 'remove_cart', payload: item.id})}>×</button></td>
                                    <td className="td-table-image"><img src={item.image} alt={item.name}/></td>
                                    <td>{item.name}</td>
                                    <td className="td-cart-price">${item.price.toFixed(2)}</td>
                                    <td className="cart-td">
                                        <div className='cart-td-quantity'>
                                            <div className='cart-td-quantity-one'>QUANTITY</div>
                                            <div className='cart-td-quantity-two'>
                                                <button onClick={() => dispatch({type: 'minuce_quantite_cart', payload: item.id})}>−</button>
                                                <span>{item.quantite}</span>
                                                <button onClick={() => dispatch({type: 'add_quantite_cart', payload: item.id})}>+</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sub-cart-td">${(item.price * item.quantite).toFixed(2)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="cart-cupon-code">
                    <div className="cart-cupon-code-one">
                        <div className="cart-cupon-code-one-inp">
                            <input type='text' placeholder='Coupon Code'/>
                        </div>
                        <div className="cart-cupon-code-one-submit">
                            <a href="#">
                            <div className="a-before"></div>
                            <div className="a-after"></div>
                            apply coupon
                            </a>
                        </div>
                    </div>
                </div>
                <div className="cart-total-price">
                    <div className="cart-total-price-one">CART TOTALS</div>
                    <div className="cart-total-price-two">
                        <div className="cart-total-price-two-one">subtotal</div>
                        <div className="cart-total-price-two-two">$120.00</div>
                    </div>
                    <div className="cart-total-price-two-shipping">
                        <div className="cart-total-price-two-one">shipping</div>
                        <div className="cart-total-price-two-two">Shipping to CA.</div>
                    </div>
                    <div className="cart-total-price-two">
                        <div className="cart-total-price-two-one">TOTAL</div>
                        <div className="cart-total-price-two-two">$120.00</div>
                    </div>
                    <div className="cart-total-price-two-checkout">
                            <a href="#">
                            <div className="a-before"></div>
                            <div className="a-after"></div>
                            proceed to checkout
                            </a>
                        </div>
                </div>
            </div>
            
            <div className="contact-section-two-cart">
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
            <Footer theme='cart'/>
        </div>
    )
}
export default Cart;