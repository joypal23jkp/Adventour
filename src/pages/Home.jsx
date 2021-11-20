import '../App.css';
import React from "react";
import TopBarBanner from "../Components/TopBanner/TopBarBanner";
import PlanningComponent from "../Components/ParticleComponents/Planning/RecentPlanning";

const Home = () => {
    return (
        <div>
            <TopBarBanner />
            <br/>
            <PlanningComponent />
        </div>
    );
}

export default Home;