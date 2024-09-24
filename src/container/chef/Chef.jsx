import React from 'react'
import './Chef.css'
import image from '../../assets/chef.png'
import images from '../../assets/quote.png'

function Chef() {
  return (
    <div className='chef-container'>

      <div className='chef-image'>
        <img src={image} alt='image'/>
      </div>

   <div className='chef-section'>
      <p className='chef-text'>Chef's Word</p>
      <div className='chef-dash'></div>
      <h1 className='headtext__cormorant'>What We Beleive In</h1>
      <div className='chef-section1'>
       <img src={images} alt='image'/>
       <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore unde, Magnam,veritatis suscipit.</p>
      </div>

      <p className='chef-text2 p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, in obcaecati veritatis suscipit delectus ab perspiciatis atque itaque harum fugiat, sint eligendi, culpa sit quod nisi a velit maiores. Consectetur.</p>
       <p className='chef-title p__opensans'>Akpan Leo</p>
            
       <p className=' chef-text3 p__opensans'>Chef & Founder</p> 
       <p className='chef-signature'>Akpan Leo</p>     
   </div>




    </div>
  )
}

export default Chef
