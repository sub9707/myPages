import React from 'react';
import styles from './FooterButton.module.scss';

export interface FooterButtonProps {
  icon?: string;
  text?: string;
  onClick?: () => void;
  altText?: string;
}

const FooterButton: React.FC<FooterButtonProps> = ({ icon, text, onClick, altText = 'icon' }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {icon && <img src={icon} alt={altText} className={styles.icon} />}
      {text && <span className={styles.text}>{text}</span>}
    </button>
  );
};

export default FooterButton;
