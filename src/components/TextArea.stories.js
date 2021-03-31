import React from 'react';
import TextArea from './TextArea';

export default {
  component: TextArea,
  title: 'TextArea'
};

const Template = args => <TextArea {...args} className="text-area" />;

const DarkTemplate = args => <TextArea {...args} className="text-area-dark"/>;


export const Default = Template.bind({});

export const Dark = DarkTemplate.bind({});


Default.args = {
    loading: false,
    label: 'Label',
    labelClassName: 'text-label-area',
    placeholder: 'Placeholder:',
    focus: true,
    disabled: false,
    inputValue: 'Input value'
};

Dark.args = {
  loading: false,
  label: 'Label',
  labelClassName: 'text-label-area-dark',
  placeholder: 'Placeholder:',
  focus: true,
  disabled: false,
  inputValue: 'Input value'
};