import React from 'react';
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
  const { removePreviewFile, removeEditorFile, selectEditorFile, selectPreviewFile } = useFileContext();

  const closeClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isPreview) {
      removePreviewFile(title);
    } else {
      removeEditorFile(title);
    }
  };

  const selectClickHandler = () => {
    if (isPreview) {
      selectPreviewFile(title);
    } else {
      selectEditorFile(title);
    }
  };

  return (
    <div 
      className={`${styles.buttonWrapper} ${selected ? styles.active : ''}`} 
      onClick={selectClickHandler} // 클릭 시 해당 파일 선택
    >
      <img className={styles.tabLogo} src={SampleLogo} alt='fileLogo' />
      <p className={styles.tabTitle}>{title}</p>
      <button className={styles.tabClose} onClick={closeClickHandler}>
        <Close className={styles.closeIcon} />
      </button>
    </div>
  );
};

export default WindowTabButton;
