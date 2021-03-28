import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbStories from './Breadcrumb.stories';
import './Breadcrumb/Breadcrumb.css'


export default function Breadcrumb({ breadcrumbItems, className }) {
  return (
    <div className={`${className}`}>
        {
            breadcrumbItems.map((breadcrumbItem => {
                return (<a class="breadcrumb-item">{breadcrumbItem} </a>)
            }))
        }
    </div>
  );
}

Breadcrumb.propTypes = {
  breadcrumbItems: PropTypes.array,
  loading: PropTypes.bool,
}

Breadcrumb.defaultProps = {
  breadcrumbItems: ['home', 'articles', 'article #1'],
  loading: false,
}