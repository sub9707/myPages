import React from 'react'
import styles from './WindowTabButton.module.scss'

import SampleLogo from '/src/assets/icons/3d.svg';

interface WindowTabButtonProps {
    title:string;
}

const WindowTabButton:React.FC<WindowTabButtonProps> = ({title}) => {
  return (
    <div className={styles.buttonWrapper}>
        <img className={styles.tabLogo} src={SampleLogo} alt='fileLogo'/>
        <p className={styles.tabTitle}>{title}</p>
        <button className={styles.tabClose}>x</button>
    </div>
  )
}

export default WindowTabButton