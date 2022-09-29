import React from 'react';
import './calculationArea.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Span from './span/Span';


const CalculationArea = (props) => {

    const { workoutData, seconds, addBreakBtn, workouts } = props;
    // toast
    const notify = () => toast("Congratulations! Activity Complited...");

    //
    let total = 0;
    let sec = 0;
    for (const workout of workouts) {
        total = total + workout;
    }
    for (const second of seconds) {
        sec = second;
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
                    {
                        workoutData.map(sec => <Span
                            key={sec.id}
                            second={sec}
                            addBreakBtn={addBreakBtn}></Span>)
                    }
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
                    <span>{sec} sec</span>
                </div>
                <button onClick={notify}>Activity Completed</button>
                <ToastContainer />

            </div>
        </div>
    );
}

export default CalculationArea;