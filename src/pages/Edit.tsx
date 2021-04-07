import "../styles/Edit.scss";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

type Keep = {
  id: string;
  title: string;
  todos: [];
};
interface Keeps {
  keeps: { editedKeep: Keep; isEdit: boolean };
}

export const Edit = () => {
  const { isEdit, editedKeep } = useSelector((state: Keeps) => state.keeps);

  return (
    <div className={`page edit ${!isEdit ? "edit--empty" : ""}`}>
      {!isEdit && !editedKeep ? (
        <NavLink to="/main" className="edit__empty">
          Select keep to Edit
        </NavLink>
      ) : null}
    </div>
  );
};
