import React from 'react';
import styles from './Footer.module.scss';

import Remote from '/src/assets/icons/remote.svg';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <div className={`${styles.footer} ${styles[theme]}`}>
      <div className={styles.menuLeft}>
        <span><img src={Remote} alt='blue'/></span>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
      <div className={styles.menuRight}>
        <span>Git</span>
        <span>Live Share</span>
        <span>Docs</span>
      </div>
    </div>
  );
};

export default Footer;
