import React, { useEffect, useState } from 'react';
import Workout from '../workout/Workout';
import './club.css'

const Club = () => {

    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
        fetch('workoutsInfo.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])
    return (
        <div className='club'>
            <div className="cards-area">
                <h1>Rise Turn Club</h1>
                <h3>Select Today's workout</h3>
                <div className='workout-cards'>
                    {
                        workouts.map((workout => <Workout
                            key={workout.id}
                            workout={workout}
                        ></Workout>))
                    }
                </div>
            </div>
            <div className="calculation-area">
                <h1>Calculation</h1>
            </div>
        </div>
    );
};

export default Club;