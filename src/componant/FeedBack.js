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
          <div className="name">John Doe</div>
          <div className="position">Manager</div>
        </div>
      </div>
      <div className="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
      </div>
    </div>
    <div className="testimonial">
      <div className="profile">
        <div className="avatar"></div>
        <div>
          <div className="name">Jane Smith</div>
          <div className="position">Developer</div>
        </div>
      </div>
      <div className="quote">
        Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.
      </div>
    </div>
        <div className="testimonial">
      <div className="profile">
        <div className="avatar"></div>
        <div>
          <div className="name">Jane Smith</div>
          <div className="position">Developer</div>
        </div>
      </div>
      <div className="quote">
        Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.
      </div>
    </div>
    
  </div>
            </div>
        </>
    )
}

export default FeedBack