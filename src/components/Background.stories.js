import React from 'react';
import Background from './Background';

export default {
  component: Background,
  title: 'Background'
};

const Template = args => <Background {...args} className="card" />;

const DarkTemplate = args => <Background {...args} className="card bg-dark"/>;

const PolkaDotTemplate = args => <Background {...args} className="card bg-polka"/>;

const ZigZagTemplate = args => <Background {...args} className="card bg-zig-zag"/>;

const LinesTemplate = args => <Background {...args} className="card bg-lines"/>;


export const Default = Template.bind({});

export const Dark = DarkTemplate.bind({});

export const PolkaDot = PolkaDotTemplate.bind({});

export const ZigZag = ZigZagTemplate.bind({});

export const Lines = LinesTemplate.bind({});


Default.args = {
    loading: false,
    active: false,
    title: 'Default Card'
};

Dark.args = {
  loading: false,
  active: false
};

PolkaDot.args = {
  loading: false,
  active: false
};

ZigZag.args = {
    loading: false,
    active: false
};

Lines.args = {
    loading: false,
    active: false
};
