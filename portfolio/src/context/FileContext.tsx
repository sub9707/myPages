import React, { createContext, useContext, useState, ReactNode } from "react";

interface FileContextType {
  editorFiles: string[];
  previewFiles: string[];
  selectedEditorFile: string | null;
  selectedPreviewFile: string | null;
  addEditorFile: (fileName: string) => void;
  addPreviewFile: (fileName: string) => void;
  removeEditorFile: (fileName: string) => void;
  removePreviewFile: (fileName: string) => void;
  selectEditorFile: (fileName: string) => void;
  selectPreviewFile: (fileName: string) => void;
  isEditorFileExists: (fileName: string) => boolean;
  isPreviewFileExists: (fileName: string) => boolean;
  canAddEditorFile: (fileName: string) => boolean;
  canAddPreviewFile: (fileName: string) => boolean;
  setEditorFiles: React.Dispatch<React.SetStateAction<string[]>>;
  setPreviewFiles: React.Dispatch<React.SetStateAction<string[]>>;
}

// 파일 관리 컨텍스트 생성
const FileContext = createContext<FileContextType | null>(null);

interface FileProviderProps {
  children: ReactNode;
}

export const FileProvider: React.FC<FileProviderProps> = ({ children }) => {
  const [editorFiles, setEditorFiles] = useState<string[]>([]);
  const [previewFiles, setPreviewFiles] = useState<string[]>([]);
  const [selectedEditorFile, setSelectedEditorFile] = useState<string | null>(null);
  const [selectedPreviewFile, setSelectedPreviewFile] = useState<string | null>(null);

  // 에디터 파일 존재 여부 확인
  const isEditorFileExists = (fileName: string): boolean => editorFiles.includes(fileName);
  // 프리뷰 파일 존재 여부 확인
  const isPreviewFileExists = (fileName: string): boolean => previewFiles.includes(fileName);
  
  // 에디터 파일 추가 가능 여부 확인
  const canAddEditorFile = (fileName: string): boolean => !isEditorFileExists(fileName);
  // 프리뷰 파일 추가 가능 여부 확인
  const canAddPreviewFile = (fileName: string): boolean => !isPreviewFileExists(fileName);

  // 에디터 파일 추가
  const addEditorFile = (fileName: string): void => {
    if (canAddEditorFile(fileName)) {
      setEditorFiles((prev) => [...prev, fileName]);
      setSelectedEditorFile(fileName);
    }
  };

  // 프리뷰 파일 추가
  const addPreviewFile = (fileName: string): void => {
    if (canAddPreviewFile(fileName)) {
      setPreviewFiles((prev) => [...prev, fileName]);
      setSelectedPreviewFile(fileName);
    }
  };

  // 에디터 파일 제거
  const removeEditorFile = (fileName: string): void => {
    setEditorFiles((prev) => {
      const updatedFiles = prev.filter((file) => file !== fileName);
      setSelectedEditorFile(updatedFiles.length > 0 ? updatedFiles[updatedFiles.length - 1] : null);
      return updatedFiles;
    });
  };

  // 프리뷰 파일 제거
  const removePreviewFile = (fileName: string): void => {
    setPreviewFiles((prev) => {
      const updatedFiles = prev.filter((file) => file !== fileName);
      setSelectedPreviewFile(updatedFiles.length > 0 ? updatedFiles[updatedFiles.length - 1] : null);
      return updatedFiles;
    });
  };

  // 에디터 파일 선택
  const selectEditorFile = (fileName: string): void => {
    if (isEditorFileExists(fileName)) setSelectedEditorFile(fileName);
  };

  // 프리뷰 파일 선택
  const selectPreviewFile = (fileName: string): void => {
    if (isPreviewFileExists(fileName)) setSelectedPreviewFile(fileName);
  };

  return (
    <FileContext.Provider
      value={{
        editorFiles,
        previewFiles,
        selectedEditorFile,
        selectedPreviewFile,
        addEditorFile,
        addPreviewFile,
        removeEditorFile,
        removePreviewFile,
        selectEditorFile,
        selectPreviewFile,
        isEditorFileExists,
        isPreviewFileExists,
        canAddEditorFile,
        canAddPreviewFile,
        setEditorFiles,
        setPreviewFiles,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

// 컨텍스트를 사용하는 커스텀 훅
export const useFileContext = (): FileContextType => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error("useFileContext must be used within a FileProvider");
  }
  return context;
};
