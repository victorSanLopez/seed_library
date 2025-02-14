export type ConfirmationModalProps = {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export type PopupProps = {
  closePopup: () => void;
};
