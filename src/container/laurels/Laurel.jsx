import React from 'react'
import './Laurel.css'
import image from '../../assets/flag3.png'

function Laurel() {
  return (
    <div className='laurel-container' id='Awards'>
      
      <div className='laurel-sectionA'>
       <h3 className='laurel-sectionA1'>Awards & Recognition</h3>
       <div className='laurel-dash'></div>
       <h1 className='laurel-sectionA2'>Our Laurels</h1>

      <div className='laurel-sectionB'>
 
       <div className='laurel-sectionB1'>
       <p className='laurel-figure'>1</p>
       <div className='laurel-sectionB2'>
          <p className='laurel-name'>Bib Gourmond</p>
          <p className='laurel-title'>Lorem ipsum dolor sit amet, consectetur.</p>
       </div>
       </div>

       <div className='laurel-sectionB1'>
       <p className='laurel-figure'>2</p>
       <div className='laurel-sectionB2'>
          <p className='laurel-name'>Rising Star</p>
          <p className='laurel-title'>Lorem ipsum dolor sit amet, consectetur.</p>
       </div>
       </div>

       <div className='laurel-sectionB1'>
       <p className='laurel-figure'>3</p>
       <div className='laurel-sectionB2'>
          <p className='laurel-name'>AA Hospitality</p>
          <p className='laurel-title'>Lorem ipsum dolor sit amet, consectetur.</p>
       </div>
       </div>

       <div className='laurel-sectionB1'>
       <p className='laurel-figure'>4</p>
       <div className='laurel-sectionB2'>
          <p className='laurel-name'>Outstanding Chef</p>
          <p className='laurel-title'>Lorem ipsum dolor sit amet, consectetur.</p>
       </div>
       </div>



      </div>





      </div>




<div className='laurel-sectionC'>
   <h1 className='laurel-sectionC1'>G</h1>
   <div className='laurel-image'>
<img src={image} alt='image'/>
   </div>
</div>




    </div>
  )
}

export default Laurel
