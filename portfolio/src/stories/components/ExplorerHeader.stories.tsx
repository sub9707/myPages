import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ExplorerHeader from '../../components/Explorer/ExplorerHeader';

export default {
  title: 'Components/ExplorerHeader',
  component: ExplorerHeader,
  argTypes: {
    title: { control: 'text' },
    additionalMenu: { control: 'text' },
  },
} as Meta<typeof ExplorerHeader>;

const Template: StoryFn<typeof ExplorerHeader> = (args) => <ExplorerHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Explorer Title',
  additionalMenu: <div>Optional Menu</div>,
};

export const NoAdditionalMenu = Template.bind({});
NoAdditionalMenu.args = {
  title: 'Explorer Title',
};
