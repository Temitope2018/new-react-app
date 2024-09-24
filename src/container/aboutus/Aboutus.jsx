import React from "react";
import './Aboutus.css'
import image from '../../assets/id.png'
import images from '../../assets/inner.png'
function Aboutus(){
return(
    <div className="about-container app__bg flex__center section__padding" id="About">
        <div className="about-sectionA flex__center">
          <img src={image} className="about-image1" alt="images"/>
        </div>

        <div className="about-sectionB">
         <div className="about-sectionB1">
          <h1 className="headtext__cormorant">About Us</h1>
          <div className="about-line"></div>
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident maxime ullam voluptate cum quasi facere suscipit perspiciatis inventore, minima dicta illum illo fugiat fugit fuga eos autem consequuntur. Animi!</p>
          <button type="button" className="about-button">Know More</button>
         </div>

        <div className="about-sectionB2 flex__center">
         <img src={images} alt="images"/>
        </div>

         <div className="about-sectionB11">
         <h1 className="headtext__cormorant">our History</h1>
          <div className="about-line"></div>
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident maxime ullam voluptate cum quasi facere suscipit perspiciatis inventore, minima dicta illum illo fugiat fugit fuga eos autem consequuntur. Animi!</p>
          <button type="button" className="about-button">Know More</button>
 
         </div>

        </div>

    </div>
);

}
export default Aboutus