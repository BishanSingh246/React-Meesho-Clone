// import React from 'react'
import "./style_otp.css";

import React, { Component } from 'react'

export class Otp extends Component {

    
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
                                <h6 className='signin-01-02-01-01'>Enter OTP send to
                                </h6>
                                <a href='./Sign_in' className='change-number'>Change Number</a>
                                <div className='type-otp'>
                                    
                                    <input  className='otp-input' type="tel" value="" pattern='^[0-9]*$' width='1928'  />
                                    <input  className='otp-input' type="tel" value="" pattern='^[0-9]*$' width='1928'  />
                                    <input  className='otp-input' type="tel" value="" pattern='^[0-9]*$' width='1928'  />
                                    <input  className='otp-input' type="tel" value="" pattern='^[0-9]*$' width='1928'  />
                                    <input  className='otp-input' type="tel" value="" pattern='^[0-9]*$' width='1928'  />
                                    <input  className='otp-input' type="tel" value="" pattern='^[0-9]*$' width='1928'  />
                                </div>
                                <div className='resend-div'>

                                <a href='#' className='resend-otp'>Resend OTP</a>
                                </div>
                                <button className='verify-button'>
                                    <div className='verify-button-div'>Verify</div>
                                </button>



                            </div>
                            {/* <div className='term-conditions'>
                                <div>By continuing, you agree to Meesho’s </div>
                                <a href='https://www.meesho.com/legal/terms-conditions' className='term-01'>Terms & Conditions</a>
                                <div className='and'>and</div>
                                <a href='https://www.meesho.com/legal/privacy' className='term-01'>Privacy Policy</a>
                            </div> */}

                        </div>

                    </div>

                </div>


            </section> 
      </>
    )
  }
}

export default Otp


// const Otp = () => {
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
//                                 <h6 className='signin-01-02-01-01'>Enter OTP send to
//                                 </h6>
//                                 <a href='./Sign_in' className='change-number'>Change Number</a>
//                                 <div className='type-otp'>
//                                     <input onChange={handelchange} className='otp-input' type="tel" value="" pattern='^[0-9]*$' width='1928'  />
//                                     <input onChange={handelchange} className='otp-input' type="tel" value="" pattern='^[0-9]*$' width='1928'  />
//                                     <input onChange={handelchange} className='otp-input' type="tel" value="" pattern='^[0-9]*$' width='1928'  />
//                                     <input onChange={handelchange} className='otp-input' type="tel" value="" pattern='^[0-9]*$' width='1928'  />
//                                     <input onChange={handelchange} className='otp-input' type="tel" value="" pattern='^[0-9]*$' width='1928'  />
//                                     <input onChange={handelchange} className='otp-input' type="tel" value="" pattern='^[0-9]*$' width='1928'  />
//                                 </div>
//                                 <div className='resend-div'>

//                                 <a href='#' className='resend-otp'>Resend OTP</a>
//                                 </div>
//                                 <button className='verify-button'>
//                                     <div className='verify-button-div'>Verify</div>
//                                 </button>



//                             </div>
//                             {/* <div className='term-conditions'>
//                                 <div>By continuing, you agree to Meesho’s </div>
//                                 <a href='https://www.meesho.com/legal/terms-conditions' className='term-01'>Terms & Conditions</a>
//                                 <div className='and'>and</div>
//                                 <a href='https://www.meesho.com/legal/privacy' className='term-01'>Privacy Policy</a>
//                             </div> */}

//                         </div>

//                     </div>

//                 </div>


//             </section>
//         </>
//     )
// }

// export default Otp;
