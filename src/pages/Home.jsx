import '../App.css';
import React from "react";
import TopBarBanner from "../Components/TopBanner/TopBarBanner";
import PlanningComponent from "../Components/ParticleComponents/Planning/RecentPlanning";
import RecentEvent from '../Components/ParticleComponents/Event/RecentEvent';

const Home = () => {
    return (
        <div>
            <TopBarBanner />
            <br />
            <PlanningComponent />
            <br />
            <RecentEvent></RecentEvent>
        </div>
    );
}

export default Home;