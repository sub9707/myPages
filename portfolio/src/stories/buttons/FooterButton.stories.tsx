// Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FooterButton from '../../components/Footer/FooterButton';

export default {
  title: 'Components/FooterButton',
  component: FooterButton,
} as Meta<typeof FooterButton>;

const Template: StoryFn<typeof FooterButton> = (args) => <FooterButton {...args} />;

export const IconOnly = Template.bind({});
IconOnly.args = {
  icon: 'https://via.placeholder.com/24', // 임시 아이콘 URL
  altText: 'Placeholder Icon',
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  text: 'Home',
};

export const IconWithText = Template.bind({});
IconWithText.args = {
  icon: 'https://via.placeholder.com/24', // 임시 아이콘 URL
  text: 'Home',
  altText: 'Placeholder Icon',
};
