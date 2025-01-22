import React from 'react';
import styles from './ExplorerHeader.module.scss';

type ExplorerHeaderProps = {
  title: string;
  additionalMenu?: React.ReactNode;
};

const ExplorerHeader: React.FC<ExplorerHeaderProps> = ({ title, additionalMenu }) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerLeft}>{title}</div>
      <div className={styles.headerRight}>
        {additionalMenu}
      </div>
    </div>
  );
};

export default ExplorerHeader;
