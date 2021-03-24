import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Button'
};

const Template = args => <Button {...args} className="button" />;

const SecondaryTemplate = args => <Button {...args} className="secondary"/>;

const SquareTemplate = args => <Button {...args} className="square"/>;

const OutlineTemplate = args => <Button {...args} className="outline"/>;


export const Default = Template.bind({});

export const Secondary = SecondaryTemplate.bind({});

export const Square = SquareTemplate.bind({});

export const Outline = OutlineTemplate.bind({});


Default.args = {
    loading: false,
    active: false
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