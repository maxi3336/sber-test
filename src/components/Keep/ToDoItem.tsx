import "../../styles/ToDoItem.scss";

import { ReactComponent as UncheckedBox } from "../../assets/icons/unchecked-box.svg";
import { ReactComponent as CheckedBox } from "../../assets/icons/check-box.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";

type Props = {
  onClick: (id: string) => void;
  deleteHandler: (id: string) => void;
  canBeDeleted: boolean;
  todo: {
    id: string;
    isChecked: boolean;
    content: string;
  };
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
      <div
        className={
          props.todo.isChecked ? "todo__content--checked" : "todo__content"
        }
      >
        {props.todo.content}
      </div>
      {props.canBeDeleted ? (
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
