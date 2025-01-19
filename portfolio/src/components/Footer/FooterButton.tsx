// FooterButton.tsx
import React from 'react';
import styles from './FooterButton.module.scss';

export interface FooterButtonProps {
  icon?: string; // 아이콘 이미지 경로
  text?: string; // 버튼 텍스트
  onClick?: () => void; // 클릭 이벤트 핸들러
  altText?: string; // 아이콘의 대체 텍스트
}

const FooterButton: React.FC<FooterButtonProps> = ({ icon, text, onClick, altText = 'icon' }) => {
  return (
    <span className={styles.button} onClick={onClick}>
      {icon && <img src={icon} alt={altText} className={styles.icon} />}
      {text && <span className={styles.text}>{text}</span>}
    </span>
  );
};

export default FooterButton;
