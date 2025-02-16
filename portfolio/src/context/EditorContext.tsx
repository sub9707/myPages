import React, { createContext, useState, ReactNode } from "react";

interface EditorContextType {
  activeTab: string | null;
  setActiveTab: (tabId: string | null) => void;
}

export const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <EditorContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </EditorContext.Provider>
  );
};
