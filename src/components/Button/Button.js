import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

export default function Button({ loading, active, text, className }) {
  return (
    <button className={`${className} ${loading && 'btn-loading'} ${active && 'btn-active'}`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string,
  active: PropTypes.bool
}

Button.defaultProps = {
  loading: false,
  text: 'Primary Button',
  active: false
}
