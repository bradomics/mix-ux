import React from 'react';
import Breadcrumb from './Breadcrumb';

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
    breadcrumbItems: ['home', 'articles', 'article #1']
};

Dark.args = {
    loading: false,
    breadcrumbItems: ['home', 'articles', 'article #1']
};