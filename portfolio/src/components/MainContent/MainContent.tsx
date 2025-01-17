import React from 'react';
import styles from './MainContent.module.scss';

interface MainContentProps {
  theme: 'light' | 'dark';
}

const MainContent: React.FC<MainContentProps> = ({ theme }) => {
  return (
    <div className={`${styles.mainContent} ${styles[theme]}`}>
      {/* 메인 컨텐츠 내용 */}
    </div>
  );
};

export default MainContent; 