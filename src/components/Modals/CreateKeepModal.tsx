import "../../styles/CreateKeepModal.scss";
import "../../styles/Modal.scss";

import { Portal } from "react-portal";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ToDoItem } from "../Keep/ToDoItem";
import React, { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addKeep } from "../../redux/reducers/keepsReducer";
import { Todo } from "../../utils/types";

export const CreateKeepModal = (props: { closeModal: () => void }) => {
  const [keepTitleValue, setKeepTitleValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoValue, setTodoValue] = useState("");

  const dispatch = useDispatch();

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
      setTodos((prev) => [...prev, _todo]);
      setTodoValue("");
    }
  };

  const checkTodoHandler = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id)
          return {
            isChecked: !todo.isChecked,
            content: todo.content,
            id: todo.id,
          };
        return todo;
      })
    );
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const keepTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeepTitleValue(e.target.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const keep = {
      id: uuidv4(),
      title: keepTitleValue,
      todos: todos,
    };

    if (keep.title) {
      dispatch(addKeep(keep));
      props.closeModal();
    }
  };

  return (
    <Portal>
      <div className="base-modal create-modal base-animation">
        <form
          onSubmit={submitHandler}
          className="create-modal__body base-modal__body"
        >
          <div className="create-modal__header base-modal__header">
            <h2>Create Keep</h2>
            <div
              className="create-modal__close base-modal__close"
              onClick={props.closeModal}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="create-modal__form">
            <div className="column">
              <div className="base-input">
                <input
                  autoFocus
                  placeholder="Keep title"
                  onChange={keepTitleHandler}
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
                <button type="button" onClick={addTodoHandler}>
                  Add
                </button>
              </div>
            </div>
            <div className="column todo-list">
              <h3>ToDo List:</h3>
              {todos.map((todo) => {
                if (!todo) return null;

                return (
                  <ToDoItem
                    key={todo.id}
                    onClick={checkTodoHandler}
                    deleteHandler={deleteTodoHandler}
                    isEdit={true}
                    todo={todo}
                  />
                );
              })}
            </div>
          </div>
          <button type="submit" className="create-modal__submit">
            Create
          </button>
        </form>
      </div>
    </Portal>
  );
};
