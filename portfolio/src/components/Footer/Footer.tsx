import React from 'react';
import styles from './Footer.module.scss';

import Antenna from '/src/assets/icons/antenna.svg';
import Remote from '/src/assets/icons/remote.svg';
import Git from '/src/assets/icons/git2.svg';
import Rotate from '/src/assets/icons/rotate.svg';
import Cancel from '/src/assets/icons/cancel.svg';
import Warn from '/src/assets/icons/warn.svg';
import Signal from '/src/assets/icons/signal.svg';
import Share from '/src/assets/icons/share.svg';
import Alarm from '/src/assets/icons/alarm.svg';

import FooterButton from './FooterButton';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <div className={`${styles.footer}`}>
      <div className={styles.menuLeft}>
        <span><img src={Remote} alt='blue'/></span>
        <FooterButton icon={Git} text={'main*'} />
        <FooterButton icon={Rotate} />
        <FooterButton icon={Cancel} text={'0'} />
        <FooterButton icon={Warn} text={'0'} />
        <FooterButton icon={Antenna} text={'0'} />
        <FooterButton icon={Share} text={'Live Share'} />
      </div>
      <div className={styles.menuRight}>
      <FooterButton text={'줄 0, 열 0'} />
      <FooterButton text={'공백:2'} />
      <FooterButton text={'UTF-8'} />
      <FooterButton text={'CRLF'} />
      <FooterButton text={'{}'} />
      <FooterButton text={'TypeScript JSX'} />
      <FooterButton icon={Signal} text={'Go Live'} />
      <FooterButton icon={Alarm} />
      </div>
    </div>
  );
};

export default Footer;
