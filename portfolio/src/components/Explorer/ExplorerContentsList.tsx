import React, { ReactNode } from 'react'
import styles from './ExplorerContentsList.module.scss';

import Bracket_Right from '/src/assets/icons/bracket_right.svg?react';

export interface ExplorerContentListProps {
    title:string,
    children: ReactNode,
}

const ExplorerContentsList:React.FC<ExplorerContentListProps> = ({title, children}) => {
  return (
    <div className={styles.listWrapper}>
        <button className={styles.listHeader}>
            <div className={styles.listState}>
                <Bracket_Right className={styles.bracket}/>
                <p>{title}</p>
            </div>
            <div className={styles.listMenus}>
              {children}
            </div>
        </button>
    </div>
  )
}

export default ExplorerContentsList