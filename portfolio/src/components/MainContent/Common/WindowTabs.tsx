import React from 'react';
import styles from './WindowTabs.module.scss';
import WindowTabButton from './WindowTabButton';
import { useFileContext } from '../../../context/FileContext';

import Dots from '/src/assets/icons/dots.svg?react';

interface WindowTabsProps {
  isPreview: boolean;
}

const WindowTabs: React.FC<WindowTabsProps> = ({ isPreview }) => {
  const { previewFiles, editorFiles } = useFileContext();

  return (
    <div className={styles.tabsArea}>
      <div className={styles.tabsContainer}>
        {isPreview
          ? previewFiles.map((item, idx) => <WindowTabButton key={idx} title={item} selected isPreview={isPreview} />)
          : editorFiles.map((item, idx) => <WindowTabButton key={idx} title={item} selected={false} isPreview={isPreview} />)}

        {/* <WindowTabButton title={'test.tsx'} selected />
        <WindowTabButton title={'longTitleTest.tsx'} selected={false} /> */}
      </div>
      <div className={styles.controlMenu}>
        <button className={styles.controlButton}>
          <Dots className={styles.dots} />
        </button>
      </div>
    </div>
  );
};

export default WindowTabs;
