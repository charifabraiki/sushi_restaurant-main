import React from 'react';
import './Explore.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import foodtwo from '../sushi_project_images/food_two.png';
import foodfive from '../sushi_project_images/food_five.png';
import foodsix from '../sushi_project_images/food_six.png';
import foodfour from '../sushi_project_images/food_four.png';
import foodthree from '../sushi_project_images/food_three.png';
export default function Explore() {
  return (
    <div className='explore-section'>
        <div className='explore-section-one'>explore by sushi</div>
        <div className='explore-section-two spanHover'>
            <div className='explore-section-two-left-side'><span>omakase</span></div>
            <div className='explore-section-two-center-side'>
                <img src={foodtwo}/>
            </div>
            <div className='explore-section-two-right-side'><span>nigiri</span> <span> ebe</span></div>
        </div>
        <div className='explore-section-three spanHover'>
            <div className='explore-section-three-left-side'>
                <img src={foodsix}/>
            </div>
            <div className='explore-section-three-center-side'>
                <span>SUSHI</span> <span> MAKI</span>
            </div>
            <div className='explore-section-three-right-side four-display-none'>
                <img src={foodfive}/>
            </div>
        </div>
        <div className='explore-section-four spanHover'>
            <div className='explore-section-four-left-side'>
            <span className='four-display-none'>SASHIMI </span> <span>SETS</span>
            </div>
            <div className='explore-section-four-center-side'>
                <img src={foodfour}/>
            </div>
            <div className='explore-section-four-right-side'>
                <span>SIDE</span>
            </div>
        </div>
        <div className='explore-section-five spanHover'>
            <div className='explore-section-five-left-side'>
            <span>DISH</span>
            </div>
            <div className='explore-section-five-right-side'>
                <img src={foodthree}/>
            </div>
        </div>
    </div>
  )
}
