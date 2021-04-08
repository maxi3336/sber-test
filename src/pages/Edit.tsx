import "../styles/Edit.scss";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { KeepItem } from "../components/Keep/KeepItem";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  content: string;
  isChecked: boolean;
};

type Keep = {
  id: string;
  title: string;
  todos: Todo[];
};
interface Keeps {
  keeps: { editedKeep: Keep; isEdit: boolean };
}

export const Edit = () => {
  const [keep, setKeep] = useState<Keep>({
    id: "",
    title: "",
    todos: [],
  });
  const [todoValue, setTodoValue] = useState("");

  const { isEdit, editedKeep } = useSelector((state: Keeps) => state.keeps);

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

  const deleteTodoHandler = (id: string) => {};

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
        </div>
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
