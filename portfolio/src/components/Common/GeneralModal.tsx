import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styles from './GeneralModal.module.scss';

export interface GeneralModalProps { 
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    showFooterButtons?: {
      confirm?: boolean;
      cancel?: boolean;
    };
    onConfirm?: () => void;
  }

const GeneralModal: React.FC<GeneralModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  showFooterButtons = { confirm: true, cancel: true },
  onConfirm,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <button className={styles.close} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.body}>{children}</div>
        <div className={styles.footer}>
          {showFooterButtons.cancel && (
            <button className={`${styles.button} ${styles.cancel}`} onClick={onClose}>
              취소
            </button>
          )}
          {showFooterButtons.confirm && (
            <button
              className={`${styles.button} ${styles.confirm}`}
              onClick={() => {
                onConfirm && onConfirm();
                onClose();
              }}
            >
              확인
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default GeneralModal;
