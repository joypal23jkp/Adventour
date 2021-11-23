import './style.css';
import { Link } from 'react-router-dom';
import SettingComponent from "../AtomComponents/SettingComponent";
import Navbar from "../Header/Navbar";
import Logo from '../AtomComponents/Logo';
export default function BasicExample() {
    return (
        <nav className="container-lg container-md navbar navbar-expand-lg navbar-light bg-transparent w-100 d-flex justify-content-around">
            <Link to="/" className="navbar-brand font-weight-bold text-white">
                <Logo />
            </Link>
            <Navbar />
            <SettingComponent />
        </nav>
    );
}