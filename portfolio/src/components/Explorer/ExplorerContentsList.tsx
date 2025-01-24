import React, { ReactNode } from 'react'
import styles from './ExplorerContentsList.module.scss';

import Bracket_Right from '/src/assets/icons/bracket_right.svg?react';
import Bracket_Under from '/src/assets/icons/bracket_under.svg?react';

export interface ExplorerContentListProps {
    title:string,
    children: ReactNode,
    setClickIndex:()=>void,
    currentIndex:number,
    index:number
}

const ExplorerContentsList:React.FC<ExplorerContentListProps> = ({title, children, setClickIndex, currentIndex, index}) => {

  return (
    <div className={styles.listWrapper}>
        <button className={styles.listHeader} onClick={()=>setClickIndex()}>
            <div className={styles.listState}>
              {
                index == currentIndex ? <Bracket_Under className={styles.bracket}/> : <Bracket_Right className={styles.bracket}/>
              }
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