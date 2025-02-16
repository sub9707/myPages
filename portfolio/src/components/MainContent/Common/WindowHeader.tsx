import React from 'react'
import styles from './WindowHeader.module.scss'
import WindowTabs from './WindowTabs'
import FilePath from './FilePath'

interface WindowHeaderProps {
  isPreview : boolean
}

const WindowHeader:React.FC<WindowHeaderProps> = ({isPreview}) => {
  return (
    <div className={styles.headerArea}>
      <WindowTabs/>
      {
        isPreview && <FilePath/>
      }
    </div>
  )
}

export default WindowHeader