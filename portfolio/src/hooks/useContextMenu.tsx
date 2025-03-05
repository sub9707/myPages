import { useState, useEffect } from 'react';
import { useFileContext } from '../context/FileContext';

const useContextMenu = () => {
  const { setEditorFiles, setPreviewFiles, editorFiles, previewFiles } = useFileContext();
  const [contextMenu, setContextMenu] = useState<{ visible: boolean; x: number; y: number; title: string; isPreview: boolean } | null>(null);

  const handleRightClick = (event: React.MouseEvent, title: string, isPreview: boolean) => {
    event.preventDefault();
    if (contextMenu?.visible) {
      setContextMenu(null);
      return;
    }
    setContextMenu({ visible: true, x: event.clientX, y: event.clientY, title, isPreview });
  };

  const handleCloseMenu = () => {
    setContextMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = () => setContextMenu(null);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setContextMenu(null);
      }
    };

    if (contextMenu?.visible) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [contextMenu]);

  return {
    contextMenu,
    handleRightClick,
    handleCloseMenu,
  };
};

export default useContextMenu;
