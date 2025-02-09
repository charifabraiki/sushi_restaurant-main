import React from 'react';
import './Contact.css';
function Contact() {
    return(
        <div className="contact-section">
            <div className="contact-section-one">
                <div className="contact-section-one-one contact-cur"></div>
                <div className="contact-section-one-two contact-cur"></div>
                <div className="contact-section-one-three contact-cur"></div>
                <div className="contact-section-one-four contact-cur"></div>
                <div className="contact-section-one-five contact-cur"></div>
                <div className="contact-section-one-six contact-cur"></div>
            </div>
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
    )
}

export default Contact;