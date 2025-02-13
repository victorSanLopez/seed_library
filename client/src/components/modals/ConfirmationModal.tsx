import Modal from "react-modal";
import type { ConfirmationModalProps } from "../../types/modal.d.ts";
import style from "./confirmationModal.module.css"; // Assure-toi d'ajouter le style

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      contentLabel="Confirmation"
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <div className={style.modalContent}>
        <p>{message}</p>
        <div className={style.actions}>
          <button
            type="button"
            onClick={onConfirm}
            className={style.confirmButton}
          >
            Confirmer
          </button>
          <button
            type="button"
            onClick={onCancel}
            className={style.cancelButton}
          >
            Annuler
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
