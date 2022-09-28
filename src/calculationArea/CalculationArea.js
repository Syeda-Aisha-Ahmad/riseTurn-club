import React from 'react';
import './calculationArea.css'

const CalculationArea = () => {
    return (
        <div className='calculationArea'>
            <div>
                <h1>User's Information</h1>
                <h3>Name: Syeda Aisha Ahmad</h3>
                <p>Dhaka, Bangladesh</p>
            </div>

            <div className='add-a-break'>
                <h2>Add A Break</h2>
                <div className='times'>
                    <span>10s</span>
                    <span>20s</span>
                    <span>30s</span>
                    <span>40s</span>
                    <span>50s</span>
                </div>
            </div>

            <div className='exercise-details'>
                <h2>Exercise Details</h2>
                <div className="details">
                    <span>Exercise Time:</span>
                    <span>0 sec</span>
                </div>
                <div className="details">
                    <span>Break Time:</span>
                    <span>0 sec</span>
                </div>
                <button>Activity Completed</button>
            </div>
        </div>
    );
};

export default CalculationArea;