import React, { useEffect, useState } from "react";
import { useFileContext } from "../../../context/FileContext";
import styles from "./CodeEditor.module.scss";
import MarkdownEditor from "@uiw/react-markdown-editor";
import "./editorTest.scss";

const CodeEditor: React.FC = () => {
  const { selectedEditorFile, selectedPreviewFile, previewFiles } = useFileContext();
  const [code, setCode] = useState<string>("");
  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(true);

  useEffect(() => {
    if (selectedEditorFile) {
      fetch(`/src/assets/markdown/${selectedEditorFile}.md`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("파일을 찾을 수 없습니다.");
          }
          return response.text();
        })
        .then((text) => setCode(text))
        .catch((err) => console.error("파일을 불러오는 데 실패했습니다.", err));
    } else {
      setCode("");
    }
  }, [selectedEditorFile]);

  // 프리뷰 모드 설정
  useEffect(() => {
    if (selectedPreviewFile) {
      setIsPreviewMode(true);
    } else if (previewFiles.length > 0) {
      setIsPreviewMode(true);
    }
  }, [selectedPreviewFile, previewFiles]);

  // 선택된 파일이 없으면 에디터 숨김
  if (!selectedEditorFile) {
    return null;
  }

  return (
    <MarkdownEditor
      value={code}
      onChange={(value) => setCode(value || "")}
      className={styles.editor}
      visible={true}
      enableScroll={true}
      enablePreview={isPreviewMode} // 프리뷰 모드 활성화/비활성화
      previewWidth="50%"
      showToolbar={true}
      height="88vh"
    />
  );
};

export default CodeEditor;
