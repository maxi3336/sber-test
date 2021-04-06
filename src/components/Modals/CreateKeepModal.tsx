import "../../styles/CreateKeepModal.scss";

import { Portal } from "react-portal";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ToDoItem } from "../Keep/ToDoItem";

export const CreateKeepModal = (props: { closeModal: () => void }) => {
  return (
    <Portal>
      <div className="create-modal base-animation">
        <div className="create-modal__body">
          <div className="create-modal__header">
            <h2>Create Keep</h2>
            <div className="create-modal__close" onClick={props.closeModal}>
              <CloseIcon />
            </div>
          </div>
          <div className="create-modal__form">
            <div className="column">
              <div className="create-modal__input create-modal__input--title">
                <input placeholder="Keep title" />
              </div>
              <div className="create-modal__add-todo">
                <div className="create-modal__input">
                  <input placeholder="Add todo" />
                </div>
                <button>Add</button>
              </div>
            </div>
            <div className="column todo-list">
              <h3>ToDo List:</h3>
              <ToDoItem
                onClick={() => {}}
                isChecked={false}
                content="Heasdfasdfasdfasdfasdfasdfsllo"
                deleteHandler={() => {}}
                canBeDeleted
              />
              <ToDoItem
                onClick={() => {}}
                isChecked={false}
                content="Heasdfasdfasdfasdfasdfasdfsllo"
                deleteHandler={() => {}}
                canBeDeleted
              />
              <ToDoItem
                onClick={() => {}}
                isChecked={false}
                content="Heasdfasdfasdfasdfasdfasdfsllo"
                deleteHandler={() => {}}
                canBeDeleted
              />
              <ToDoItem
                onClick={() => {}}
                isChecked={false}
                content="Heasdfasdfasdfasdfasdfasdfsllo"
                deleteHandler={() => {}}
                canBeDeleted
              />
              <ToDoItem
                onClick={() => {}}
                isChecked={false}
                content="Heasdfasdfasdfasdfasdfasdfsllo"
                deleteHandler={() => {}}
                canBeDeleted
              />
            </div>
          </div>
          <button className="create-modal__submit">Create</button>
        </div>
      </div>
    </Portal>
  );
};
