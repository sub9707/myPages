import React, { useEffect, useRef } from 'react';
import styles from './WindowTabs.module.scss';
import WindowTabButton from './WindowTabButton';
import { useFileContext } from '../../../context/FileContext';

import Dots from '/src/assets/icons/dots.svg?react';

interface WindowTabsProps {
  isPreview: boolean;
}

const WindowTabs: React.FC<WindowTabsProps> = ({ isPreview }) => {
  const { previewFiles, editorFiles, selectedEditorFile, selectedPreviewFile } = useFileContext();
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 가장 최근에 추가한 버튼(오른쪽 끝)이 보이도록 자동 스크롤
    if (tabsRef.current) {
      tabsRef.current.scrollLeft = tabsRef.current.scrollWidth;
    }
  }, [previewFiles, editorFiles]); // 파일 목록이 변경될 때마다 실행

  return (
    <div className={styles.tabsArea}>
      <div className={styles.tabsContainer} ref={tabsRef}>
        {isPreview
          ? previewFiles.map((item, idx) => (
              <WindowTabButton 
                key={idx} 
                title={item} 
                selected={item === selectedPreviewFile} 
                isPreview={isPreview} 
              />
            ))
          : editorFiles.map((item, idx) => (
              <WindowTabButton 
                key={idx} 
                title={item} 
                selected={item === selectedEditorFile} 
                isPreview={isPreview} 
              />
            ))}
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
