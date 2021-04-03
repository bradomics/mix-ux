import React from 'react';
import Accordion from '../components/Accordion';

export default {
  component: Accordion,
  title: 'Accordion'
};

const Template = args => <Accordion {...args} className="accordion" />;

const DarkTemplate = args => <Accordion {...args} className="accordion bg-dark"/>;


export const Default = Template.bind({});

export const Dark = DarkTemplate.bind({});


Default.args = {
    loading: false,
    active: false,
    title: 'Accordion',
    accordionItems: [
        {
            title: 'All You Trekkies and TV Addicts',
            content: "<p>Don't mean to diss, don't mean to bring static</p><p>All you Klingons in your grandmother's house</p><p>Grab your backstreet friend and get loud</p><p>Blowin' doors off hinges I'll grab you with the pinchers</p><p>And no I didn't retire I'll snatch you up With the needle nose pliers<p>",
            expanded: false
        },
        {
          title: 'Like Mutual of Omaha',
          content: "<p>Got the ill boat you never seen before 🛥️</p><p>Gliding in the glades</p><p>And like Lorne Greene</p><p>You know I get paid</p>",
          expanded: false
        },
        {
            title: 'Like Caprese and With the Basil',
            content: "<p>Not goofy like darren or hazel</p><p>I'm a mother f*cking Nick at Night</p><p>With Classics rerunning that you know all right</p>",
            expanded: false
        },
        {
            title: 'Now Remain Calm, No Alarm',
            content: "<p>Cause my farm ain't fat</p><p>So what's up with that</p>",
            expanded: false
        },
        {
            title: "I've Got Friends and Family That I Respect",
            content: "<p>When I think I'm too good they put me in check</p><p>So believe when I say I'm no better than you</p><p>Except when I rap</p><p>So I guess it ain't true like that y'all, and you just don't stop</p><p>Guaranteed to make your body rock</p>",
            expanded: false
        },
    ]
};

Dark.args = {
    loading: false,
    active: false,
    title: 'Dark Card',
    accordionItems: [
        {
            title: 'All You Trekkies and TV Addicts',
            content: "<p>Don't mean to diss, don't mean to bring static</p><p>All you Klingons in your grandmother's house</p><p>Grab your backstreet friend and get loud</p><p>Blowin' doors off hinges I'll grab you with the pinchers</p><p>And no I didn't retire I'll snatch you up With the needle nose pliers<p>",
            expanded: false
        },
        {
          title: 'Like Mutual of Omaha',
          content: "<p>Got the ill boat you never seen before 🛥️</p><p>Gliding in the glades</p><p>And like Lorne Greene</p><p>You know I get paid</p>",
          expanded: false
        },
        {
            title: 'Like Caprese and With the Basil',
            content: "<p>Not goofy like darren or hazel</p><p>I'm a mother f*cking Nick at Night</p><p>With Classics rerunning that you know all right</p>",
            expanded: false
        },
        {
            title: 'Now Remain Calm, No Alarm',
            content: "<p>Cause my farm ain't fat</p><p>So what's up with that</p>",
            expanded: false
        },
        {
            title: "I've Got Friends and Family That I Respect",
            content: "<p>When I think I'm too good they put me in check</p><p>So believe when I say I'm no better than you</p><p>Except when I rap</p><p>So I guess it ain't true like that y'all, and you just don't stop</p><p>Guaranteed to make your body rock</p>",
            expanded: false
        },
    ]
};