import React from 'react';
import Button from '../components/Button';

export default {
  component: Button,
  title: 'Button'
};

const Template = args => <Button {...args} className="button" />;
const PrimaryTemplate = args => <Button {...args} className="button button-primary" />;
const InfoTemplate = args => <Button {...args} className="button button-info" />;
const WarningTemplate = args => <Button {...args} className="button button-warning" />;
const DangerTemplate = args => <Button {...args} className="button button-danger" />;
const SecondaryTemplate = args => <Button {...args} className="button button-secondary"/>;
const SquareTemplate = args => <Button {...args} className="square"/>;
const OutlineTemplate = args => <Button {...args} className="outline"/>;


export const Default = Template.bind({});
export const Primary = PrimaryTemplate.bind({});
export const Secondary = SecondaryTemplate.bind({});
export const Info = InfoTemplate.bind({});
export const Warning = WarningTemplate.bind({});
export const Danger = DangerTemplate.bind({});
export const Square = SquareTemplate.bind({});
export const Outline = OutlineTemplate.bind({});


Default.args = {
    loading: false,
    active: false
};

Primary.args = {
  text: 'Primary Button',
  loading: false,
  active: false
}

Secondary.args = {
  text: 'Secondary Button',
  loading: false,
  active: false
};

Info.args = {
  text: 'Info Button',
  loading: false,
  active: false
}

Warning.args = {
  text: 'Warning Button',
  loading: false,
  active: false
}

Danger.args = {
  text: 'Danger Button',
  loading: false,
  active: false
}

Square.args = {
  text: 'Square Button',
  loading: false,
  active: false
};

Outline.args = {
  text: 'Outline Button',
  loading: false,
  active: false
};