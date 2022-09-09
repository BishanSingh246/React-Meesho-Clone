import React from "react";
// import { useEffect } from "react";
import "./style_after_signin.css";
import After_signin from "./After_signin";
import Navbar_2 from "../Basics/Navbar_2"
// import Content_01 from "../Basics/Content_01";
// import MainCard from "../Basics/MainCard";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../firebase"
// import { useState } from "react";


const S_navbar = () => {
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
                                        <i className="fa-solid fa-mobile-screen"></i>
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

                            <div className="profile-cart navbar-text display-flex">
                                <div className="profile box-01 hover-pink">
                                    <div className="dropdown-02">
                                        <div className="dropdown-btn_2">
                                            <i className="fa-regular fa-user"></i>
                                            <div className="profile-text ">Profile</div>
                                        </div>
                                        <After_signin />
                                    </div>
                                </div>
                                <a href="./Cart" className="cart box-01">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <div className="cart-text ">Cart</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="bottom-border"></div>
                <Navbar_2 />

            </header>
            {/* <Content_01 /> */}
            {/* <MainCard /> */}
        </>
        
    );
};

export default S_navbar;

