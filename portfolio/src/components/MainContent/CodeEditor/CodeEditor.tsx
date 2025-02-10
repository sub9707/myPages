import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import fileContent from "/src/components/MainContent/Files/test.md?raw"; // 직접 불러오기
import { ThemeContext } from "../../../context/ThemeContext";

const CodeEditor: React.FC = () => {
  const [code] = useState<string>(fileContent);

  const context = React.useContext(ThemeContext);

  if (!context) {
      throw new Error('useContext가 ThemeProvider 내에서 사용되지 않음');
  }

  const { theme } = context;

  return (
    <Editor
      height="100%"
      defaultLanguage="markdown"
      value={code}
      options={{ readOnly: true, minimap: {enabled:false} }} 
      theme={theme == 'dark' ? 'vs-dark' : 'vs-light'}
    />
  );
};

export default CodeEditor;
