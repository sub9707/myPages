import React from 'react';  // React를 명시적으로 임포트
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { EditorProvider } from './context/EditorContext';
import { PreviewProvider } from './context/PreviewContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <EditorProvider>
        <PreviewProvider>
          <App />
        </PreviewProvider>
      </EditorProvider>
    </BrowserRouter>
  </StrictMode>
);
