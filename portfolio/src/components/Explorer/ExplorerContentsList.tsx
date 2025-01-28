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
}

const ExplorerContentsList: React.FC<ExplorerContentListProps> = ({ title, children, setClickIndex, currentIndex, index, isExpanded }) => {
    const order = currentIndex === null
        ? index // 초기 상태에서 순서 유지
        : index < currentIndex
        ? index // 현재 선택된 항목 이전 항목
        : index > currentIndex
        ? index + 1 // 현재 선택된 항목 이후 항목
        : currentIndex + 1; // 선택된 항목은 가운데로

    return (
        <div
            className={`${styles.listWrapper} ${isExpanded ? styles.expanded : styles.collapsed}`}
            style={{ order }}
        >
            <button className={styles.listHeader} onClick={setClickIndex}>
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
