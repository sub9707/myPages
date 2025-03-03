import React, { useState, useEffect } from 'react';
import styles from './WindowTabButton.module.scss';

import SampleLogo from '/src/assets/icons/3d.svg';
import Close from '/src/assets/icons/close.svg?react';
import { useFileContext } from '../../../context/FileContext';

interface WindowTabButtonProps {
  title: string;
  selected: boolean;
  isPreview: boolean;
}

const WindowTabButton: React.FC<WindowTabButtonProps> = ({ title, selected, isPreview }) => {
  const { removePreviewFile, removeEditorFile, editorFiles, previewFiles, setEditorFiles, setPreviewFiles, selectEditorFile, selectPreviewFile } = useFileContext();
  const [contextMenu, setContextMenu] = useState<{ visible: boolean; x: number; y: number } | null>(null);

  const closeClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isPreview) {
      removePreviewFile(title);
    } else {
      removeEditorFile(title);
    }
  };

  const leftClickHandler = () => {
    // 좌클릭 시 해당 파일 선택
    if (isPreview) {
      selectPreviewFile(title);
    } else {
      selectEditorFile(title);
    }
  };

  const rightClickHandler = (event: React.MouseEvent) => {
    event.preventDefault(); // 기본 우클릭 메뉴 방지

    // 이미 컨텍스트 메뉴가 열려 있으면 닫기
    if (contextMenu?.visible) {
      setContextMenu(null);
      return;
    }

    setContextMenu({ visible: true, x: event.clientX, y: event.clientY });
  };

  const closeAllTabs = () => {
    if (isPreview) {
      setPreviewFiles([]);
    } else {
      setEditorFiles([]);
    }
    setContextMenu(null);
  };

  const closeOtherTabs = () => {
    if (isPreview) {
      setPreviewFiles([title]);
    } else {
      setEditorFiles([title]);
    }
    setContextMenu(null);
  };

  const closeRightTabs = () => {
    if (isPreview) {
      const index = previewFiles.indexOf(title);
      setPreviewFiles(previewFiles.slice(0, index + 1));
    } else {
      const index = editorFiles.indexOf(title);
      setEditorFiles(editorFiles.slice(0, index + 1));
    }
    setContextMenu(null);
  };

  // 외부 클릭 또는 ESC 키를 누르면 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = () => setContextMenu(null);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setContextMenu(null);
      }
    };

    if (contextMenu?.visible) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [contextMenu]);

  return (
    <div 
      className={`${styles.buttonWrapper} ${selected ? styles.active : ''}`} 
      onClick={leftClickHandler} // 좌클릭 이벤트 추가
      onContextMenu={rightClickHandler} // 우클릭 이벤트 추가
    >
      <img className={styles.tabLogo} src={SampleLogo} alt="fileLogo" />
      <p className={styles.tabTitle}>{title}</p>
      <button className={styles.tabClose} onClick={closeClickHandler}>
        <Close className={styles.closeIcon} />
      </button>

      {/* 컨텍스트 메뉴 */}
      {contextMenu?.visible && (
        <ul 
          className={styles.contextMenu} 
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onClick={(event) => event.stopPropagation()} // 메뉴 클릭 시 이벤트 버블링 방지
        >
          <li onClick={closeAllTabs}>모든 탭 닫기</li>
          <li onClick={closeClickHandler}>현재 탭 닫기</li>
          <li onClick={closeOtherTabs}>기타 항목 닫기</li>
          <li onClick={closeRightTabs}>우측 탭 닫기</li>
        </ul>
      )}
    </div>
  );
};

export default WindowTabButton;
