import '../App.css';
import React from "react";
import { Button } from 'antd';

// import Banner from '../assets/images/bannar.jpg'
import TopBarBanner from "../Components/TopBanner/TopBarBanner";
const Home = () => {
    return (
        <div>
            <TopBarBanner />

            <Button type="primary">DaDA Dora khaice</Button>
        </div>
    );
}

export default Home;