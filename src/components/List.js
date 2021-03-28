import React from 'react';
import PropTypes from 'prop-types';
import './List/List.css'


export default function List({ listItems, loading, className }) {
  return (
    <div className={`${className} ${loading && 'list-loading'}`}>
        <ul>
            {
                listItems.map((listItem) => {
                    return(<li className="list-item">{listItem}</li>)
                })
            }
        </ul>
    </div>
  );
}

List.propTypes = {
  listItems: PropTypes.array,
  loading: PropTypes.bool,
}

List.defaultProps = {
  listItems: ['apples', 'oranges', 'bananas'],
  loading: false,
}