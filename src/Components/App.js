import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from './Header/Header'
import Home from "../pages/Home";
import About from "../pages/About";
import Packages from "../pages/Packages";
function App() {
    return (
        <Router>
            <Header />
            <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/packages" component={Packages} />
            </main>
        </Router>
    );
}

export default App;
