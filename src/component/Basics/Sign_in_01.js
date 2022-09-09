import React, { Component } from 'react'
import "./style_01.css";
// import app from './firebase';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, } from "firebase/auth";
import { initializeApp } from "firebase/app";



// const Sign_in = () => {

//     // const [number, setNumber] = useState("")

// let handelchange = (e) => {
//     const { name, value } = e.target
//     this.setState({ [name]: value })
// }

// let configurCaptcha = () => {


//     const auth = getAuth();
//     window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//         'size': 'invisible',
//         'callback': (response) => {
//             // reCAPTCHA solved, allow signInWithPhoneNumber.
//             this.onSignInSubmit();
//             console.log("recaptur verified ---------------------------");
//         },
//         defaultCountry: "IN"
//     }, auth);
// }
// let onSignInSubmit = (e) => {
//     e.preventDefault()

//     this.configurCaptcha()

//     const phoneNumber = "+91" + this.state.mobile;
//     console.log(phoneNumber);

//     const appVerifier = window.recaptchaVerifier;

//     const auth = getAuth();
//     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//         .then((confirmationResult) => {
//             // SMS sent. Prompt user to type the code from the message, then sign the
//             // user in with confirmationResult.confirm(code).
//             window.confirmationResult = confirmationResult;
//             console.log('otp has been sent');
//             // ...
//         }).catch((error) => {
//             // Error; SMS not sent
//             // ...
//             console.log('sms not sent');
//         });

// }

//     return (
//         <>
//             <header id="navbar" className="header">
//                 <section className="section-01">
//                     <div className="navbar-01 display-flex">
//                         <div className="logo">
//                             <img src="images/logo.png" alt="" />
//                         </div>
//                         <div className="searchbar-border ">
//                             <div className="search-bar  ">
//                                 <span class="fa-solid fa-magnifying-glass"></span>
//                                 <input type="text" name="search" id="" placeholder="Try Saree, Kurti or Search by Product Code " />
//                             </div>
//                         </div>

//                         <div className="navbar-03 display-flex ">
//                             <div className="download-app navbar-text  center hover-pink">
//                                 <div className="dropdown-01">
//                                     <div className="dropdown-btn display-flex">
//                                         <i class="fa-solid fa-mobile-screen"></i>
//                                         <div className="downloa-app-text ">Download App</div>
//                                     </div>
//                                     <div className="dropdown-content-menu">
//                                         <div className="dropdown-content-menu-text">
//                                             <p>Download From</p>
//                                         </div>
//                                         <div className="dropdown-content-menu-image">
//                                             <div className="dropdown-content-menu-image-00">
//                                                 <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow">
//                                                     <img src="images/container-06-01-02-01.webp" alt="" />
//                                                 </a>
//                                             </div>
//                                             <div className="dropdown-content-menu-image-00">
//                                                 <a href="https://apps.apple.com/us/app/meesho/id1457958492">
//                                                     <img src="images/container-06-01-02-02.webp" alt="" />
//                                                 </a>
//                                             </div>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="right-border"></div>

//                             <div className="supplier center navbar-text">Become a Supplier</div>
//                             <div className="right-border"></div>

//                         </div>
//                     </div>
//                 </section>
//                 <div className="bottom-border"></div>

