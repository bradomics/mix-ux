import React from 'react';
import Card from '../components/Card';

export default {
  component: Card,
  title: 'Card'
};

const Template = args => <Card {...args} className="card" />;

const DarkTemplate = args => <Card {...args} className="card bg-dark"/>;


export const Default = Template.bind({});

export const Dark = DarkTemplate.bind({});


Default.args = {
    loading: false,
    active: false,
    title: 'Default Card',
    content: '<p>Card content here.</p>'
};

Dark.args = {
  loading: false,
  active: false,
  title: 'Dark Card',
  content: '<p>Card content here.</p>'
};