import React from 'react';
import styles from './MainContent.module.scss';
import CodeEditorArea from './CodeEditor/CodeEditorArea';

interface MainContentProps {
  theme: 'light' | 'dark';
}

const MainContent: React.FC<MainContentProps> = ({ theme }) => {
  return (
    <div className={`${styles.mainContent} ${styles[theme]}`}>
      <CodeEditorArea />
    </div>
  );
};

export default MainContent; 