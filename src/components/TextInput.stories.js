import React from 'react';
import TextInput from './TextInput';

export default {
  component: TextInput,
  title: 'TextInput'
};

const Template = args => <TextInput {...args} className="card" />;

const DarkTemplate = args => <TextInput {...args} className="card bg-dark"/>;


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