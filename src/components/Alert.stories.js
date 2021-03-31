import React from 'react';
import Alert from './Alert';

export default {
  component: Alert,
  title: 'Alert',
};

const Template = args => <Alert {...args} className="alert" />;
const PrimaryTemplate = args => <Alert {...args} className="alert alert-primary"/>;
const SecondaryTemplate = args => <Alert {...args} className="alert alert-secondary"/>;
const InfoTemplate = args => <Alert {...args} className="alert alert-info"/>;
const WarningTemplate = args => <Alert {...args} className="alert alert-warning"/>;
const DangerTemplate = args => <Alert {...args} className="alert alert-danger"/>;
const DarkTemplate = args => <Alert {...args} className="alert alert-dark"/>;


export const Default = Template.bind({});
export const Primary = PrimaryTemplate.bind({});
export const Secondary = SecondaryTemplate.bind({});
export const Info = InfoTemplate.bind({});
export const Warning = WarningTemplate.bind({});
export const Danger = DangerTemplate.bind({});
export const Dark = DarkTemplate.bind({});


Default.args = {
    loading: false,
    title: 'Default Alert',
    content: '<p>Just a basic alert. The default alert color is blue, which is the same color used for the primary alert. Use it for displaying messages to the user.</p>'
};

Primary.args = {
    loading: false,
    title: 'Primary Alert',
    content: '<p>Just a basic alert. Use it for displaying messages to the user.</p>'
};

Secondary.args = {
    loading: false,
    title: 'Secondary Alert',
    content: '<p>Just a basic alert. Use it for displaying messages to the user.</p>'
};

Info.args = {
    loading: false,
    title: 'Info',
    content: '<p>Just a basic alert. Use it for displaying messages to the user.</p>'
};

Warning.args = {
    loading: false,
    title: 'Warning',
    content: '<p>Damn, why they wanna stick me for my paper?</p>'
};

Danger.args = {
    loading: false,
    title: 'Danger',
    content: '<p>Stranger danger. Watch out when you see this warning.</p>'
};

Dark.args = {
  loading: false,
  title: 'Dark Alert',
  content: '<p>This is a dark alert.</p>'
};