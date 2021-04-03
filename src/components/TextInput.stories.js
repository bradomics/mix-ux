import React from 'react';
import TextInput from '../components/TextInput';

export default {
  component: TextInput,
  title: 'TextInput'
};

const Template = args => <TextInput {...args} className="text-input" />;
const DarkTemplate = args => <TextInput {...args} className="text-input-dark"/>;


export const Default = Template.bind({});

export const Dark = DarkTemplate.bind({});


Default.args = {
    loading: false,
    label: 'Label',
    labelClassName: 'text-label-input',
    placeholder: 'Placeholder:',
    focus: true,
    disabled: false,
    inputValue: 'Input value'
};

Dark.args = {
  loading: false,
  label: 'Label',
  labelClassName: 'text-label-input-dark',
  placeholder: 'Placeholder:',
  focus: true,
  disabled: false,
  inputValue: 'Input value'
};