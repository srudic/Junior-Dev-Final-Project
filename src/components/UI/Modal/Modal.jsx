import styles from "./Modal.module.css";
import { useState } from "react";

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <div>
      {isOpen && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
