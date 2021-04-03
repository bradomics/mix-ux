import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'


export default function Card({ title, content, loading, className }) {
  return (
    <div className={`${className}`}>
        <div className={`card-title ${loading && 'card-title-loading'}`}>
            <h3>{loading || title}</h3>
        </div>
        <div className={`${loading && 'card-body-loading'} card-body`} dangerouslySetInnerHTML={{__html: content}}>

        </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  loading: PropTypes.bool,
  active: PropTypes.bool
}

Card.defaultProps = {
  title: 'Card Title',
  content: '<p>It is I, the card content.</p>',
  loading: false,
  active: false
}