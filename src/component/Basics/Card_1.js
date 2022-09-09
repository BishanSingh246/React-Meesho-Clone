import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
// import axios from 'axios';
import Menu from './cardapi';

const Card_1 = () => {
    const [menuData, setMenuDaata] = useState(Menu)
    return (

        <>
            <section className='card-container'>
                {
                    menuData.map((values) => {
                        return (
                            <>
                                <div className='card-container-01'>
                                    <div className='card-container-01-01'>
                                        <div className='card-container-01-image'>
                                            <img src={values.image} alt="image" className='img-fff' />
                                        </div>
                                        <div className='card-container-01-cardbody'>
                                            <p className='card-name'>{values.title}</p>
                                            <div className='card-price-tag text-edit'>
                                                <p className='card-price '>{values.price}</p>
                                                <p className='card-price-cost'>onwards</p>
                                            </div>
                                            <div className='dilivery-0'>
                                                <p className='card-delivery text-edit'>{values.dilivery}</p>
                                            </div>
                                            <div className='rating-review text-edit'>
                                                <div className='rev-rat'>
                                                    <div className='rating'>{values.rating}</div>
                                                    <div className='review'>{values.review}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }


            </section>
        </>

    )
}

export default Card_1
