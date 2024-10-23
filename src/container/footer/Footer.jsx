import React from 'react'
import './Footer.css'
import image1 from '../../assets/facebook.png'
import image2 from '../../assets/twitter.png'
import image3 from '../../assets/instagram.png'
function Footer() {
  return (
    <div className='footer-container section__padding'>
      <div className='footer-sectionA'>
           <h1 className='footer-text'>Newsletter</h1>
           <p className='footer-line'></p>
           <h1 className='footer-subscribe headtext__cormorant'>Subscribe To Our Newsletter</h1>
           <p className='footer-update p__opensans'>And Never Miss Latest Updates!</p>
           <div className='footer-input flex__center'>
           <input type='email' placeholder='enter your email address'/>
           <button className='footer-button'>Subscribe</button>
           </div>
      </div>
      <div className='footer-sectionB'>
         <div className='footer-sectionB1'>
        <p className='footer-contact'>Contact Us</p>
        <p className='footer-address'>9w 53rd St,New York,NY 10019,USA</p>
        <p className='footer-number'>+1 212-344-1240</p>
        <p className='footer-number'>+1 212-555-1230</p>
         </div>
         
         <div className='footer-sectionB2'>
           <h1 className='footer-bold'>GERICHT</h1>
           <p className='footer-best'>The Best Way To Find Yourself is To Lose Yourself in The Service Of Others</p>
           <p className='footer-draw'></p>
           <div className='footer-icons'>
           <img src={image1} alt='image'/>
           <img src={image2} alt='image'/>
           <img src={image3} alt='image'/>
           </div>
            
         </div>

         <div className='footer-sectionB3'>
         <h1 className='footer-working'>Working Hours</h1>
         <p className='footer-days'>Monday-Friday</p>
         <p className='footer-times'>08:00Am-12:00Am</p>
         <p className='footer-days'>Saturday-Sunday</p>
         <p className='footer-times'>07:00Am-11:00Pm</p>

         </div>



      </div>

      <div className='footer-copyright'>
         <p className='copyright'>2021 Gericht All Rights Reserved</p>
      </div>


    </div>
  )
}

export default Footer
