import React from 'react'
import styles from './CodeEditorArea.module.scss'
import CodeEditor from './CodeEditor'
import WindowHeader from '../Common/WindowHeader'

const CodeEditorArea: React.FC = () => {

    return (
        <div className={styles.editorWindow}>
            <div className={styles.windowTabs}>
            <WindowHeader isPreview={false}/>
            <WindowHeader isPreview={true}/>
            </div>
            <div className={styles.editorWrapper}>
                <CodeEditor />
            </div>
        </div>
    )
}

export default CodeEditorArea