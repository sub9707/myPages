import React from 'react';
import styles from './ContextMenu.module.scss';

interface ContextMenuProps {
  contextMenu: { visible: boolean; x: number; y: number; title: string; isPreview: boolean } | null;
  closeMenu: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ contextMenu, closeMenu }) => {
  if (!contextMenu?.visible) return null;

  return (
    <ul
      className={styles.contextMenu}
      style={{ top: contextMenu.y, left: contextMenu.x }}
      onClick={(event) => event.stopPropagation()}
    >
      <li onClick={() => closeMenu()}>모든 탭 닫기</li>
      <li onClick={() => closeMenu()}>현재 탭 닫기</li>
      <li onClick={() => closeMenu()}>기타 항목 닫기</li>
      <li onClick={() => closeMenu()}>우측 탭 닫기</li>
    </ul>
  );
};

export default ContextMenu;
