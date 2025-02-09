import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import fileContent from "/src/components/MainContent/Files/test.md?raw"; // 직접 불러오기

const CodeEditor: React.FC = () => {
  const [code] = useState<string>(fileContent);

  return (
    <Editor
      height="100%"
      defaultLanguage="markdown"
      value={code}
      options={{ readOnly: true, minimap: {enabled:false} }} 
      theme={'vs-dark'}
    />
  );
};

export default CodeEditor;
