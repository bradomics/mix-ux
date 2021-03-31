import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Alert/Alert.css'
import { X } from 'react-feather'

export default function Alert({ title, content, loading, className }) {
    const [isVisible, hideModal] = useState(true);
    return (
        <div className={`${className} ${isVisible && 'visible'}`}>
            <div className={`alert-header ${loading && 'alert-header-loading'}`}>
                <p>{loading || title}</p>
                {loading || <span className="alert-close-icon" onClick={() => hideModal(!isVisible)}><X className="alert-icon"/></span>}
            </div>
            <div className={`${loading && 'alert-body-loading'} alert-body`} dangerouslySetInnerHTML={{__html: content}}>

            </div>
        </div>
    );
}

Alert.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  loading: PropTypes.bool,
}

Alert.defaultProps = {
  title: 'Alert Title',
  content: "<p>Alert title here</p>",
  loading: false,
}