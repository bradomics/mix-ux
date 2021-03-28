import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown/Dropdown.css'


export default function Dropdown({ title, loading, className }) {
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

Dropdown.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  active: PropTypes.bool
}

Dropdown.defaultProps = {
  title: 'Card Title',
  loading: false,
  active: false
}