import "../../styles/ToDoItem.scss";

import { ReactComponent as UncheckedBox } from "../../assets/icons/unchecked-box.svg";
import { ReactComponent as CheckedBox } from "../../assets/icons/check-box.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";

type Props = {
  onClick: () => void;
  deleteHandler: () => void;
  isChecked: boolean;
  canBeDeleted: boolean;
  content: string;
};

export const ToDoItem = (props: Props) => {
  return (
    <div className="todo">
      <div className="todo__checkbox" onClick={props.onClick}>
        {!props.isChecked ? <UncheckedBox /> : <CheckedBox />}
      </div>
      <div className="todo__content">{props.content}</div>
      {props.canBeDeleted ? (
        <div className="todo__delete" onClick={props.deleteHandler}>
          <DeleteIcon />
        </div>
      ) : null}
    </div>
  );
};
