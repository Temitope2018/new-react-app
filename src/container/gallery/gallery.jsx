import React from 'react'
import './Gallery.css'
import image1 from '../../assets/food1.png'
import image2 from '../../assets/food2.png'
import image3 from '../../assets/food3.png'
import image4 from '../../assets/food4.png'
import image5 from '../../assets/instagram.png'

function gallery() {
  
  return (
    <div className='gallery-container flex__center'>
    <div className='gallery-content'>
      <h1 className='gallery-text'>Instagram</h1>
      <p className='gallery-line'></p>
      <h1 className='gallery-sectionA headtext__cormorant'>Photo Gallery</h1>
      <p className='gallery-lorem p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae neque repellendus, sequi nulla adipisci omnis laboriosam eveniet officia cupiditate, culpa sit saepe atque magnam. Quasi dignissimos vitae quis voluptatibus iusto.</p>
      <button type='button' className='gallery-button' style={{marginTop:10}}>View More</button>
      </div> 
     
     <div className='gallery-images'>
        <div className='gallery-images1'>
         <div className='gallery-listimages flex__center'>
         <img src={image1} className='image133'/>
         <img src={image2} className='image133'/>
         <img src={image3} className='image133'/>
         <img src={image4} className='image133'/>
         <img src={image5} className='gallery-icon'/>
         </div>
        </div>

        
          
     </div>




    </div>
  )
}

export default gallery
