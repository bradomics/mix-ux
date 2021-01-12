import React from 'react';
import PropTypes from 'prop-types';


export default function Button({ Button: { active, state }, onArchiveButton, onPinButton }) {
  return (
    <div className="list-item">
      <label className="checkbox">
      </label>
      <div className="title">
      </div>
    </div>
  );
}

Button.propTypes = {
    Button: PropTypes.shape({
        active: PropTypes.bool
    }),
    onArchiveButton: PropTypes.func,
    onPinButton: PropTypes.func
}