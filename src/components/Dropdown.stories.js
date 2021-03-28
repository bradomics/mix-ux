import React from 'react';
import Dropdown from './Dropdown';

export default {
  component: Dropdown,
  title: 'Dropdown'
};

const Template = args => <Dropdown {...args} className="card" />;

const DarkTemplate = args => <Dropdown {...args} className="card bg-dark"/>;


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