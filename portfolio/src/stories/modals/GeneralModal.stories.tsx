import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import GeneralModal from '../../components/Common/GeneralModal';

export default {
  title: 'Components/GeneralModal',
  component: GeneralModal,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof GeneralModal>;

const Template: StoryFn<typeof GeneralModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <GeneralModal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: '모달 제목',
  children: <p>모달 내용</p>,
  showFooterButtons: { confirm: true, cancel: true },
};

export const WithoutFooter = Template.bind({});
WithoutFooter.args = {
  title: '푸터 없는 모달',
  children: <p>푸터 버튼 없이 표시됩니다.</p>,
  showFooterButtons: { confirm: false, cancel: false },
};
