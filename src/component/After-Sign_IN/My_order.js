import React from 'react'
import S_navbar from './S_inNavbar'
import "./style_myorder.css";

const My_order = () => {
  return (
    <>
      <S_navbar />
      <section>
        <div className='myorder-container'>

          <div className='image'>
            <img src="images/my order image.jpg" alt="" />
          </div>
          <div className='myorder-container-text'>Track Orders on App</div>
          <div className='myorder-container-text2'>Download the Meesho App to track your orders</div>
          <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow">
            <button className='button'>

              Download Meesho App
            </button>
          </a>
        </div>
      </section>
    </>
  )
}

export default My_order
