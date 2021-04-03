import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css'
import { X } from 'react-feather'

export default function Modal({ title, loading, className }) {
    const [isVisible, hideModal] = useState(true);
    return (
        <div className={`${className} ${isVisible && 'visible'}`}>
            <div className={`modal-header ${loading && 'modal-header-loading'}`}>
                <h3>{loading || title}</h3>
                {loading || <span className="modal-close-icon" onClick={() => hideModal(!isVisible)}><X/></span>}
            </div>
            <div className={`${loading && 'modal-body-loading'} modal-body`}>

            </div>
        </div>
    );
}

Modal.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
}

Modal.defaultProps = {
  title: 'Modal Title',
  loading: false,
}