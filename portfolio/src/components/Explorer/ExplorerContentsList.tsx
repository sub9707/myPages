import React, { ReactNode } from 'react';
import styles from './ExplorerContentsList.module.scss';

import Bracket_Right from '/src/assets/icons/bracket_right.svg?react';
import Bracket_Under from '/src/assets/icons/bracket_under.svg?react';

export interface ExplorerContentListProps {
    title: string;
    children: ReactNode;
    setClickIndex: () => void;
    currentIndex: number | null;
    index: number;
    isExpanded: boolean;
    selectedItem: string | null;
    setSelectedItem: (title: string) => void;
}

const ExplorerContentsList: React.FC<ExplorerContentListProps> = ({
    title,
    children,
    setClickIndex,
    currentIndex,
    index,
    isExpanded,
    selectedItem,
    setSelectedItem
}) => {
    return (
        <div className={`${styles.listWrapper} ${isExpanded ? styles.expanded : styles.collapsed}`}>
            <button
                className={styles.listHeader}
                onClick={setClickIndex}
            >
                <div className={styles.listState}>
                    {isExpanded ? <Bracket_Under className={styles.bracket} /> : <Bracket_Right className={styles.bracket} />}
                    <p>{title}</p>
                </div>
            </button>
            {isExpanded && <div className={styles.listContent}>{children}</div>}
        </div>
    );
};

export default ExplorerContentsList;
