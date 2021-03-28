import React from 'react';
import PropTypes from 'prop-types';
import ModalStories from './Modal.stories';
import './Modal/Modal.css'


export default function Modal({ title, loading, className }) {
  return (
    <div className={`${className}`}>
        <div className={`card-title ${loading && 'card-title-loading'}`}>
            <h3>{loading || title}</h3>
        </div>
        <div className={`${loading && 'card-body-loading'} card-body`}>

        </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  active: PropTypes.bool
}

Modal.defaultProps = {
  title: 'Modal Title',
  loading: false,
  active: false
}