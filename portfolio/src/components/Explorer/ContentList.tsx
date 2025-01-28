import React, { useState } from 'react';
import styles from './ContentList.module.scss';

import Bracket_Right from '/src/assets/icons/bracket_right.svg?react';
import Bracket_Under from '/src/assets/icons/bracket_under.svg?react';

const ContentList: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <ul className={styles.contentList}>
            <li>
                <div className={styles.folder} onClick={toggleOpen}>
                    {isOpen ? <Bracket_Under /> : <Bracket_Right />}
                    <span>{isOpen ? 'Open' : 'Close'}</span>
                </div>
                {isOpen && (
                    <ul className={styles.subList}>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                )}
            </li>
        </ul>
    );
};

export default ContentList;
