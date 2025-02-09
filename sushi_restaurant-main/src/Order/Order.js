import React, { useState } from 'react';
import './Order.css';
import japansign from '../sushi_project_images/china_sign.png';

export default function Order() {
    const [nbrpers, setNbrpers] = useState(1);
    const [time, setTime] = useState('11:00 am');
    const [pclicked, setPclicked] = useState(false);
    const [tclicked, setTclicked] = useState(false);
    function nbrPersfunction(e)
    {
        setNbrpers(e.target.value);
        setPclicked(false);
    }
    function timefunction(e)
    {
        setTime(e);
        setTclicked(false);
    }
  return (
    <div className='order-section'>
        <div className='order-section-left-side'></div>
        <div className='order-section-center-side'>
            <div className='order-section-center-side-img'><img src={japansign} alt='japan_sign'/></div>
            <div className='order-section-center-side-title'>BOOK A TABLE</div>
            <div className='order-section-center-side-recommend'>*reservations recommended </div>
            <div className='order-section-center-side-inp-one'>
                <div className='order-section-center-side-inp-one-one'>
                    <div onClick={() => setPclicked(!pclicked)}>{nbrpers} Person</div>
                    <div className='order-section-center-side-inp-one-one-svg'>
                    <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)rotate(90)" stroke="" stroke-width="1.032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill=""></rect> <path d="M14.5 17L9.5 12L14.5 7" stroke="#B58C67" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                </div>
                {pclicked && (
                    <div className='order-section-center-side-inp-one-two'>
                    <ul>
                        <li value={1} onClick={(e) => nbrPersfunction(e)} style={{color: '#fff'}}>1 Person</li>
                        <li value={2} onClick={(e) => nbrPersfunction(e)}>2 People</li>
                        <li value={3} onClick={(e) => nbrPersfunction(e)}>3 People</li>
                        <li value={4} onClick={(e) => nbrPersfunction(e)}>4 People</li>
                        <li value={5} onClick={(e) => nbrPersfunction(e)}>5 People</li>
                        <li value={6} onClick={(e) => nbrPersfunction(e)}>6 People</li>
                        <li value={7} onClick={(e) => nbrPersfunction(e)}>7 People</li>
                        <li value={8} onClick={(e) => nbrPersfunction(e)}>8 People</li>
                        <li value={9} onClick={(e) => nbrPersfunction(e)}>9 People</li>
                        <li value={10} onClick={(e) => nbrPersfunction(e)}>10 People</li>
                    </ul>
                </div>
                )}
            </div>
            <div className='order-section-center-side-inp-two'>
                <div className='order-section-center-side-inp-two-one' type='date'>
                    <div>25/09/2023</div>
                    <div className='order-section-center-side-inp-two-one-svg'>
                    <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)rotate(90)" stroke="" stroke-width="1.032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill=""></rect> <path d="M14.5 17L9.5 12L14.5 7" stroke="#B58C67" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                </div>
            </div>
            <div className='order-section-center-side-inp-one'>
                <div className='order-section-center-side-inp-one-one'>
                    <div onClick={() => setTclicked(!tclicked)}>{time}</div>
                    <div className='order-section-center-side-inp-one-one-svg'>
                    <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)rotate(90)" stroke="" stroke-width="1.032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill=""></rect> <path d="M14.5 17L9.5 12L14.5 7" stroke="#B58C67" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                </div>
                {tclicked && (
                    <div className='order-section-center-side-inp-one-two'>
                    <ul>
                        <li value='00:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>00:30 am</li>
                        <li value='1:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>1:00 am</li>
                        <li value='1:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>1:30 am</li>
                        <li value='2:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>2:00 am</li>
                        <li value='2:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>2:30 am</li>
                        <li value='3:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>3:00 am</li>
                        <li value='3:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>3:30 am</li>
                        <li value='4:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>4:00 am</li>
                        <li value='4:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>4:30 am</li>
                        <li value='5:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>5:00 am</li>
                        <li value='5:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>5:30 am</li>
                        <li value='6:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>6:00 am</li>
                        <li value='6:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>6:30 am</li>
                        <li value='7:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>7:00 am</li>
                        <li value='7:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>7:30 am</li>
                        <li value='8:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>8:00 am</li>
                        <li value='8:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>8:30 am</li>
                        <li value='9:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>9:00 am</li>
                        <li value='9:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>9:30 am</li>
                        <li value='10:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>10:00 am</li>
                        <li value='10:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>10:30 am</li>
                        <li value='11:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>11:00 am</li>
                        <li value='11:30 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>11:30 am</li>
                        <li value='12:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>12:00 pm</li>
                        <li value='12:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>12:30 pm</li>
                        <li value='1:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>1:00 pm</li>
                        <li value='1:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>1:30 pm</li>
                        <li value='2:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>2:00 pm</li>
                        <li value='2:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>2:30 pm</li>
                        <li value='3:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>3:00 pm</li>
                        <li value='3:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>3:30 pm</li>
                        <li value='4:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>4:00 pm</li>
                        <li value='4:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>4:30 pm</li>
                        <li value='5:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>5:00 pm</li>
                        <li value='5:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>5:30 pm</li>
                        <li value='6:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>6:00 pm</li>
                        <li value='6:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>6:30 pm</li>
                        <li value='7:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>7:00 pm</li>
                        <li value='7:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>7:30 pm</li>
                        <li value='8:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>8:00 pm</li>
                        <li value='8:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>8:30 pm</li>
                        <li value='9:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>9:00 pm</li>
                        <li value='9:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>9:30 pm</li>
                        <li value='10:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>10:00 pm</li>
                        <li value='10:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>10:30 pm</li>
                        <li value='11:00 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>11:00 pm</li>
                        <li value='11:30 pm' onClick={(e) => timefunction(e.target.getAttribute('value'))}>11:30 pm</li>
                        <li value='12:00 am' onClick={(e) => timefunction(e.target.getAttribute('value'))}>12:00 am</li>
                    </ul>
                </div>
                )}
            </div>
            <div className='order-section-center-side-btn'>
                <a href='#'>
                    <div className="a-before"></div>
                    <div className="a-after"></div>
                    book now
                </a>
            </div>
            <div className='order-section-center-side-powered'>
                *Powered by OpenTable
            </div>
        </div>
        <div className='order-section-right-side'></div>
    </div>
  )
}
