import React from 'react'

const Before_signin = () => {
    return (
        <>
            <div className="dropdown-content-menu_2">
                <div className="dropdown-content-menu-text_2">
                    <h5>Hellow User</h5>
                    <p>To access your Meesho account</p>
                </div>
                <div className="dropdown-content-menu-a">
                    <div className="dropdown-content-menu-a-00">
                        <a href="./Sign_in" >
                            <h5>Sign Up</h5>
                        </a>
                    </div>
                    <div className="bottom-border"></div>
                    <div className="dropdown-content-menu-a-01">
                        <a href="./Sign_in">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <h5>My Orders</h5>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Before_signin
