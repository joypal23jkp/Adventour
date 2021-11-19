
import React from "react";
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'isLoggedIn': false};
    }

    render() {
        return(
            <div>
                { this.state.isLoggedIn }
            </div>
        );
    }
}