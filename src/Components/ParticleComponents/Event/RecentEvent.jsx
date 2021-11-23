import React from 'react';
import Event from './Event';
import EventInfoComponents from './EventInfoComponents';

const RecentEvent = () => {
    return (
        <div className="d-flex justify-content-center container-lg container-md">
            <div className="col-md-6">
                <EventInfoComponents></EventInfoComponents>
            </div>
            <div className="col-md-6">
                <Event></Event>
            </div>
        </div>
    );
};

export default RecentEvent;