import { ReactComponent as KeepIcon } from "../../assets/icons/keep.svg";

export const CreateKeepButton = () => {
  return (
    <button className="main__create-keep" onClick={() => alert("Gi")}>
      <div className="main__create-keep__icon">
        <KeepIcon />
      </div>
      <span>Create Keep</span>
    </button>
  );
};
