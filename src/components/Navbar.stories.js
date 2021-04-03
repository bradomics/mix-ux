import React from 'react';
import Navbar from '../components/Navbar';

export default {
  component: Navbar,
  title: 'Navbar'
};

const Template = args => <Navbar {...args} className="navbar" />;

const DarkTemplate = args => <Navbar {...args} className="navbar navbar-dark"/>;


export const Default = Template.bind({});

export const Dark = DarkTemplate.bind({});


Default.args = {
    navbarItems: ['Home', 'Shop'],
    active: false,
    title: 'Navbar'
};

Dark.args = {
  navbarItems: ['Home', 'Shop'],
  active: false,
  title: 'Dark Navbar'
};