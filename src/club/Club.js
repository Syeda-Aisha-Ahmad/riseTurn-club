import React, { useEffect, useState } from 'react';
import CalculationArea from '../calculationArea/CalculationArea';
import Workout from '../workout/Workout';
import './club.css'

const Club = () => {

    const [workouts, setWorkouts] = useState([]);
    const [workoutTimes, setWorkoutTimes] = useState([]);
    const [breakSec, setBreakSec] = useState([]);
    useEffect(() => {
        fetch('workoutsInfo.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])

    const addToCalculationArea = (id) => {
        const totalWorkoutTimes = [...workoutTimes, id];
        setWorkoutTimes(totalWorkoutTimes);
    }
    const addBreakbtn = (id) => {
        const totalSeconds = [...breakSec, id];
        setBreakSec(totalSeconds);
        localStorage.setItem('Break-Time', id)
    }
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
                            handlerBtn={addToCalculationArea}
                        ></Workout>))
                    }
                </div>
            </div>
            <div className="calculation-area">
                <CalculationArea
                    workoutData={workouts}
                    workouts={workoutTimes}
                    seconds={breakSec}
                    addBreakBtn={addBreakbtn}
                ></CalculationArea>
            </div>
        </div>
    );
};

export default Club;