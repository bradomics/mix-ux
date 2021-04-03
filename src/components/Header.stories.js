import React from 'react';
import Header from '../components/Header';

export default {
  component: Header,
  title: 'Header'
};

const Template = args => <Header {...args} className="header" />;
const DarkTemplate = args => <Header {...args} className="header header-dark"/>;


export const Default = Template.bind({});
export const Dark = DarkTemplate.bind({});


Default.args = {
    loading: false,
    active: false,
    text: 'Header'
};

Dark.args = {
  loading: false,
  active: false,
  text: 'Dark Header'
};