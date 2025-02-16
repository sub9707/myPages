import React, { createContext, useState, ReactNode } from "react";

interface PreviewContextType {
  activeTab: string | null;
  setActiveTab: (tabId: string | null) => void;
}

export const PreviewContext = createContext<PreviewContextType | undefined>(undefined);

export const PreviewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <PreviewContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </PreviewContext.Provider>
  );
};
