import React from 'react'
import "./style_Cart.css"

const Cart = () => {
  return (
    <>
      <header id="cart-navbar" className="header">
        <section className="cart-section-01">
          <div className="cart-navbar">
            <div className="logo">
              <img src="images/logo.png" alt="" />
            </div>
            <div className='steps'>

            </div>
          </div>
          <div className='cart-body'>
            <div className='cart-items'>
              <div className='cart-item-01'>
                <div className='cart-item-01-01'>
                  <div className='card-title'>
                    <div className='title'>Cart</div>
                    <div className='right-border'></div>
                    <div className='count-items'> Item</div>

                  </div>
                  <div className="cart-details">
                    <div className='top-bottom-border'></div>
                    <div className='cart-details-01'>
                      <div className="cart-image"></div>
                      <div className="details">
                        <div className='name'>
                          <div className='name-div'>Fancy Designer Men Tshirts</div>
                          <div className='edit'>
                            <button className='edit-button'>Edit</button>
                          </div>
                        </div>
                        <div className='size'>
                          <p className='size-01'>Size: </p>
                          <div className='size-circle'></div>
                          <p className='size-02'>Qty: 1</p>


                        </div>
                        <div className='cart-price'>rs 250</div>
                        <div className='remove'>
                          <div className="remove-icon fa-sharp fa-solid fa-xmark"></div>
                          <button className='remove-button'>Remove</button>
                        </div>
                      </div>

                    </div>
                    <div className='top-bottom-border'></div>
                    <div className='cart-details-02'>
                      <p className='cart-details-02-p01'>Supplier : abcd</p>
                      <p className='cart-details-02-p02'>Free Delivery</p>
                    </div>

                  </div>
                </div>
                <div className='cart-item-01-02'>
                  <div className='right-border'></div>
                  <div className='price-details'>
                    <div className='price-details-01'>
                      <div className='price-details-01-01'>
                        <p>Price Details</p>
                        <div className='price-details-01-01-01'>
                          <div className='price-details-01-01-01-01'>
                            <p>Total Product Price</p>
                            <div>rs 250</div>
                          </div>
                        </div>
                        <div className='price-details-01-01-bottom-border'></div>
                        <div className='price-details-01-01-02'>
                          <div className='price-details-01-01-02-01'>
                            <p>Order Total</p>
                            <div>rs 250</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='continue'>
                      <div className='continue-p'>
                        <p>Clicking on ‘Continue’ will not deduct any money</p>
                      </div>
                      <div className='continue-button'>
                        <button>Continue</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        <div className="bottom-border"></div>


      </header>
    </>
  )
}

export default Cart
