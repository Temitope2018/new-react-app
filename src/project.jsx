import React from "react";
import './App.css';
import { AboutUs,Chef,Find,Footer,Gallery,Header,Intro,Laurels,SpecialMenu } from "./container/index.jsx";
import {Navbar} from './component/index.jsx'
function Project(){

  return(
    <div>
     <Navbar/>   
    <Header/>
    <AboutUs/>
    <SpecialMenu/>
    <Chef/>
    <Intro/>
    <Laurels/>
    <Gallery/>
    <Find/>
    <Footer/>
   
    </div>



  );



}
export default Project
