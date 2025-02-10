import React from 'react'
import styles from './FilePath.module.scss'

const FilePath:React.FC = () => {
  return (
    <div className={styles.pathWrapper}>
        src &lt; portfolio &lt; test.tsx
    </div>
  )
}

export default FilePath