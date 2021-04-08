import "../../styles/ToDoItem.scss";

import { ReactComponent as UncheckedBox } from "../../assets/icons/unchecked-box.svg";
import { ReactComponent as CheckedBox } from "../../assets/icons/check-box.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { Todo } from "../../utils/types";

type Props = {
  onClick: (id: string) => void;
  deleteHandler: (id: string) => void;
  changeTodo: (id: string, content: string) => void;
  isEdit: boolean;
  todo: Todo;
};

export const ToDoItem = (props: Props) => {
  return (
    <div className="todo">
      <div
        className="todo__checkbox"
        onClick={() => props.onClick(props.todo.id)}
      >
        {!props.todo.isChecked ? <UncheckedBox /> : <CheckedBox />}
      </div>
      {props.isEdit ? (
        <input
          className={`todo__content--input ${
            props.todo.isChecked ? "todo__content--checked" : "todo__content"
          }`}
          value={props.todo.content}
          onChange={(e) => props.changeTodo(props.todo.id, e.target.value)}
        />
      ) : (
        <div
          className={
            props.todo.isChecked ? "todo__content--checked" : "todo__content"
          }
        >
          {props.todo.content}
        </div>
      )}

      {props.isEdit ? (
        <div
          className="todo__delete"
          onClick={() => props.deleteHandler(props.todo.id)}
        >
          <DeleteIcon />
        </div>
      ) : null}
    </div>
  );
};
