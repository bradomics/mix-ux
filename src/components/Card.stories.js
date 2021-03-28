import React from 'react';
import Card from './Card';

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
    title: 'Default Card'
};

Dark.args = {
  loading: false,
  active: false,
  title: 'Dark Card'
};