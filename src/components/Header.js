import React from 'react';
import PropTypes from 'prop-types';
import HeaderStories from './Header.stories';
import './Header/Header.css'


export default function Header({ text, loading, className }) {
  return (
    <h3 className={`${className}`}>{text}</h3>
  );
}

Header.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool,
  active: PropTypes.bool
}

Header.defaultProps = {
  text: 'Header',
  loading: false,
  active: false
}