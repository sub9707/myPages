import React, { useState } from "react";
import fileContent from "/src/components/MainContent/Files/test.md?raw";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from './CodeEditor.module.scss'
import MarkdownEditor from "@uiw/react-markdown-editor";
import './editorTest.scss'

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>(fileContent);

  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error('useContext가 ThemeProvider 내에서 사용되지 않음');
  }

  const { theme } = context;

  return (
    <MarkdownEditor
      value={code}
      onChange={(value, viewUpdate) => { }}
      className={styles.editor}
      visible={true}
      enableScroll={true}
      enablePreview={true}
      previewWidth="50%"
      showToolbar={true}
      height="88vh"
    />

  );
};

export default CodeEditor;
