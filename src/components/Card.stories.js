import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Card'
};

const Template = args => <Card {...args} className="card" />;

const SecondaryTemplate = args => <Card {...args} className="secondary"/>;

const SquareTemplate = args => <Card {...args} className="square"/>;

const OutlineTemplate = args => <Card {...args} className="outline"/>;


export const Default = Template.bind({});

export const Secondary = SecondaryTemplate.bind({});

export const Square = SquareTemplate.bind({});

export const Outline = OutlineTemplate.bind({});


Default.args = {
    loading: false,
    active: false,
    title: 'Default Card'
};

Secondary.args = {
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