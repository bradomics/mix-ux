import React from 'react';
import PropTypes from 'prop-types';
import './Modal/Modal.css'
import { X } from 'react-feather'


export default function Modal({ title, isVisible, loading, className }) {
  return (
    <div className={`${className} ${isVisible && 'visible'}`}>
        <div className={`modal-header ${loading && 'modal-header-loading'}`}>
            <h3>{loading || title}</h3>
            <span className="modal-close-icon"><X/></span>
        </div>
        <div className={`${loading && 'modal-body-loading'} modal-body`}>

        </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  isVisible: PropTypes.bool,
  loading: PropTypes.bool,
  active: PropTypes.bool
}

Modal.defaultProps = {
  title: 'Modal Title',
  isVisible: true,
  loading: false,
  active: false
}