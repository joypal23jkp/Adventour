import './style.css';
import {Link} from 'react-router-dom';
import SearchComponent from "../AtomComponents/SearchComponent";
export default function BasicExample() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent w-100 position-fixed d-flex justify-content-between">
            <Link to="/" className="navbar-brand font-weight-bold text-white">Adventour</Link>
            <div className="collapse navbar-collapse text-white ml-5" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/packages" className="nav-link">Package</Link>
                        {/*<a href="/packages" className="nav-link">Packages</a>*/}
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                </ul>
                <SearchComponent />
            </div>
        </nav>
    );
}