import React from 'react';
import Modal from './Modal';

export default {
  component: Modal,
  title: 'Modal'
};

const Template = args => <Modal {...args} className="card" />;

const DarkTemplate = args => <Modal {...args} className="card bg-dark"/>;


export const Default = Template.bind({});

export const Dark = DarkTemplate.bind({});


Default.args = {
    loading: false,
    active: false,
    title: 'Deafult Modal'
};

Dark.args = {
  loading: false,
  active: false,
  title: 'Dark Modal'
};