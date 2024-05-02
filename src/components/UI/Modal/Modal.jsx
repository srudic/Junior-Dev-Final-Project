import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, closeModal, children }) => {
  return createPortal(
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
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
