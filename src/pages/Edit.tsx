import "../styles/Edit.scss";

import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { KeepItem } from "../components/Keep/KeepItem";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  removeEdited,
  deleteKeep,
  editKeep,
} from "../redux/reducers/keepsReducer";
import { DeleteConfirmModal } from "../components/Modals/DeleteConfirmModal";
import { Keep, Keeps } from "../utils/types";

export const Edit = () => {
  const [keep, setKeep] = useState<Keep>({
    id: "",
    title: "",
    todos: [],
  });
  const [todoValue, setTodoValue] = useState("");
  const [isDelete, setIsDelete] = useState(false);

  const { isEdit, editedKeep } = useSelector((state: Keeps) => state.keeps);

  const dispatch = useDispatch();
  const history = useHistory();

  const goToMain = () => history.push("/main");

  useEffect(() => {
    setKeep(editedKeep);
  }, [editedKeep]);

  const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeep((prev) => ({ ...prev, title: e.target.value }));
  };

  const todoValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const addTodoHandler = () => {
    const _todo = {
      id: uuidv4(),
      content: todoValue,
      isChecked: false,
    };

    if (_todo.content) {
      setKeep((prev) => ({ ...prev, todos: [...prev.todos, _todo] }));
      setTodoValue("");
    }
  };

  const markTodoHandler = (id: string) => {
    setKeep((prev) => ({
      ...prev,
      todos: prev.todos.map((todo) => {
        if (todo.id === id)
          return {
            id: todo.id,
            content: todo.content,
            isChecked: !todo.isChecked,
          };
        return todo;
      }),
    }));
  };

  const deleteTodoHandler = (id: string) => {
    setKeep((prev) => ({
      ...prev,
      todos: prev.todos.filter((todo) => todo.id !== id),
    }));
  };

  const saveHandler = () => {
    dispatch(editKeep(keep));
    dispatch(removeEdited());
    goToMain();
  };

  const declineHandler = () => {
    setKeep(editedKeep);
  };

  const deleteHandler = () => {
    dispatch(deleteKeep({ id: keep.id }));
    goToMain();
  };

  const closeHandler = () => {
    dispatch(removeEdited());
    goToMain();
  };

  if (keep && isEdit) {
    return (
      <div className="page edit">
        <div className="edit__content">
          <KeepItem
            keep={keep}
            isEdit={isEdit}
            onClick={markTodoHandler}
            deleteHandler={deleteTodoHandler}
          />

          <div className="edit__form">
            <div className="edit__inputs">
              <div className="base-input">
                <input
                  placeholder="Title"
                  value={keep.title}
                  onChange={changeTitleHandler}
                />
              </div>

              <div className="base-todo-input">
                <div className="base-input">
                  <input
                    placeholder="Add todo"
                    value={todoValue}
                    onChange={todoValueHandler}
                  />
                </div>
                <button onClick={addTodoHandler}>Add</button>
              </div>
            </div>

            <div className="edit__buttons">
              <button className="edit__btn edit__save" onClick={saveHandler}>
                Save changes
              </button>
              <button
                className="edit__btn edit__decline"
                onClick={declineHandler}
              >
                Decline changes
              </button>
              <button
                className="edit__btn edit__delete"
                onClick={() => setIsDelete(true)}
              >
                Delete keep
              </button>
              <button className="edit__btn edit__close" onClick={closeHandler}>
                Decline and Close
              </button>
            </div>
          </div>
        </div>
        {isDelete ? (
          <DeleteConfirmModal
            id={keep.id}
            close={() => setIsDelete(false)}
            deleteKeepHandler={deleteHandler}
          />
        ) : null}
      </div>
    );
  }

  return (
    <div className="page edit edit--empty">
      <NavLink to="/main" className="edit__empty">
        Select keep to Edit
      </NavLink>
    </div>
  );
};
