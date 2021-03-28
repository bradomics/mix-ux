import React from 'react';
import Accordion from './Accordion';

export default {
  component: Accordion,
  title: 'Accordion'
};

const Template = args => <Accordion {...args} className="card" />;

const DarkTemplate = args => <Accordion {...args} className="card bg-dark"/>;


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