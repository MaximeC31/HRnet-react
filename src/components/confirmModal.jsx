import "./confirmModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const ConfirmModal = ({ onClose }) => {
  return (
    <section
      className="confirm-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-modal-message"
    >
      <div className="confirm-modal__overlay">
        <div className="confirm-modal__content">
          <p id="confirm-modal-message" className="confirm-modal__message">
            "New Employee Created"
          </p>
          <button
            type="button"
            className="confirm-modal__button"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faXmark}
        className="confirm-modal__close-icon"
        onClick={onClose}
      />
    </section>
  );
};
