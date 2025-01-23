import React, { useState } from 'react';
import styles from './Explorer.module.scss';
import ExplorerHeader from './ExplorerHeader';
import MenuDots from '../Common/MenuDots';
import ExplorerContentsList from './ExplorerContentsList';

interface ExplorerProps {
  theme: 'light' | 'dark';
}

const Explorer: React.FC<ExplorerProps> = ({ theme }) => {
  const [width, setWidth] = useState(250);
  const minWidth = 250;
  const maxWidth = window.innerWidth - 300;

  const handleMouseDown = (e: React.MouseEvent) => {
    const startX = e.clientX;
    const startWidth = width;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = Math.min(maxWidth, Math.max(minWidth, startWidth + e.clientX - startX));
      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className={`${styles.explorer} ${styles[theme]}`} style={{ width }}>
      <ExplorerHeader
        title="탐색기"
        additionalMenu={
          <>
            <MenuDots/>
          </>
        }
      />
      <ExplorerContentsList title={'portfolio'}>
        1
      </ExplorerContentsList>
      <div className={`${styles.resizer} ${styles[theme]}`} onMouseDown={handleMouseDown} />
    </div>
  );
};

export default Explorer; 