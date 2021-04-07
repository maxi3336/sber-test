import "../../styles/CreateKeepModal.scss";

import { Portal } from "react-portal";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ToDoItem } from "../Keep/ToDoItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addKeep } from "../../redux/reducers/keepsReducer";

type Todo = {
  id: string;
  content: string;
  isChecked: boolean;
};

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

  const submitHandler = () => {
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
                <input placeholder="Keep title" onChange={keepTitleHandler} />
              </div>
              <div className="create-modal__add-todo">
                <div className="create-modal__input">
                  <input
                    placeholder="Add todo"
                    value={todoValue}
                    onChange={todoValueHandler}
                  />
                </div>
                <button onClick={addTodoHandler}>Add</button>
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
                    canBeDeleted
                    todo={{
                      id: todo.id,
                      isChecked: todo.isChecked,
                      content: todo.content,
                    }}
                  />
                );
              })}
            </div>
          </div>
          <button className="create-modal__submit" onClick={submitHandler}>
            Create
          </button>
        </div>
      </div>
    </Portal>
  );
};
