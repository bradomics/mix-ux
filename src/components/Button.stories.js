import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Button'
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  Button: {
    active: false
  },
};

// export const Active = Template.bind({});
// Active.args = {
//   active: true,
// };

export const Pinned = Template.bind({});
Pinned.args = {
  Button: {
    ...Default.args.Button,
    state: 'Button_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  Button: {
    ...Default.args.Button,
    state: 'Button_ARCHIVED',
  },
};