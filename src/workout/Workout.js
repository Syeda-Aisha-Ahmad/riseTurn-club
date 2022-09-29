import React from 'react';
import './workout.css'

const Workout = (props) => {
    const { handlerBtn, workout } = props;
    const { picture, name, description, time } = workout
    return (
        <div className='workout-card'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Time required: {time}s</p>

            <button onClick={() => handlerBtn(time)}>Add to list</button>
        </div>
    );
};

export default Workout;