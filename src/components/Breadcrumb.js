import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbStories from './Breadcrumb.stories';
import './Breadcrumb/Breadcrumb.css'


export default function Breadcrumb({ breadcrumbItems, className }) {
  return (
    <div className={`${className}`}>
        {
            breadcrumbItems.map((breadcrumbItem => {
                return (<a class="breadcrumb-item" href={breadcrumbItem.path}>{breadcrumbItem.title} </a>)
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
  breadcrumbItems: [
    {
      title: 'home',
      path: '/'
    },
    {
      title: 'articles',
      path: '/articles'
    },
    {
      title: 'article #1',
      path: '/article-1'
    }
  ],
  loading: false,
}