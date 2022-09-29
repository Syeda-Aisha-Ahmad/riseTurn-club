import React from 'react';
import './Qa.css'

const Qa = () => {
    return (
        <div className='qsn-ans'>
            <div>
                <h1>How does React work?</h1>
                <p><b>Ans:</b> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
            </div>

            <div>
                <h1>Differences between props and state?</h1>
                <p><b>Ans:</b> The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>
            </div>

            <div>
                <h1>What is the usase of useEffect other than data load?</h1>
                <p><b>Ans:</b> </p>
            </div>
        </div>
    );
};

export default Qa;