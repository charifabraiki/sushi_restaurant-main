import React from 'react';
import './Video.css';
import videoone from '../sushi_project_images/sushi_video1.mp4';
import fidalgo from '../sushi_project_images/sushi_footer_logo.png';
function Video() {
    return(
        <div className='video-section'>
            <div className='video-section-one'>
                <video autoplay="autoplay" loop='loop' muted="muted">
                    <source src={videoone}/>
                </video>
                <img src={fidalgo} alt='fidalgo'/>
            </div>
        </div>
    )
}


export default Video;