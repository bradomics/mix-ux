import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  component: ProgressBar,
  title: 'ProgressBar'
};

const Template = args => <ProgressBar {...args} className="progress-bar" />;

const DarkTemplate = args => <ProgressBar {...args} className="progress-bar progress-bar-dark"/>;


export const Default = Template.bind({});

export const Dark = DarkTemplate.bind({});


Default.args = {
    percentComplete: 50,
    animated: true,
    title: 'Default Card'
};

Dark.args = {
    percentComplete: 50,
    animated: true,
    title: 'Dark Card'
};