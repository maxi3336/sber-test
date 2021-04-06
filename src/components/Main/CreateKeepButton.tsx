import { ReactComponent as KeepIcon } from "../../assets/icons/keep.svg";

type Props = {
  openModal: () => void;
};

export const CreateKeepButton = (props: Props) => {
  return (
    <button className="main__create-keep" onClick={props.openModal}>
      <div className="main__create-keep__icon">
        <KeepIcon />
      </div>
      <span>Create Keep</span>
    </button>
  );
};
