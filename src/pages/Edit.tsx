import { useSelector } from "react-redux";

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
    <div className="page edit">
      <div className="edit__top">
        {isEdit && editedKeep ? (
          <h3>{editedKeep.title}</h3>
        ) : (
          <h3 className="edit__empty">Select keep to Edit</h3>
        )}
      </div>
    </div>
  );
};
