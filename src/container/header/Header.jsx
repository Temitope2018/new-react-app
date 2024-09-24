import React from 'react'
import './Header.css'
import image from '../../assets/kitchenspoon.png'
import photo from '../../assets/download.png'
function Header() {
  return (
    <div className='header-container' id='Home'>
         <p className='header-section1'>Chase The New Flavour</p>
          <img src={image} className='image1' alt='image'/>
          <div className='header-sectionA'>
            <div className='header-sectionA1'>
           <h1 className='header-text'>THE KEY TO FINE DINING</h1>
           <p className='header-text1'>Sit Tellus Lobortis Sed Senectus Vivamus Molestie.Condimentum Volutpat Morbi Facilisis Quam Sceierisque Sapien.Et,Penatibus Aliquam Amet Tellus</p>
           <button type='button'>Explore Menu</button>
           </div>
           <div className='header-image'>
           <img src={photo} alt='image'/>
           </div>
          </div>
    </div>
  );
}

export default Header
