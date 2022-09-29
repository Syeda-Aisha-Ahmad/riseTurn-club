import React from 'react';
import './calculationArea.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CalculationArea = (props) => {
    const notify = () => toast("Congratulations! Activity Complited...");
    let total = 0;
    for (let workout of props.workouts) {
        total = total + workout.time
    }
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
                    <span>{total} sec</span>
                </div>
                <div className="details">
                    <span>Break Time:</span>
                    <span>0 sec</span>
                </div>
                <button onClick={notify}>Activity Completed</button>
                <ToastContainer />

            </div>
        </div>
    );
}

export default CalculationArea;