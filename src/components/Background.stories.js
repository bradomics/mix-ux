import React from 'react';
import Background from './Background';

export default {
  component: Background,
  title: 'Background'
};

const Template = () => <Background className="card" />;

const DarkTemplate = ()  => <Background className="card bg-dark"/>;

const PolkaDotTemplate = () => <Background className="card bg-polka"/>;

const ZigZagTemplate = () => <Background className="card bg-zig-zag"/>;

const LinesTemplate = () => <Background className="card bg-lines"/>;


export const Default = Template.bind({});

export const Dark = DarkTemplate.bind({});

export const PolkaDot = PolkaDotTemplate.bind({});

export const ZigZag = ZigZagTemplate.bind({});

export const Lines = LinesTemplate.bind({});