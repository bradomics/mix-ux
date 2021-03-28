import React from 'react';
import Accordion from './Accordion';

export default {
  component: Accordion,
  title: 'Accordion'
};

const Template = args => <Accordion {...args} className="accordion" />;

const DarkTemplate = args => <Accordion {...args} className="card bg-dark"/>;


export const Default = Template.bind({});

export const Dark = DarkTemplate.bind({});


Default.args = {
    loading: false,
    active: false,
    title: 'Accordion',
    accordionItems: [
        {
            title: 'Woop',
            content: 'DoubleWoop'
        },
        {
          title: 'Woop2',
          content: 'WeepWoop'
      },
    ]
};

Dark.args = {
    loading: false,
    active: false,
    title: 'Dark Card',
    accordionItems: [
        {
            title: 'Woop',
            content: 'DoubleWoop'
        },
        {
            title: 'Woop2',
            content: 'WeepWoop'
        },
    ]
};