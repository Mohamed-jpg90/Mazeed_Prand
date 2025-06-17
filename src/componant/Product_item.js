import React from 'react'
import './Product_item.css'
import { IoMdArrowRoundForward } from "react-icons/io";
function Product_item(props) {
    return (
        <div>

            <div class="container">
                <div className="card">
                    <div className="card-inner1" style={{ "--clr": "#fff" }}>

                        <div className="box">
                            <div className="imgBox">
                                <img src={props.img__1} alt="Trust & Co." className='img___1' />
                                <img src={props.img__2} alt="Trust & Co." className='img___2' />
                            </div>
                            <div className="icon">
                                <a href="#" className="iconBox"> <span className="material-symbols-outlined">
                              {/* <IoMdArrowRoundForward /> */}

                              {props.price}
                                </span></a>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h3>trust &amp; co.</h3>
                        <p>Fill out the form and the algorithm will offer the right team of experts</p>
                        <ul>
                            <li style={{"--clr-tag":"#d3b19a"}} className="branding">branding</li>
                            <li style={{"--clr-tag":"#70b3b1"}} className="packaging">packaging</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Product_item