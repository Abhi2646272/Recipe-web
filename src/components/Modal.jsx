// Modal.js
import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ children, closeModal }) => {
  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeBtn} onClick={closeModal}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
