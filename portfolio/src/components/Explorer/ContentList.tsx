import React, { useState } from 'react';
import styles from './ContentList.module.scss';
import Bracket_Right from '/src/assets/icons/bracket_right.svg?react';
import Bracket_Under from '/src/assets/icons/bracket_under.svg?react';
import FileContent from './FileContent';

interface FileItem {
    folder: string;
    filetype: string;
    filename: string;
}

interface ContentListProps {
    title: string;
    folderIconOpen: React.FC<React.SVGProps<SVGSVGElement>>;
    folderIconClose: React.FC<React.SVGProps<SVGSVGElement>>;
    selectedItem: string | null;
    setSelectedItem: (title: string) => void;
    files: FileItem[];
}

const ContentList: React.FC<ContentListProps> = ({
    title,
    folderIconOpen: FolderOpenIcon,
    folderIconClose: FolderCloseIcon,
    selectedItem,
    setSelectedItem,
    files
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen((prevState) => !prevState);
        setSelectedItem(title);
    };

    return (
        <div className={styles.contentList}>
            <div className={`${styles.folder} ${selectedItem === title ? styles.active : ''}`} onClick={toggleOpen}>
                <div className={styles.buttonWrapper}>
                    {isOpen ? <Bracket_Under className={styles.bracket} /> : <Bracket_Right className={styles.bracket} />}
                    <span className={styles.folderHeader}>
                        {isOpen ? <FolderOpenIcon className={styles.folderIcon} /> : <FolderCloseIcon className={styles.folderIcon} />}
                        <p>{title}</p>
                    </span>
                </div>
            </div>
            {isOpen && (
                <ul className={styles.subList}>
                    {files.map((file, index) => (
                        <li
                            key={index}
                            className={`${styles[file.filetype]} ${selectedItem === file.filename ? styles.active : ''}`}
                            onClick={() => setSelectedItem(file.filename)}
                        >
                            <FileContent fileType={file.filetype} title={file.filename} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ContentList;