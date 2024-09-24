import React from 'react'
import './find.css'
import image from '../../assets/types.png'
function Find() {
  return (
    <div className='find-container section__padding' id='Contact'>
     <div className='find-sectionA'>
        <p className='find-text'>Contact</p>
        <p className='find-line'></p>
        <h1 className='find-us headtext__cormorant'>Find Us</h1>
        <div className='find-sectionB'>
        <p className='find-lane p__opensans'>Lane Ends Bungalow.Whatcraft Hall Lane,Rudhealth,CW975G</p>
        <p className='find-hour p__cormorant'>Opening Hours</p>
        <p className='find-date p__opensans'>Mon - Fri: 10:00am - 02:00am</p>
        <p className='find-date p__opensans'>Sat - Sun: 10:00am - 03:00am</p>
        <button className='find-button'>Visit Us</button>
        </div>
     </div>
     <div className='find-sectionC'>
     <img src={image} alt='image'/>
     </div>
    </div>
  )
}

export default Find
