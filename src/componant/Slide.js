import React from 'react'

import './Slide.css';

import { Link } from 'react-router-dom'

function Slide() {
    return (


        <div className='slide-wrap'>
            <div className='sl-wrap1'> <Link to="/Product" className='sl-wrap'>SHOP</Link>    </div>
            <div className='sl-wrap1'>         <Link to="/Product" className='sl-wrap'>COLLECTIONs</Link>   </div>
            <div className='sl-wrap1'>   <Link to="#About_us" className='sl-wrap'>About</Link>    </div>



        </div>


    )
}

export default Slide