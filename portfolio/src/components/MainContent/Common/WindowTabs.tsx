import React from 'react'
import styles from './WindowTabs.module.scss'
import WindowTabButton from './WindowTabButton'

const WindowTabs:React.FC = () => {
  return (
    <div className={styles.tabsArea}>
        <div className={styles.tabsContainer}>
            <WindowTabButton title={'test.tsx'}/>
            <WindowTabButton title={'longTitleTest.tsx'}/>
        </div>
        <div className={styles.controlMenu}>
            2
        </div>
    </div>
  )
}

export default WindowTabs