import React from 'react';
import Modal from '../components/Modal';

export default {
  component: Modal,
  title: 'Modal'
};

const Template = args => <Modal {...args} className="modal" />;

const DarkTemplate = args => <Modal {...args} className="modal modal-dark"/>;


export const Default = Template.bind({});

export const Dark = DarkTemplate.bind({});


Default.args = {
    loading: false,
    title: 'Deafult Modal',
};

Dark.args = {
  loading: false,
  title: 'Dark Modal',
};