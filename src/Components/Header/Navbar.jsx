import { Link } from "react-router-dom";
export default function Navbar() {
    return(
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
    );
}
