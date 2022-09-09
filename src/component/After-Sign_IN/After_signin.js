import React from 'react';
import "./style_after_signin.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from 'react';

const After_signin = () => {
    const [currentUser, setCurrentUser] = useState()
    const navigate = useNavigate();

    function logOut() {
        return signOut(auth).then(() => {
            alert('Sign-out successful')
            navigate("/");
            // Sign-out successful.
        }).catch((error) => {
            alert('An error happened while sigining out')
            // An error happened.
        });
    }

    function myOrder(){
        return navigate("my_orders");
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
    },[])

   
    return (
        <>
            <div className="dropdown-content-menu_2">
                <div className='aftersigin-div'>

                    <div className='aftersignin'>
                        <img src="images/blank-profile-picture.png" alt="" />
                        <div className='aftersignin-01'>
                            
                            <div className='aftersignin-01-01'>Hello User</div>

                            {currentUser &&<div className='aftersignin-01-02'>{currentUser.phoneNumber}</div>}
                            {/* <div className='aftersignin-01-02'>+918630200470</div> */}
                        </div>
                    </div>
                    <div className="bottom-border"></div>
                    {/* <button onClick={myOrder} className='myorders'>
                        <i class="fa-solid fa-bag-shopping"></i>
                        <div className='myorders-text'>My Orders</div>
                    </button> */}
                    <a className='myorders' href='my_orders'>
                        <i class="fa-solid fa-bag-shopping"></i>
                        <div className='myorders-text'>My Orders</div>
                    </a>
                    <div className="bottom-border"></div>

                    <button on onClick={logOut} className='logout' >
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        <div className='logout-text'>Logout</div>
                    </button>

                </div>

            </div>
        </>
    )
}

export default After_signin
