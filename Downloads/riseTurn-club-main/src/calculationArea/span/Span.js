import React from 'react';
import './span.css'

const Span = (props) => {
    const { addBreakBtn, second } = props;
    const { seconds } = second;
    return (
        <div className='seconds-div'>
            <span onClick={() => addBreakBtn(seconds)}>{seconds}</span>
        </div>
    );
};

export default Span;