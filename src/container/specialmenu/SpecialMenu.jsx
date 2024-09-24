import React from 'react'
import './SpecialMenu.css'
import {Data} from '../../constants/index.jsx'
import {Menu} from '../../component/index.jsx'
import images from '../../assets/bottle.png'


function SpecialMenu() {
  return (
    <div className='special-container section__padding' id='Menu'>
      <div className='special-sectionA' >
       <p className='special-section1'>Menu That Fits You Palette</p>
       <div className='special-line'></div>
       <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>

      <div className='special-sectionB'>

        <div className='sectionB1'>
        <div className='special-wine'>
           <p className='special-heading'>Wine & Beer</p>
        </div>
        <div className='special-sectionB2'>
        {Data.wines.map((wine,index)=>(
          <Menu key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
        ))} 
          
         
        </div>
        </div>


          <div className='special-image'>
            <img src={images} alt='images'/>
          </div>

         <div className='special-sectionC'>
          <div className='special-juice'>
            <p className='special-heading'>Juices</p>
          </div>

            <div className='special-sectionC2'>
             {Data.juices.map((juice,index)=>(
             <Menu key={juice.title + index} title={juice.title} price={juice.price} tags={juice.tags}/>
             ))}
            </div>

         </div>


      </div>

   <button type='button' className='special-button'>Know More</button>

    </div>
  );
}

export default SpecialMenu
