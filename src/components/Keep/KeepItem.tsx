import "../../styles/KeepItem.scss";

import { ToDoItem } from "./ToDoItem";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";

type Keep = {
  id: string;
  title: string;
  todos: [];
};

export const KeepItem = (props: { keep: Keep }) => {
  console.log(props.keep);

  return (
    <div className="keep">
      <div className="keep__header">
        <h3>{props.keep.title}</h3>
        <div className="keep__btns">
          <div className="keep__edit">
            <EditIcon />
          </div>
          <div className="keep__delete">
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
    </div>
  );
};
