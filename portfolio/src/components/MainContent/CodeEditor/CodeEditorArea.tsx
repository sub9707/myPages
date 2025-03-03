import React from 'react';
import styles from './CodeEditorArea.module.scss';
import CodeEditor from './CodeEditor';
import WindowHeader from '../Common/WindowHeader';
import { useFileContext } from '../../../context/FileContext';

const CodeEditorArea: React.FC = () => {
    const { editorFiles, previewFiles } = useFileContext();

    return (
        <div className={styles.editorWindow}>
            <div className={styles.windowTabs}>
                {editorFiles.length > 0 && <WindowHeader isPreview={false} />}
                {previewFiles.length > 0 && <WindowHeader isPreview={true} />}
            </div>
            <div className={styles.editorWrapper}>
                <CodeEditor />
            </div>
        </div>
    );
};

export default CodeEditorArea;
