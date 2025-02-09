import React from 'react';
import './Plat.css';
import japansign from '../sushi_project_images/china_sign.png';
import videoone from '../sushi_project_images/sushi_video2.mp4';
function Plat() {
    return (
        <div className='plat-section'>
            <div className='plat-section-one'></div>
            <div className='plat-section-two'>
                <div className='plat-section-two-all'>
                <div className='plat-section-two-one'><img src={japansign} alt='japan_sign'/></div>
                <div className='plat-section-two-two'>TAKUYA HIROKI HEAD SUSHI CHEF NYC</div>
                <div className='plat-section-two-three'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </div>
                <div className='plat-section-two-four'>
                <a href='#'>
                    <div className="a-before"></div>
                    <div className="a-after"></div>
                    read more
                </a>
                </div>
                </div>
            </div>
            <div className='plat-section-three'>
                <div className='plat-section-three-one'>
                    <div className='plat-section-three-one-video'>
                        <video autoplay="autoplay" loop='loop' muted="muted">
                            <source src={videoone}/>
                        </video>
                    </div>
                </div>
                <div className='plat-section-three-two'>
                    <h2>VISIT US</h2>
                    <span>28 Rue Vaneau, laayoune, +212 603927836<br></br><span>youneslassirifreelance@gmail.com</span></span>
                </div>
                <div className='plat-section-three-three'>
                HOURS OF OPERATION
                </div>
                <div className='plat-section-three-four'>
                    <span>Monday -friday: 6:00pm – 10:00pm<br></br>
                    <span>Lunch saturday & sunday only: 12:00pm – 2:00pm</span></span>
                </div>
            </div>
            <div className='plat-section-four'></div>
        </div>
    )
}
export default Plat;