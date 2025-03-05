import React from 'react';
import styles from './WindowTabButton.module.scss';
import SampleLogo from '/src/assets/icons/3d.svg';
import Close from '/src/assets/icons/close.svg?react';
import ContextMenu from './ContextMenu';
import { useFileContext } from '../../../context/FileContext';
import useContextMenu from '../../../hooks/useContextMenu';

interface WindowTabButtonProps {
  title: string;
  selected: boolean;
  isPreview: boolean;
}

const WindowTabButton: React.FC<WindowTabButtonProps> = ({ title, selected, isPreview }) => {
  const { removePreviewFile, removeEditorFile, selectEditorFile, selectPreviewFile } = useFileContext();
  const { contextMenu, handleRightClick, handleCloseMenu } = useContextMenu();

  const closeClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isPreview) {
      removePreviewFile(title);
    } else {
      removeEditorFile(title);
    }
  };

  const leftClickHandler = () => {
    if (isPreview) {
      selectPreviewFile(title);
    } else {
      selectEditorFile(title);
    }
  };

  return (
    <div
      className={`${styles.buttonWrapper} ${selected ? styles.active : ''}`}
      onClick={leftClickHandler}
      onContextMenu={(event) => handleRightClick(event, title, isPreview)}
    >
      <img className={styles.tabLogo} src={SampleLogo} alt="fileLogo" />
      <p className={styles.tabTitle}>{title}</p>
      <button className={styles.tabClose} onClick={closeClickHandler}>
        <Close className={styles.closeIcon} />
      </button>

      {/* 컨텍스트 메뉴 */}
      <ContextMenu contextMenu={contextMenu} closeMenu={handleCloseMenu} />
    </div>
  );
};

export default WindowTabButton;
