import React from 'react'
import styles from './CodeEditorArea.module.scss'
import CodeEditor from './CodeEditor'
import WindowHeader from '../Common/WindowHeader'

const CodeEditorArea:React.FC = () => {
  return (
    <div className={styles.editorWindow}>
        <WindowHeader/>
        <div className={styles.editorWrapper}>
            <CodeEditor />
        </div>
    </div>
  )
}

export default CodeEditorArea