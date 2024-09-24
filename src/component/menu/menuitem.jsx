import React from 'react'
import './menuitem.css'
function menuitem({title,price,tags}) {
  return (
    <div className='menuitem-container'>
      <div className='menuitem-sectionA'>

      <div className='menuitem-title'>
       <p className='p__cormorant'>{title}</p>
      </div>
      <div className='break'>
    <div className='menuitem-dash'></div>

<div className='menuitem-price'>
    <p className='p__cormorant'>{price}</p>
</div>

</div>

      </div>


<div className='menuitem-tag'>
<p className='p__opensans'>{tags}</p>
</div>





    </div>
  );
}

export default menuitem
