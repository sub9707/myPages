import React from 'react';
import styles from './Footer.module.scss';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <div className={`${styles.footer} ${styles[theme]}`}>
      <span>Git</span>
      <span>Live Share</span>
    </div>
  );
};

export default Footer; 