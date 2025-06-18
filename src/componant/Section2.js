import React from 'react'
import img_1 from '../assests/UnderTheLogo1.jpg'
import img_2 from '../assests/UnderTheLogo2.jpg'
import './Section2.css'
import Explore from '../assests/Explor.svg'
import Explore2 from '../assests/Explor_arrow.svg'
import { AiFillCaretRight } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import Button from './Button'
import { Link } from 'react-router-dom'
function section2() {
  return (
    <div className='i-section' >

      <div className='top_section' >

        <div className='div_imag div_img_1'>
          <img src={img_1} alt='img_1' />
        </div>

        <div className='div_imag div_img_1'>
          <img src={img_2} alt='img_2' />
        </div>

      </div>
      <div className='bottom_section' >

        <Button padding={70} disabled={false} magnetStrength={200} >
          <div className='the_button'>
            <div className='thetext'>
            <Link to="/" className='link' > <p>MAZEED_</p> 
                <FaInstagram className='instgram' />
                </Link>


            </div>


          </div>
        </Button>

      </div>
      <br />
    </div>


  )
}

export default section2