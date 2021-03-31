import React from 'react';
import Alert from './Alert';

export default {
  component: Alert,
  title: 'Alert'
};

const Template = args => <Alert {...args} className="alert" />;

const DarkTemplate = args => <Alert {...args} className="alert alert-dark"/>;


export const Default = Template.bind({});

export const Dark = DarkTemplate.bind({});


Default.args = {
    loading: false,
    title: 'Deafult Alert',
};

Dark.args = {
  loading: false,
  title: 'Dark Alert',
};