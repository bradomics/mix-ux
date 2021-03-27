import React from 'react';
import PropTypes from 'prop-types';
import CardStories from './Card.stories';
import './Card/Card.css'


export default function Card({ title, loading, className }) {
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

Card.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  active: PropTypes.bool
}

Card.defaultProps = {
  title: 'Card Title',
  loading: false,
  active: false
}