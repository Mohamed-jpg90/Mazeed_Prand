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
      <h2>Real Time Problem Solution</h2>
      <p>Build your beautiful agency website with us that converts more visitors than any other website and the ability to interact and rotate products to solve user problems.</p>
    </div>
    <div class="card">
            <div class="option">
<LuWallet />
      </div>
      <h2>Safe & Secured Payments</h2>
      <p>Build your beautiful agency website with us that converts more visitors than any other website and the ability to interact and rotate products to solve user problems.</p>
    </div>
    <div class="card">
            <div class="option">
<BsHeadset />
      </div>
      <h2>Customer Support 24/7</h2>
      <p>Build your beautiful agency website with us that converts more visitors than any other website and the ability to interact and rotate products to solve user problems.</p>
    </div>
    <div class="card">
            <div class="option">
<BsClipboard2Check />
      </div>
      <h2>Quick & Easy Transaction</h2>
      <p>Build your beautiful agency website with us that converts more visitors than any other website and the ability to interact and rotate products to solve user problems.</p>
    </div>
    <div class="card">
            <div class="option">
<AiOutlineSafetyCertificate />
      </div>
      <h2>Worldwide Certified</h2>
      <p>Build your beautiful agency website with us that converts more visitors than any other website and the ability to interact and rotate products to solve user problems.</p>
    </div>
    <div class="card">
            <div class="option ">
<FaAnglesDown />
      </div>
      <h2>Lesser Cost</h2>
      <p>Build your beautiful agency website with us that converts more visitors than any other website and the ability to interact and rotate products to solve user problems.</p>
    </div>
  </div>
    </div>
  )
}

export default Services