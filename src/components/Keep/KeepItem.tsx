import "../../styles/KeepItem.scss";

import { ToDoItem } from "./ToDoItem";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { useState } from "react";
import { DeleteConfirmModal } from "../Modals/DeleteConfirmModal";
import { useDispatch } from "react-redux";
import { deleteKeep } from "../../redux/reducers/keepsReducer";

type Keep = {
  id: string;
  title: string;
  todos: [];
};

export const KeepItem = (props: { keep: Keep }) => {
  const [deleteId, setDeleteId] = useState("");

  const dispatch = useDispatch();

  const deleteModalHandler = () => {
    setDeleteId(props.keep.id);
  };

  const closeModal = () => {
    setDeleteId("");
  };

  const deleteKeepHandler = (id: string) => {
    dispatch(deleteKeep({ id }));
    closeModal();
  };

  return (
    <div className="keep">
      <div className="keep__header">
        <h3>{props.keep.title}</h3>
        <div className="keep__btns">
          <div className="keep__edit">
            <EditIcon />
          </div>
          <div className="keep__delete" onClick={deleteModalHandler}>
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className="keep__todos">
        {props.keep.todos.map((todo) => (
          <ToDoItem
            onClick={() => {}}
            deleteHandler={() => {}}
            canBeDeleted={false}
            todo={todo}
          />
        ))}
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
