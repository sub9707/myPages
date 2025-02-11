import React, { useState } from 'react'
import Markdown from 'react-markdown';

import styles from './PreviewContent.module.scss';
import fileContent from "/src/components/MainContent/Files/test.md?raw";

const PreviewContent: React.FC = () => {
    const [code] = useState<string>(fileContent);
    return (
        <div className={styles.previewContent}>
            <Markdown>
                {code}
            </Markdown>
        </div>
    )
}

export default PreviewContent