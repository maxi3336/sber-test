import "../../styles/KeepItem.scss";

import { ToDoItem } from "./ToDoItem";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { useState } from "react";
import { DeleteConfirmModal } from "../Modals/DeleteConfirmModal";
import { useDispatch } from "react-redux";
import { deleteKeep, setEdited } from "../../redux/reducers/keepsReducer";
import { useHistory } from "react-router";
import Scrollbars from "react-custom-scrollbars";
import { Keep } from "../../utils/types";

export const KeepItem = (props: {
  keep: Keep;
  isEdit: boolean;
  deleteHandler: (id: string) => void;
  changeTodo: (id: string, content: string) => void;
  onClick: (id: string) => void;
}) => {
  const [deleteId, setDeleteId] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const deleteModalHandler = () => {
    setDeleteId(props.keep.id);
  };

  const closeModal = () => {
    setDeleteId("");
  };

  const deleteKeepHandler = () => {
    dispatch(deleteKeep({ id: props.keep.id }));
    closeModal();
  };

  const editKeepHandler = () => {
    dispatch(setEdited(props.keep));
    history.push("/edit");
  };

  return (
    <div className={`keep ${props.isEdit ? "keep--edit" : ""}`}>
      <div className="keep__header">
        <h3>{props.keep.title}</h3>
        <div className="keep__btns">
          {!props.isEdit ? (
            <div className="keep__edit" onClick={editKeepHandler}>
              <EditIcon />
            </div>
          ) : null}
          {!props.isEdit ? (
            <div className="keep__delete" onClick={deleteModalHandler}>
              <DeleteIcon />
            </div>
          ) : null}
        </div>
      </div>
      <div className="keep__todos-container">
        <Scrollbars>
          <div className="keep__todos">
            {props.keep.todos.map((todo) => (
              <ToDoItem
                key={todo.id}
                onClick={props.onClick}
                deleteHandler={props.deleteHandler}
                isEdit={props.isEdit}
                todo={todo}
                changeTodo={props.changeTodo}
              />
            ))}
          </div>
        </Scrollbars>
      </div>
      {deleteId ? (
        <DeleteConfirmModal
          deleteKeepHandler={deleteKeepHandler}
          id={props.keep.id}
          close={closeModal}
        />
      ) : null}
    </div>
  );
};
