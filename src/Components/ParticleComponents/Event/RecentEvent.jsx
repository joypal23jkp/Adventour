import React from 'react';
import Event from './Event';
import EventInfoComponents from './EventInfoComponents';

const RecentEvent = () => {
    return (
        <div className="d-flex justify-content-center container-lg container-md event_component__wrapper align-items-center">
            <div className="col-md-6">
                <EventInfoComponents />
            </div>
            <div className="col-md-6">
                <Event />
            </div>
        </div>
    );
};

export default RecentEvent;