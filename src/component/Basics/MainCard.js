import React from 'react'
import Card from './Card'
import Card_1 from './Card_1'

const MainCard = () => {
  return (
    <>
      <section>
        <div className='maincard-container'>
          <div className='maincard-container-01'>Products for you</div>
          <div className='maincard-container-02'>
            <div className='maincard-container-02-01'>
              <div className='maincard-container-02-01-01'>
                <ul className='maincard-container-02-01-01-ul'>
                  <li className='maincard-container-02-01-01-ul-li'>
                    <div className='maincard-container-02-01-01-ul-li-01'>
                      <div className='maincard-container-02-01-01-ul-li-01-01'>
                        <div><p>Sort by :</p></div>
                        <p>Relevance</p>
                        <div><i class="fa-solid fa-angle-down"></i></div>
                      </div>

                    </div>
                    <div className='maincard-container-02-01-01-ul-li-02'>
                      {/* put ancor tag here  */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className='maincard-container-02-02'>
              <Card />
              {/* <Card_1/> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainCard
