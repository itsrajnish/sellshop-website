import React from 'react'
import './Footer.css'
import instapic1 from '../assest/in1.webp'
import { GoLocation } from 'react-icons/go'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { SiGooglemessages } from 'react-icons/si'
import { AiFillFacebook, AiFillGooglePlusSquare, AiFillTwitterSquare } from 'react-icons/ai'
import { BsWifi } from 'react-icons/bs'

export const Footer = () => {
    return (
        <>
            <div className='seclast'>

                <div className='demoo'>
                    <div className='news'>
                        <h2>NEWSLATTER</h2>
                        <input type="email" placeholder='enter your email' /><br />
                        <button>Subscribe</button>
                        <div className='icon'>
                            <AiFillFacebook />&nbsp;&nbsp;
                            <AiFillTwitterSquare />&nbsp;&nbsp;
                            <AiFillGooglePlusSquare />&nbsp;&nbsp;
                            <BsWifi />
                        </div>

                    </div>

                    <div className='join'>
                        <h2>GET IN TOUCH</h2>
                        <input type="text" placeholder='Enter your name' /><br />
                        <input type="email" placeholder='Enter your email' /><br />
                        <input type="text" placeholder='Messages' /><br />
                        <button >Send Your Messages</button>

                    </div>
                </div>

            </div>
            <div className='footer'>

                <div className='line1'>
                    <h2>CONTACT US</h2>
                    <GoLocation />&nbsp; Your Location<br />
                    <FaPhoneSquareAlt />&nbsp; Your Contact <br />
                    <SiGooglemessages />&nbsp;&nbsp; Messgaes

                </div>

                <div className="line2">
                    <h2>MY ACCOUNT</h2>
                    <ul>
                        <li>My Account</li>
                        <li>My Wishlist</li>
                        <li>My Cart</li>
                        <li>Sign In</li>
                        <li>Track My Order</li>
                        <li>Sign In</li>
                        <li>Track My Order</li>
                    </ul>


                </div>

                <div className="line3">
                    <h2>SHIPPING</h2>
                    <ul>
                        <li>New Product</li>
                        <li>My Wishlist</li>
                        <li>My Cart</li>
                        <li>Sign In</li>
                        <li>Track My Order</li>
                        <li>Sign In</li>
                        <li>Track My Order</li>
                    </ul>
                </div>

                <div className="line4">
                    <h2>INFORMATION</h2>
                    <ul>
                        <li>New Product</li>
                        <li>My Wishlist</li>
                        <li>My Cart</li>
                        <li>Sign In</li>
                        <li>Track My Order</li>
                        <li>Sign In</li>
                        <li>Track My Order</li>
                    </ul>

                </div>

                <div className="line5">
                    <h2>INSTAGRAM</h2>
                    <img src={instapic1} />&nbsp;
                    <img src={instapic1} />&nbsp;
                    <img src={instapic1} /><br />
                    <img src={instapic1} />&nbsp;
                    <img src={instapic1} />&nbsp;
                    <img src={instapic1} />&nbsp;

                </div>

            </div>

            <hr />







        </>
    )
}
export default Footer