import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  component: ProgressBar,
  title: 'ProgressBar'
};

const Template = args => <ProgressBar {...args} className="card" />;

const DarkTemplate = args => <ProgressBar {...args} className="card bg-dark"/>;


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