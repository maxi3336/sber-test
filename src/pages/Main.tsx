import "../styles/Main.scss";

import { CreateKeepButton } from "../components/Main/CreateKeepButton";
import { useState } from "react";
import { CreateKeepModal } from "../components/Modals/CreateKeepModal";
import { useSelector } from "react-redux";
import { KeepItem } from "../components/Keep/KeepItem";

type Keep = {
  id: string;
  title: string;
  todos: [];
};
interface Keeps {
  keeps: { keeps: Keep[] };
}

export const Main = () => {
  const [isModal, setIsModal] = useState(false);

  const keeps = useSelector((state: Keeps) => state.keeps.keeps);

  return (
    <div className="page main">
      <CreateKeepButton openModal={() => setIsModal(true)} />
      <div className="main__content">
        {keeps.length ? keeps.map((keep) => <KeepItem keep={keep} />) : null}
      </div>

      {isModal ? (
        <CreateKeepModal closeModal={() => setIsModal(false)} />
      ) : null}
    </div>
  );
};
