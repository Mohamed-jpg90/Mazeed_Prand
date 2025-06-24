import React from 'react'
import './Product_item.css'
import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward } from "react-icons/io";

function Product_item(props) {
    return (
        <div>
            <div className="container66">
                <div className="card66">
                    <div className="card-inner166" style={{ "--clr": "#fff" }}>


            <Link to={props.direction} className='link_of_product'>

                        <div className="box66">
                            <div className="imgBox66">
                                <img src={props.img__1} alt="Trust & Co." className="img___166" />
                                <img src={props.img__2} alt="Trust & Co." className="img___266" />
                            </div>
                            <div className="icon66">
                                <a href="#" className="iconBox66">
                                 <span className="material-symbols-outlined66">
                                        {props.price}
                                    </span>
                                </a>
                            </div>
                        </div>

  </Link>

                    </div>
                    <div className="content66"style={{ textDecoration: "none" }}>
                        <h3  > {props.discripe} </h3>
                        <p>You can change the pieces or colors and add your name if it fits the space.</p>
                        <ul>
                            <li style={{ "--clr-tag": "#d3b19a" }} className="branding66">branding</li>
                            <li style={{ "--clr-tag": "#70b3b1" }} className="packaging66">packaging</li>
                        </ul>
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default Product_item
