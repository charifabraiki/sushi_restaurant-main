import React from 'react';
import './Chef.css';
import chefone from '../sushi_project_images/plat_three.jpg';
import cheftwo from '../sushi_project_images/plat_four.jpg';
import chefthree from '../sushi_project_images/plat_five.jpg';

export default function Chef() {
  return (
    <div className='chef-section'>
        <div className='chef-section-one'>
            <div className='chef-section-one-title'>MEET OUR CHEFS</div>
            <div className='chef-section-one-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut enim ad minim veniam, quis nostrud</div>
        </div>
        <div className='chef-section-two'>
            <div className='chef-section-two-one chefTwo'>
                <div className='chefTwo-img'>
                    <div className="chefTwo-img-before"></div>
                    <div className="chefTwo-img-after"></div>
                    <img src={chefone} alt='chef'/>
                </div>
                <div className='chefTwo-name'>
                    <h2>MATEO WOLF</h2>
                    <span>Chef</span>
                </div>
            </div>
            <div className='chef-section-two-two chefTwo'>
                <div className='chefTwo-img'>
                    <div className="chefTwo-img-before"></div>
                    <div className="chefTwo-img-after"></div>
                    <img src={cheftwo} alt='chef'/>
                    </div>
                <div className='chefTwo-name'>
                    <h2>FARHAN MCKAY</h2>
                    <span>Assistant Chef</span>
                </div>
            </div>
            <div className='chef-section-two-three chefTwo'>
                <div className='chefTwo-img'>
                    <div className="chefTwo-img-before"></div>
                    <div className="chefTwo-img-after"></div>
                    <img src={chefthree} alt='chef'/>
                    </div>
                <div className='chefTwo-name'>
                    <h2>DAN HAMILTON</h2>
                    <span>Chef</span>
                </div>
            </div>
        </div>
    </div>
  )
}
