import type { IModal } from "@/shared/Types/Modal";
import styles from "./Modal.module.css";
import { useEffect } from "react";

function Modal({ isOpen, onClose, children, TextModal }: IModal) {
  useEffect(() => {
    const ClickEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", ClickEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", ClickEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.wapper_modal} onClick={onClose}>
      <div className={styles.modal_main} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modal_title}>{TextModal}</h2>

        <button className={styles.modal_btn} onClick={onClose}>
          ×
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
