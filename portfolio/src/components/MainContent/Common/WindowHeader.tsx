import React from 'react'
import styles from './WindowHeader.module.scss'
import WindowTabs from './WindowTabs'
import FilePath from './FilePath'

const WindowHeader:React.FC = () => {
  return (
    <div className={styles.headerArea}>
      <WindowTabs/>
      <FilePath/>
    </div>
  )
}

export default WindowHeader