import "../../styles/DeleteConfirmModal.scss";

import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

export const DeleteConfirmModal = (props: {
  id: string;
  close: () => void;
  deleteKeepHandler: (id: string) => void;
}) => {
  return (
    <div className="base-modal confirm-modal">
      <div className="base-modal__body" style={{ width: 400 }}>
        <div className="base-modal__header">
          <h2>Are you shure?</h2>
          <div className="base-modal__close" onClick={props.close}>
            <CloseIcon />
          </div>
        </div>
        <div className="confirm-modal__buttons">
          <button className="confirm-modal__decline" onClick={props.close}>
            No
          </button>
          <button
            className="confirm-modal__confirm"
            onClick={() => props.deleteKeepHandler(props.id)}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
