import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Card'
};

const Template = args => <Card {...args} className="card" />;

const DarkTemplate = args => <Card {...args} className="card bg-dark"/>;

const SquareTemplate = args => <Card {...args} className="square"/>;

const OutlineTemplate = args => <Card {...args} className="outline"/>;


export const Default = Template.bind({});

export const Dark = DarkTemplate.bind({});

export const Square = SquareTemplate.bind({});

export const Outline = OutlineTemplate.bind({});


Default.args = {
    loading: false,
    active: false,
    title: 'Default Card'
};

Dark.args = {
  loading: false,
  active: false
};

Square.args = {
  loading: false,
  active: false
};

Outline.args = {
  loading: false,
  active: false
};