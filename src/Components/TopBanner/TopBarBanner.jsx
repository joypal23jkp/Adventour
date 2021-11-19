import './style.css';
import React, { Component } from "react";
import Human_Adventour_Image from "../../assets/images/adv_for_human.svg"
class TopBarBanner extends Component {
    render()  {
      return (
          <div className="w-100 text-white Top_bar-banner_wrapper d-flex justify-content-center container-lg container-md">
             <div className="hero__left_section w-lg-50 w-md-50 w-sm-100">
                 <h1 className="hero__title text-left ">Discovery <span className="hero__title_inner">Corner to Corner</span> <br/>
                with Adventour.</h1>
                 <h2 className="hero__description text-left">
                 Find The Way of Life.<br />
                 Your Planning can help others to expore.
                 </h2>
                 <div className="hero__button_wrapper d-flex">
                     <button className="hero-button">Let's Plan</button>
                 </div>
             </div>
             <div className="hero__right_section w-lg-50 w-md-50 w-sm-100">
                <img className="hero_image" src={Human_Adventour_Image} alt="hero+image"></img>
             </div>
          </div>
      )
    }
}

export default TopBarBanner;
