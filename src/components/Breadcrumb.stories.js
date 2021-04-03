import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default {
  component: Breadcrumb,
  title: 'Breadcrumb'
};

const Template = args => <Breadcrumb {...args} className="breadcrumb" />;

const DarkTemplate = args => <Breadcrumb {...args} className="breadcrumb breadcrumb-dark"/>;


export const Default = Template.bind({});

export const Dark = DarkTemplate.bind({});


Default.args = {
    loading: false,
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
};

Dark.args = {
    loading: false,
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
};