import React from 'react'
import styles from './WindowTabButton.module.scss'

import SampleLogo from '/src/assets/icons/3d.svg';
import Close from '/src/assets/icons/close.svg?react';

interface WindowTabButtonProps {
    title:string;
    selected: boolean;
}

const WindowTabButton:React.FC<WindowTabButtonProps> = ({title, selected}) => {
  return (
    <div className={`${styles.buttonWrapper} ${selected ? styles.active : ''}`}>
        <img className={styles.tabLogo} src={SampleLogo} alt='fileLogo'/>
        <p className={styles.tabTitle}>{title}</p>
        <button className={styles.tabClose}>
            <Close className={styles.closeIcon}/>
        </button>
    </div>
  )
}

export default WindowTabButton