//             </header>
//             <section>
//                 <div className='signin'>
//                     <div className='signin-01'>
//                         <div className='signin-01-01'>
//                             <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" />
//                         </div>
//                         <div className='signin-01-02'>
//                             <div className='signin-01-02-01'>
//                                 <h6 className='signin-01-02-01-01'>Sign Up to view your profile</h6>
//                                 <form onSubmit={onSignInSubmit}>
//                                     <div className='signin-01-02-01-02'>
//                                         <div className='signin-01-02-01-02-01'>
//                                             <div className='Country'>Country</div>
//                                             <div className='Country-code'>🇮🇳 +91</div>
//                                             <div className='bottom-border'></div>
//                                         </div>
//                                         <div className='signin-01-02-01-02-02' id='sign-in-button'>
//                                             {/* <label htmlFor="true">Phone Number</label> */}
//                                             {/* <input name="mobile" placeholder='Phone Number' type="tel" maxLength="10" autocompleet="off" required onChange={handelchange} /> */}
//                                             <input name="mobile" placeholder='Phone Number' type="tel" maxLength="10" autocompleet="off" required onChange={handelchange} />
//                                         </div>
//                                     </div>
//                                     <button href='./Otp' type='submit' className='signin-01-02-01-button' onChange={handelchange}>
//                                         <a href="./Otp">

//                                             <div>Send OTP</div>
//                                         </a>
//                                     </button>
//                                 </form>

//                             </div>
//                             <div className='term-conditions'>
//                                 <div>By continuing, you agree to Meesho’s </div>
//                                 <a href='https://www.meesho.com/legal/terms-conditions' className='term-01'>Terms & Conditions</a>
//                                 <div className='and'>and</div>
//                                 <a href='https://www.meesho.com/legal/privacy' className='term-01'>Privacy Policy</a>
//                             </div>

//                         </div>

//                     </div>

//                 </div>


//             </section>
//         </>
//     )
// }
// export default Sign_in

const firebaseConfig = {
    apiKey: "AIzaSyBsQ8IWKR6gHAHOaecGCjVzi8OxfMttoNI",
    authDomain: "meesho-clone.firebaseapp.com",
    projectId: "meesho-clone",
    storageBucket: "meesho-clone.appspot.com",
    messagingSenderId: "646967374595",
    appId: "1:646967374595:web:a36abdcfe187a1ad872f36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export class Sign_in extends React.Component {


    handelchange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    configurCaptcha = () => {
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                this.onSignInSubmit();
                console.log("recaptur verified ---------------------------");
            },
            defaultCountry: "IN"
        }, auth);
    }
    onSignInSubmit = (e) => {
        e.preventDefault()

        this.configurCaptcha()

        const phoneNumber = "+91" + this.state.mobile;
        console.log(phoneNumber);

        const appVerifier = window.recaptchaVerifier;

        const auth = getAuth();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                alert('otp has been sent');
                // ...

            }).catch((error) => {
                // Error; SMS not sent
                // ...
                alert('sms not sent');
            });

    }
    onSubmitOTP = (e) => {
        e.preventDefault()
        const code = this.state.otp;
        console.log(code);
        window.confirmationResult.confirm(code).then((result) => {
            // const user = result.user;
            // console.log(JSON.stringify(user));
            alert('User is Verified')
            window.location.href = "user"
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
        });
    }
    render() {
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
                                    <form onSubmit={this.onSignInSubmit} >
                                        <div className='signin-01-02-01-02'>
                                            <div className='signin-01-02-01-02-01'>
                                                <div className='Country'>Country</div>
                                                <div className='Country-code'>🇮🇳 +91</div>
                                                <div className='bottom-border'></div>
                                            </div>
                                            <div className='signin-01-02-01-02-02' >
                                                {/* <label htmlFor="true">Phone Number</label> */}
                                                <input name="mobile" placeholder='Phone Number' type="tel" maxLength="10" onChange={this.handelchange} />
                                            </div>
                                        </div>
                                        <div id='sign-in-button'></div>
                                        <button type='submit' className='signin-01-02-01-button' >
                                            {/* <a href="./Otp"> */}
                                            <div>Send OTP</div>
                                            {/* </a> */}
                                        </button>

                                    </form>
                                    <form onSubmit={this.onSubmitOTP} >
                                        <div className='signin-01-02-01-02-02 otp' id='sign-in-button'>
                                            <input name="otp" placeholder='Enter OTP' type="tel" maxLength="6" onChange={this.handelchange} />
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
}

export default Sign_in;
