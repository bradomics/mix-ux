import React from 'react';
import PropTypes from 'prop-types';
import ButtonStories from './Button.stories';


export default function Button({ loading }) {
  return (
    <div className="list-item">
      <label className="checkbox">
      </label>
      {
        loading && <h1>Loading = true</h1>
      }
      <div className="title">
      </div>
    </div>
  );
}

Button.propTypes = {
  loading: PropTypes.bool
}

Button.defaultProps = {
  loading: false
}