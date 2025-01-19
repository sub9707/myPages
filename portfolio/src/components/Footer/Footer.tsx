import React from 'react';
import styles from './Footer.module.scss';

import Remote from '/src/assets/icons/remote.svg';
import Git from '/src/assets/icons/git.svg';
import FooterButton from './FooterButton';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <div className={`${styles.footer} ${styles[theme]}`}>
      <div className={styles.menuLeft}>
        <span><img src={Remote} alt='blue'/></span>
        <FooterButton icon={Git} text={'main*'} />
        <FooterButton icon={Git} text={'0'} />
        <FooterButton icon={Git} text={'0'} />
        <FooterButton icon={Git} text={'0'} />
        <FooterButton icon={Git} text={'Live Share'} />
      </div>
      <div className={styles.menuRight}>
      <FooterButton text={'줄 0, 열 0'} />
      <FooterButton text={'공백:2'} />
      <FooterButton text={'UTF-8'} />
      <FooterButton text={'CRLF'} />
      <FooterButton text={'{}'} />
      <FooterButton text={'TypeScript JSX'} />
      <FooterButton icon={Git} text={'Go Live'} />
      <FooterButton icon={Git} />
      </div>
    </div>
  );
};

export default Footer;
