import React from 'react'
import { action } from '@storybook/addon-actions';

import Card from '../components/Card';

export default {
    title: 'Card',
    component: Card,
}

export const Text = () => <Card oonClick={action('clicked')}>Hello Button</Card>;

export const Emoji = () => (
    <Card onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Card>
)