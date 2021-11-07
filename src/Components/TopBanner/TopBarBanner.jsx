import './style.css';
import React, { Component } from "react";
class TopBarBanner extends Component {
    render()  {
      return (
          <div className="w-100 text-white Top_bar-banner_wrapper d-flex justify-content-center">
             <div className="w-50 Top_bar-container-contents-holder">
                 <h1 className="text-center">Adventour</h1>
                 <p className="text-center">Discovery Corner to Corner Through Adventour. Find The Way of Life.</p>
                 <div className="w-100 center d-flex">
                     <button className="m-auto subscription-button">Subscribe</button>
                 </div>
             </div>
          </div>
      )
    }
}

export default TopBarBanner;
