import React, {useState,useRef} from 'react'
import './Intro.css'
import video from '../../assets/videoss.mp4'
import image from '../../assets/pause.png'
import images from '../../assets/play2.png'
function Intro() {
  const Vidref = useRef();
  const [playVideo, setPlayVideo] = useState(false);

const handleVideo = ()=>{
  setPlayVideo((prevplayVideo)=>!prevplayVideo)
  if(playVideo){
    Vidref.current.pause()
   }
  else{
    Vidref.current.play()
  }
}


  return (
    <div className='intro-container'>
   <video src={video} ref={Vidref} type="videoss/mp4" loop controls={false} muted/>
         <div className='app-video'>
        <div className='intro-key' onClick={handleVideo}>
      {playVideo? <img src={image} alt='image'/>:<img src={images} alt='images'/>}
        </div>
    </div>
    </div>
  );
}

export default Intro
