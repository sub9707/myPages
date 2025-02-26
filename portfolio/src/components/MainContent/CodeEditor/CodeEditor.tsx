import React, { useState } from "react";
import fileContent from "/src/components/MainContent/Files/test.md?raw";
import { ThemeContext } from "../../../context/ThemeContext";
import MDEditor from "@uiw/react-md-editor";
import styles from './CodeEditor.module.scss'

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>(fileContent);

  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error('useContext가 ThemeProvider 내에서 사용되지 않음');
  }

  const { theme } = context;

  return (
      <MDEditor
        value={code}
        onChange={(value) => setCode(value ?? "")} 
        commands={[]}
        className={styles.editor}
        height={'100%'}
      />
  );
};

export default CodeEditor;
