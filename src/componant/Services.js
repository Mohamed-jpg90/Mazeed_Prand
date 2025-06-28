import React from 'react'
import './Services.css'
import { LuWallet } from "react-icons/lu";
import { LuAlarmClock } from "react-icons/lu";
import { BsHeadset } from "react-icons/bs";
import { BsClipboard2Check } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaAnglesDown } from "react-icons/fa6";
function Services() {
  return (
    <div className='contained_of_services'>
  

  <div class="grid">
    <div class="card">
      <div class="option">
<LuAlarmClock />
      </div>
      <h2>Real-Time Home Styling</h2>
      <p>Explore handmade home décor with real-time previews, rotate products, match your style, and bring instant charm and elegance to every corner of your home.</p>
    </div>
    <div class="card">
            <div class="option">
<LuWallet />
      </div>
      <h2>Safe & Secured Payments</h2>
      <p>Enjoy worry-free shopping with secure payment methods, full encryption, and trusted gateways that protect your data and guarantee a smooth, safe checkout experience every time.</p>
    </div>
    <div class="card">
            <div class="option">
<BsHeadset />
      </div>
      <h2>Customer Support 24/7</h2>
      <p>Get the help you need anytime with our friendly support team, available 24/7 to answer questions, solve issues, and make your shopping experience easier.</p>
    </div>
    <div class="card">
            <div class="option">
<BsClipboard2Check />
      </div>
      <h2>Quick & Easy Transaction</h2>
      <p>Experience fast and hassle-free transactions with our smooth checkout process, multiple payment options, and a user-friendly system designed to save you time.</p>
    </div>
    <div class="card">
            <div class="option">
<AiOutlineSafetyCertificate />
      </div>
      <h2>Worldwide Certified</h2>
      <p>Our products meet global quality standards and are certified for safety, durability, and design — trusted by customers around the world for their excellence.</p>
    </div>
    <div class="card">
            <div class="option ">
<FaAnglesDown />
      </div>
      <h2>Lesser Cost</h2>
      <p>Enjoy premium handmade décor without the premium price. We offer high-quality pieces at budget-friendly rates, so you can style your space affordably and beautifully.</p>
    </div>
  </div>
    </div>
  )
}

export default Services