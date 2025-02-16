import React from 'react';
import styles from './WindowTabs.module.scss';
import WindowTabButton from './WindowTabButton';

import Dots from '/src/assets/icons/dots.svg?react';

const WindowTabs:React.FC = () => {
  return (
    <div className={styles.tabsArea}>
        <div className={styles.tabsContainer}>
            <WindowTabButton title={'test.tsx'} selected/>
            <WindowTabButton title={'longTitleTest.tsx'} selected={false}/>
        </div>
        <div className={styles.controlMenu}>
            <button className={styles.controlButton}>
              <Dots className={styles.dots} />
            </button>
        </div>
    </div>
  )
}

export default WindowTabs