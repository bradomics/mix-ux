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