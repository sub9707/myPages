import React from 'react'
import styles from './WindowTabButton.module.scss'

import SampleLogo from '/src/assets/icons/3d.svg';
import Close from '/src/assets/icons/close.svg?react';
import { useFileContext } from '../../../context/FileContext';

interface WindowTabButtonProps {
  title: string;
  selected: boolean;
  isPreview: boolean;
}

const WindowTabButton: React.FC<WindowTabButtonProps> = ({ title, selected, isPreview }) => {

  const { removePreviewFile, removeEditorFile  } = useFileContext();
  const closeClickHandler = () => {
    if (isPreview) {
      removePreviewFile(title);
    } else {
      removeEditorFile(title);
    }
  }
  return (
    <div className={`${styles.buttonWrapper} ${selected ? styles.active : ''}`}>
      <img className={styles.tabLogo} src={SampleLogo} alt='fileLogo' />
      <p className={styles.tabTitle}>{title}</p>
      <button className={styles.tabClose}>
        <Close className={styles.closeIcon} onClick={closeClickHandler} />
      </button>
    </div>
  )
}

export default WindowTabButton