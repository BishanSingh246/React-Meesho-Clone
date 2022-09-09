import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import "./style_01.css";
import {  RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from 'react';
import { auth } from "../../firebase"



const SignIn = () => {
    const [error, setError] = useState("");
    const [number, setNumber] = useState("");
    const [flag, setFlag] = useState(false);
    const [otp, setOtp] = useState("");
    const [result, setResult] = useState("");
    // const { setUpRecaptha } = useUserAuth();
    const navigate = useNavigate();

    function setUpRecaptha(number) {
        const recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // getOtp();
            }
        }, auth);
        return signInWithPhoneNumber(auth, number, recaptchaVerifier);
    }


    const getOtp = async (e) => {
        if (e && e.preventDefault) { e.preventDefault(); }
        console.log(number);
        
        if (number === "" || number === undefined)
            return setError("Please enter a valid phone number!");
        try {
            const response = await setUpRecaptha(number);
            setResult(response);
            alert('Otp Sended')
            setFlag(true);
        } catch (err) {
    
            alert('Error in Sending Otp')
        }
    };

    const verifyOtp = async (e) => {
        if (e && e.preventDefault) { e.preventDefault(); }
        setError("");
        if (otp === "" || otp === null) return;
        try {
            await result.confirm(otp);
            navigate("/user");
            alert('User Sign in sucessfull')
        } catch (err) {
            setError(err.message);
            alert('Error in Sign in ')
        }
    };

    return (
        <>
            <header id="navbar" className="header">
                <section className="section-01">
                    <div className="navbar-01 display-flex">
                        <div className="logo">
                            <img src="images/logo.png" alt="" />
                        </div>
                        <div className="searchbar-border ">
                            <div className="search-bar  ">
                                <span class="fa-solid fa-magnifying-glass"></span>
                                <input type="text" name="search" id="" placeholder="Try Saree, Kurti or Search by Product Code " />
                            </div>
                        </div>

                        <div className="navbar-03 display-flex ">
                            <div className="download-app navbar-text  center hover-pink">
                                <div className="dropdown-01">
                                    <div className="dropdown-btn display-flex">
                                        <i class="fa-solid fa-mobile-screen"></i>
                                        <div className="downloa-app-text ">Download App</div>
                                    </div>
                                    <div className="dropdown-content-menu">
                                        <div className="dropdown-content-menu-text">
                                            <p>Download From</p>
                                        </div>
                                        <div className="dropdown-content-menu-image">
                                            <div className="dropdown-content-menu-image-00">
                                                <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow">
                                                    <img src="images/container-06-01-02-01.webp" alt="" />
                                                </a>
                                            </div>
                                            <div className="dropdown-content-menu-image-00">
                                                <a href="https://apps.apple.com/us/app/meesho/id1457958492">
                                                    <img src="images/container-06-01-02-02.webp" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="right-border"></div>

                            <div className="supplier center navbar-text">Become a Supplier</div>
                            <div className="right-border"></div>

                        </div>
                    </div>
                </section>
                <div className="bottom-border"></div>

            </header>
            <section>
                <div className='signin'>
                    <div className='signin-01'>
                        <div className='signin-01-01'>
                            <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" />
                        </div>
                        <div className='signin-01-02'>
                            <div className='signin-01-02-01'>
                                <h6 className='signin-01-02-01-01'>Sign Up to view your profile</h6>
                                <form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
                                    <div className='signin-01-02-01-02'>
                                        <div className='signin-01-02-01-02-01'>
                                            <div className='Country'>Country</div>
                                            <div className='Country-code'>🇮🇳 +91</div>
                                            <div className='bottom-border'></div>
                                        </div>
                                        <div className='signin-01-02-01-02-02' >
                                            <PhoneInput
                                                placeholder="Enter phone number"
                                                value={number}
                                                defaultCountry="IN"
                                                onChange={setNumber} />
                                            {/* <input name="mobile" placeholder='Enter Phone Number' type="tel" maxLength="10" value={number} onChange={setNumber} /> */}
                                        </div>
                                    </div>
                                    <div id='sign-in-button'></div>
                                    <button type='submit' className='signin-01-02-01-button' >
                                        {/* <a href="./Otp"> */}
                                        <div>Send OTP</div>
                                        {/* </a> */}
                                    </button>

                                </form>
                                <form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
                                    <div className='signin-01-02-01-02-02 otp' id='sign-in-button'>
                                        <input name="otp" placeholder='Enter OTP' type="tel" maxLength="6" onChange={(e) => setOtp(e.target.value)} />
                                    </div>

                                    <button type='submit' className='signin-01-02-01-button'>

                                        <div>Submit</div>

                                    </button>
                                </form>


                            </div>
                            <div className='term-conditions'>
                                <div>By continuing, you agree to Meesho’s </div>
                                <a href='https://www.meesho.com/legal/terms-conditions' className='term-01'>Terms & Conditions</a>
                                <div className='and'>and</div>
                                <a href='https://www.meesho.com/legal/privacy' className='term-01'>Privacy Policy</a>
                            </div>

                        </div>

                    </div>

                </div>


            </section>
        </>
    )
}
export default SignIn



