import React from 'react'
import './FeedBack.css'
import { RiStarSFill } from "react-icons/ri";
import person1 from '../assests/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation.jpg'
function FeedBack() {
  return (
    <>
      <div className='container_feedBack'>

        <div className="testimonials">
          <div className="testimonial">
            <div className="profile">
              <div className="avatar"></div>
              <div>
                <div className="name"> Nour Hassan</div>
                <div className="position">USER</div>
              </div>
            </div>
            <div className="quote">
              Honestly, I didn’t expect the packaging to be this perfect! Everything came carefully wrapped, clean, and ready to gift. It really gave luxury vibes!
            </div>
          </div>
          <div className="testimonial">
            <div className="profile">
              <div className="avatar"></div>
              <div>
                <div className="name">Sarah Adel</div>
                <div className="position">USER</div>
              </div>
            </div>
            <div className="quote">
              The colors are absolutely beautiful — even better than the pictures! The details in the design are stunning. It added such a cozy and artistic touch to my space.
            </div>
          </div>
          <div className="testimonial">
            <div className="profile">
              <div className="avatar"></div>
              <div>
                <div className="name">Mariam Khaled</div>
                <div className="position">USER</div>
              </div>
            </div>
            <div className="quote">
              Great value for the price! You get handcrafted quality that looks super expensive, but at a price that’s totally fair. I’m honestly impressed!
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default FeedBack