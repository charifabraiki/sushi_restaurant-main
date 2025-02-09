import React, { useEffect } from "react";
import './Review.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Review(props) {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
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
    function nextBtn() {
      const allButtons = document.querySelectorAll('.slick-dots li');
      let currentIndex = Array.from(allButtons).findIndex(elm => elm.classList.contains('slick-active'));
  
      if (currentIndex === -1) return;
      allButtons[currentIndex].classList.remove('slick-active');
  
      const nextIndex = (currentIndex + 1) % allButtons.length;
  
      allButtons[nextIndex].classList.add('slick-active');
  }
  
  function prevBtn() {
      const allButtons = document.querySelectorAll('.slick-dots li');
      let currentIndex = Array.from(allButtons).findIndex(elm => elm.classList.contains('slick-active'));
  
      if (currentIndex === -1) return;
  
      allButtons[currentIndex].classList.remove('slick-active');
  
      const prevIndex = (currentIndex - 1 + allButtons.length) % allButtons.length;
  
      allButtons[prevIndex].classList.add('slick-active');
  }
    return(
        <div className={`reviews-section${props.page}`}>
          <div className="reviews-section-one">They say about us</div>
          <div className="reviews-section-two">
            <div className="reviews-section-two-left">
            <svg onClick={prevBtn} width="256px" height="256px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="0.24000000000000005" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill=""></rect> <path d="M14.5 17L9.5 12L14.5 7" stroke="#B58C67" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <Slider {...settings} className="reviews-section-two-slider">
              <div className="reviews-section-two-center">
              <div className="reviews-section-two-center-one">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</div>
              <div className="reviews-section-two-center-two">
                <span className="reviews-section-two-center-one-slach"></span>
                <span>by younes lassiri</span>
                <span className="reviews-section-two-center-one-slach"></span>
                <span>full stack developer</span>
              </div>
              </div>
              <div className="reviews-section-two-center">
              <div className="reviews-section-two-center-one">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</div>
              <div className="reviews-section-two-center-two">
                <span className="reviews-section-two-center-one-slach"></span>
                <span>by younes lassiri</span>
                <span className="reviews-section-two-center-one-slach"></span>
                <span>full stack developer</span>
              </div>
              </div>
              <div className="reviews-section-two-center">
              <div className="reviews-section-two-center-one">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</div>
              <div className="reviews-section-two-center-two">
                <span className="reviews-section-two-center-one-slach"></span>
                <span>by younes lassiri</span>
                <span className="reviews-section-two-center-one-slach"></span>
                <span>full stack developer</span>
              </div>
              </div>
            </Slider>
            <div className="reviews-section-two-right">
            <svg onClick={nextBtn} width="256px" height="256px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="0.24000000000000005" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill=""></rect> <path d="M14.5 17L9.5 12L14.5 7" stroke="#B58C67" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
          </div>
          <div className="dots-slider-index"></div>
        </div>
    )
}
export default Review;