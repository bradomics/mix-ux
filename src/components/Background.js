import React from 'react';
import PropTypes from 'prop-types';
import BackgroundStories from './Background.stories';
import './Background/Background.css'


export default function Background({ title, loading, className }) {
  return (
    <div className={`${className}`}>
    </div>
  );
}

Background.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  active: PropTypes.bool
}

Background.defaultProps = {
  title: 'Card Title',
  loading: false,
  active: false
}