import React,{useState} from 'react'
import './navbar.css'
import image from '../../assets/3lines.png'
import images from '../../assets/spoon.png'
function navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='navbar-container'>
      <div className='navbar-section'>
        <div className='navbar-name'>
        <h2 className='navbar-text'>GETMEAL</h2>
        </div>
         <ul className='navbar-list'>
           <li><a href='#Home'>Home</a></li>
           <li><a href='#About'>About</a></li>
           <li><a href='#Menu'>Menu</a></li>
           <li><a href='#Awards'>Awards</a></li>
           <li><a href='#Contact'>Contact</a></li>
         </ul>
          <div className='navbar-section2'>
              <div className='navbar-register'>Login/Register</div>
              <div className='navbar-line'></div>
              <div className='navbar-table'>BOOk Table</div>
          </div>
            
             <div className='navbar-mobile'>
                  
                   <img src={image} className='image' alt='image' onClick={()=>setToggle(true)}/>
                  {toggle &&(

                  <div className='navbar-close slide-bottom'>
                  <img src={images} className='images' alt="images" onClick={()=>setToggle(false)}/>
                  <div className='navbar-section22'>
              <div className='navbar-register'>Login/Register</div>
              
              <div className='navbar-table'>BOOk Table</div>
          </div>

                  <ul className='navbar-lists'>
                  <li><a href='#Home'>Home</a></li>
                 <li><a href='#About'>About</a></li>
                <li><a href='#Menu'>Menu</a></li>
                <li><a href='#Awards'>Awards</a></li>
                <li><a href='#Contact'>Contact</a></li>
         </ul>
                  </div>
                  )}
             </div>


             

      </div>
    </nav>
  )
}

export default navbar
