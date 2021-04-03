import React from 'react';
import List from '../components/List';

export default {
  component: List,
  title: 'List'
};

const Template = args => <List {...args} className="list" />;

const DarkTemplate = args => <List {...args} className="list bg-dark"/>;


export const Default = Template.bind({});

export const Dark = DarkTemplate.bind({});


Default.args = {
    listItems: ['apples', 'bananas', 'oranges'],
    loading: false,
};

Dark.args = {
  listItems: ['apples', 'bananas', 'oranges'],
  loading: false,
};