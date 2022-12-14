import React, { useEffect, useState } from 'react';
import CalculationArea from '../calculationArea/CalculationArea';
import Workout from '../workout/Workout';
import './club.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const Club = () => {

    const [workouts, setWorkouts] = useState([]);
    const [workoutTimes, setWorkoutTimes] = useState([]);
    const [breakSec, setBreakSec] = useState([]);
    useEffect(() => {
        fetch('workoutsInfo.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])

    const addToCalculationArea = (time) => {
        const totalWorkoutTimes = [...workoutTimes, time];
        setWorkoutTimes(totalWorkoutTimes);
    }
    const addBreakbtn = (second) => {
        const totalSeconds = [...breakSec, second];
        setBreakSec(totalSeconds);
        localStorage.setItem('Break-Time', second)
    }
    return (
        <div className='club'>
            <div className="cards-area">
                <h1> <FontAwesomeIcon icon={faDumbbell} />Rise Turn Club</h1>
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