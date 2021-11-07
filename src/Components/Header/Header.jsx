import './style.css';
import { Link } from 'react-router-dom';
import SettingComponent from "../AtomComponents/SettingComponent";
import Logo from '../AtomComponents/Logo';
export default function BasicExample() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent w-100 position-fixed d-flex justify-content-around">
            <Link to="/" className="navbar-brand font-weight-bold text-white">
                <Logo />
            </Link>
            <div className="collapse navbar-collapse text-white ml-auto mr-auto" id="navbarToggleDemo03">
                <ul className="navbar-nav mr-auto ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">PLANNINGS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/packages" className="nav-link">EVENTS</Link>
                        {/*<a href="/packages" className="nav-link">Packages</a>*/}
                    </li>
                    <li className="nav-item">
                        <Link to="/packages" className="nav-link">EXPERIENCE</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">ABOUT</Link>
                    </li>
                </ul>
            </div>
            <SettingComponent />
        </nav>
    );
}