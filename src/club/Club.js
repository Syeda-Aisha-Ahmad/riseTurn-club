import React, { useEffect, useState } from 'react';
import './club.css'

const Club = () => {

    const [workout, setWorkout] = useState([]);
    useEffect(() => {
        fetch('workoutsInfo.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className='club'>
            <div className="cards-area">
                <h1>Rise Turn Club</h1>
                <h3>Select Today's workout</h3>
            </div>
            <div className="calculation-area">
                <h1>Calculation</h1>
            </div>
        </div>
    );
};

export default Club;