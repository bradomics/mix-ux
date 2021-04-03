import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css'


export default function ProgressBar({ percentComplete, animated, className }) {
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);

    const completedStyles =  {
        width: `${percentComplete}%`,
    };
    return (
        <div className={`${className}`}>
            <div id="progress-bar-percentage" style={completedStyles}><b><p>{percentComplete}%</p></b></div>
        </div>
    );
}

ProgressBar.propTypes = {
    percentComplete: PropTypes.number,
    animated: PropTypes.bool,
    active: PropTypes.bool
}

ProgressBar.defaultProps = {
    percentComplete: 50,
    animated: true,
    active: false
}