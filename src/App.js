// import React,{useState,useEffect} from "react";
import React from "react";
import Meesho from "./component/Basics/Meesho";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_in from "./component/Basics/Sign_in";
import Cart from "./component/After-Sign_IN/Cart/Cart";
import Otp from "./component/Basics/Otp";
import S_inNavbar from "../src/component/After-Sign_IN/S_inNavbar"
import My_order from "./component/After-Sign_IN/My_order";
import Sign_in_User from "./component/After-Sign_IN/Sign_in_User";

const App = () => {


  return (

    <BrowserRouter>
      <Routes>
        {/* <Route path="/user" element={<S_inNavbar />}>

        </Route> */}
        <Route path="my_orders" element={<My_order />} />
        <Route path="/user" element={<Sign_in_User />} />
        <Route path="/" element={<Meesho />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}

          {/* <Route path="*" element={<NoPage />} />  */}
        </Route>
        <Route path="sign_in" element={<Sign_in />} />
        <Route path="otp" element={<Otp />} />
        <Route path="Cart" element={<Cart />} />
        {/* <Route path="user" element={<S_inNavbar />} /> */}
      </Routes>
    </BrowserRouter>


  )
};

export default App;