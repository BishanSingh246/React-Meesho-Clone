import React from 'react'
import { useState } from "react";
import Menu from './cardapi';


const Card = () => {

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

// const Card = () => {

//     const [fake, setFake] = useState([]);
//     console.log(fake);
//     useEffect(() => {
//         fakestore();
//     }, []);


//     const fakestore = async () => {
//         const response = await fetch("https://fakestoreapi.com/products")
//         // console.log(response ); 
//         const jsonData = await response.json();
//         // console.log(jsonData);
//         setFake(jsonData);

//     }

//     return (

//         <>
//             <section className='card-container'>
//                 {
//                     fake.map((values) => {
//                         return (
//                             <>
//                                 <div className='card-container-01'>
//                                     <div className='card-container-01-01'>
//                                         <div className='card-container-01-image'>
//                                             <img src={values.image} alt="image" className='img-fff' />
//                                         </div>
//                                         <div className='card-container-01-cardbody'>
//                                             <p className='card-name'>{values.title}</p>
//                                             <div className='card-price-tag text-edit'>
//                                                 <p className='card-price '>$291</p>
//                                                 <p className='card-price-cost'>onwards</p>
//                                             </div>
//                                             <div className='dilivery-0'>
//                                                 <p className='card-delivery text-edit'>Free Delivery</p>
//                                             </div>
//                                             <div className='rating-review text-edit'>
//                                                 <div className='rev-rat'>
//                                                     <div className='rating'>3.7*</div>
//                                                     <div className='review'>15155 reviews</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </>

//                         )
//                     })
//                 }
//                 {/* <div className='card-container-01'>
//                     <div className='card-container-01-01'>
//                         <div className='card-container-01-image'>
//                             <img src="https://images.meesho.com/images/products/75625690/udzgp_512.webp" alt="image" className='img-fff' />
//                         </div>
//                         <div className='card-container-01-cardbody'>
//                             <p className='card-name'>Aakaesha Graceful Kurtis</p>
//                             <div className='card-price-tag text-edit'>
//                                 <p className='card-price '>$291</p>
//                                 <p className='card-price-cost'>onwards</p>
//                             </div>
//                             <div className='dilivery-0'>
//                                 <p className='card-delivery text-edit'>Free Delivery</p>
//                             </div>
//                             <div className='rating-review text-edit'>
//                                 <div className='rev-rat'>
//                                     <span className='rating'>3.7*</span>
//                                     <span className='review'>15155 reviews</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div> */}
                

//             </section>
//         </>

//     )
// }

export default Card
