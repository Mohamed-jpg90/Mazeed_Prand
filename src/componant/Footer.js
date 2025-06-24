import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaTypo3 } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";  

function Footer() {
  return (
    <div className='footer-container65'>
      <section className='footer-subscription65'>
        <p className='footer-subscription-heading65'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text65'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas65'>
          <form>
            {/* <input
              className='footer-input65'
              name='email'
              type='email'
              placeholder='Your Email'
            /> */}
            {/* <Button buttonStyle='btn--outline'>Subscribe</Button> */}
          </form>
        </div>
      </section>
      <div className='footer-links65'>
        <div className='footer-link-wrapper65'>
          <div className='footer-link-items65'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items65'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper65'>
          <div className='footer-link-items65'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items65'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Tik Tok</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media65'>
        <div className='social-media-wrap65'>
          <div className='footer-logo65'>
            <Link to='/' className='social-logo65'>
              MAZEED
              <FaTypo3 />
            </Link>
          </div>
          <small className='website-rights65'>MAZEED © 2025</small>
          <div className='social-icons65'>
            <Link
              className='social-icon-link65 facebook65'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link65 instagram65'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <AiFillInstagram />
            </Link>
            <Link
              className='social-icon-link65 youtube65'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <AiFillTikTok />
            </Link>
            <Link
              className='social-icon-link65 twitter65'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link65 linkedin65'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
