import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Alert/Alert.css'
import { X } from 'react-feather'

export default function Alert({ title, loading, className }) {
    const [isVisible, hideModal] = useState(true);
    return (
        <div className={`${className} ${isVisible && 'visible'}`}>
            <div className={`alert-header ${loading && 'alert-header-loading'}`}>
                <h3>{loading || title}</h3>
                {loading || <span className="alert-close-icon" onClick={() => hideModal(!isVisible)}><X/></span>}
            </div>
            <div className={`${loading && 'alert-body-loading'} alert-body`}>

            </div>
        </div>
    );
}

Alert.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
}

Alert.defaultProps = {
  title: 'Alert Title',
  loading: false,
}