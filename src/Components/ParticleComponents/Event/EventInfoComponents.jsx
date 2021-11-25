import './style.css'
import React from 'react';

const EventInfoComponents = () => {
    return (
        <div className="container event_info_component__wrapper">
            <div className="event_info_component__information">
                <h4>Get inspiration for <br/>
                future trips weekly</h4>
            </div>
            <div className="event_info_component__content">
                <ul className="one">
                    <li>List Item1</li>
                    <li>List Item2</li>
                    <li>List Item3</li>
                </ul>
            </div>
        </div>
    );
};

export default EventInfoComponents;