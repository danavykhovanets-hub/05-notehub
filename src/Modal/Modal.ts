import { useEffect } from "react";
import { createPortal } from "react-dom";
import css from './Modal.module.css';
/// import type Note from '../Note/Note';

///interface ???Props {
/// type >???
  /// onClose: () => void;}

export default function Modal ({????}) :???Props{
    useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(

<div
  className={css.backdrop}
  role="dialog"
  aria-modal="true"
  onClick={onClose}
        >
          &times;
        </button>
        ///<img/>????

  <div className={css.modal}>
    {/* */}
  </div>
</div>
 document.body);
  }

/// Модальне вікно має створюватись через createPortal, щоб рендерити модалку поза межами основного дерева компонентів, та закриватися при кліку на бекдроп і натисканням на клавішу Escape.

