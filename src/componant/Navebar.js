import React from 'react'
import { Link } from 'react-router-dom'
 import logo   from    '../assests/WhatsApp Image 2025-06-09 at 10.14.20 PM-Photoroom.png'
 import './Navebar.css'
function Navebar() {
  return (
    <div className='the_container'>
    <div className='container-navbar'>
      
        <div className='header-wrap h-left' >
            <Link to="/" className='header-logo'>
            <img src={logo}/>
            </Link>
         
        </div>
        <div className='header-wrap h-center'>
            <div className='the-text'>
                <p>MAZEED </p>
               
            </div>
            
        </div>
        <div className='header-wrap h-right'> PRAND </div>

    </div>



    </div>
  )
}

export default Navebar