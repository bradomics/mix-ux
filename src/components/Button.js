import React from 'react';
import PropTypes from 'prop-types';
import ButtonStories from './Button.stories';
import './Button/Button.css'


export default function Button({ loading, active, className }) {
  return (
    <button className={className}>
      {
        loading && "Loading = true"
      }
      {
        active && "Active = true</h1"
      }
    </button>
  );
}

Button.propTypes = {
  loading: PropTypes.bool,
  active: PropTypes.bool
}

Button.defaultProps = {
  loading: false,
  active: false
}