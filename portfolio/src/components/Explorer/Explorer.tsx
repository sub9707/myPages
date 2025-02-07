import React, { useState } from 'react';
import styles from './Explorer.module.scss';
import ExplorerHeader from './ExplorerHeader';
import MenuDots from '../Common/MenuDots';
import ExplorerContentsList from './ExplorerContentsList';
import ContentList from './ContentList';

import ProfileFolder from '/src/assets/icons/folder-admin.svg?react';
import ProfileOpenFolder from '/src/assets/icons/folder-admin-open.svg?react';

interface ExplorerProps {
    theme: 'light' | 'dark';
}

const Explorer: React.FC<ExplorerProps> = ({ theme }) => {
    const [width, setWidth] = useState<number>(250);
    const [currentMenu, setCurrentMenu] = useState<number>(-1);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const minWidth = 250;
    const maxWidth = window.innerWidth - 300;

    const handleMouseDown = (e: React.MouseEvent) => {
        const startX = e.clientX;
        const startWidth = width;

        const handleMouseMove = (e: MouseEvent) => {
            const newWidth = Math.min(maxWidth, Math.max(minWidth, startWidth + e.clientX - startX));
            setWidth(newWidth);
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const selectCurrentMenu = (index: number) => {
        setCurrentMenu((prev) => (prev === index ? -1 : index));
    };

    return (
        <div className={`${styles.explorer} ${styles[theme]}`} style={{ width }}>
            <ExplorerHeader
                title="탐색기"
                additionalMenu={<MenuDots />}
            />
            <div className={styles.contentsContainer}>
                <ExplorerContentsList
                    key={0}
                    title="Portfolio"
                    index={0}
                    setClickIndex={() => selectCurrentMenu(0)}
                    currentIndex={currentMenu}
                    isExpanded={currentMenu === 0}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                >
                    <ContentList 
                        title="About Me" 
                        folderIconClose={ProfileFolder} 
                        folderIconOpen={ProfileOpenFolder} 
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                    />
                    <ContentList 
                        title="Projects" 
                        folderIconClose={ProfileFolder} 
                        folderIconOpen={ProfileOpenFolder} 
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                    />
                </ExplorerContentsList>
                <ExplorerContentsList
                    key={1}
                    title="Portfolio"
                    index={1}
                    setClickIndex={() => selectCurrentMenu(1)}
                    currentIndex={currentMenu}
                    isExpanded={currentMenu === 1}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                >
                    <ContentList 
                        title="Portfolio" 
                        folderIconClose={ProfileFolder} 
                        folderIconOpen={ProfileOpenFolder} 
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                    />
                </ExplorerContentsList>
            </div>
            <div className={`${styles.resizer} ${styles[theme]}`} onMouseDown={handleMouseDown} />
        </div>
    );
};

export default Explorer;
