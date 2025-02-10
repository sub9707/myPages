import React from 'react'
import styles from './PreviewArea.module.scss'
import WindowHeader from '../Common/WindowHeader'
import PreviewContent from './PreviewContent'

const PreviewArea:React.FC = () => {
  return (
    <div className={styles.previewWindow}>
      <WindowHeader/>
      <PreviewContent/>
    </div>
  )
}

export default PreviewArea