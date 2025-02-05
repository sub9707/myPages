import React, { useState } from 'react';
import styles from './ContentList.module.scss';

import Bracket_Right from '/src/assets/icons/bracket_right.svg?react';
import Bracket_Under from '/src/assets/icons/bracket_under.svg?react';

interface ContentListProps {
    title: string;
    folderIconOpen: React.FC<React.SVGProps<SVGSVGElement>>;
    folderIconClose: React.FC<React.SVGProps<SVGSVGElement>>;
    selectedItem: string | null;
    setSelectedItem: (title: string) => void;
}

const ContentList: React.FC<ContentListProps> = ({ title, folderIconOpen: FolderOpenIcon, folderIconClose: FolderCloseIcon, selectedItem, setSelectedItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen((prevState) => !prevState);
        setSelectedItem(title);
    };

    return (
        <ul className={styles.contentList}>
            <li>
                <div className={`${styles.folder} ${selectedItem === title ? styles.active : ''}`} onClick={toggleOpen}>
                    {isOpen ? <Bracket_Under className={styles.bracket} /> : <Bracket_Right className={styles.bracket} />}
                    <span className={styles.folderHeader}>
                        {isOpen ? <FolderOpenIcon className={styles.folderIcon} /> : <FolderCloseIcon className={styles.folderIcon}/>}
                        <p>{title}</p>
                    </span>
                </div>
                {isOpen && (
                    <ul className={styles.subList}>
                        <li className={`${styles.plainType} ${selectedItem === "Item 1" ? styles.active : ''}`} onClick={() => setSelectedItem("Item 1")}><p>Item 1</p></li>
                        <li className={`${styles.mdType} ${selectedItem === "Item 2" ? styles.active : ''}`} onClick={() => setSelectedItem("Item 2")}><p>Item 2</p></li>
                        <li className={`${styles.tsType} ${selectedItem === "Item 3" ? styles.active : ''}`} onClick={() => setSelectedItem("Item 3")}><p>Item 3</p></li>
                    </ul>
                )}
            </li>
        </ul>
    );
};

export default ContentList;
