import React from 'react';
import TextArea from './Card';

export default {
  component: TextArea,
  title: 'TextArea'
};

const Template = args => <TextArea {...args} className="card" />;

const DarkTemplate = args => <TextArea {...args} className="card bg-dark"/>;


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